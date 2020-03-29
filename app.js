const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const http = require('http');
const https = require('https');
const route = require("koa-route");
const static = require('koa-static');
const enforceHttps = require('koa-sslify').default;

const fs = require('fs');
const path = require('path');

const mongoose = require("mongoose");
const db = require('./database');

app.use(bodyParser());
app.use(enforceHttps());

app.use(static(path.join(__dirname)+'/public/'));

const ServerPost = fs.readdirSync(path.resolve(__dirname,"./server/POSTApi"));
ServerPost.forEach(v => {
    const url = v.replace(/\.js$/i,"");
    app.use(route.post(`/${url=="index"?"":url}`,require(`./server/POSTApi/${v}`)))
})

const ServerGet = fs.readdirSync(path.resolve(__dirname,"./server/GETApi"));
ServerGet.forEach(v => {
    const url = v.replace(/\.js$/i,"");
    app.use(route.get(`/${url=="index"?"":url}`,require(`./server/GETApi/${v}`)))
})


app.use(route.get("*",require("./routes/error.js")))

const privateKey = fs.readFileSync(path.join(__dirname, './3639621.key'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './3639621.pem'), 'utf8')

const options = {
    key:privateKey,
    cert:certificate
}

http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(443);
