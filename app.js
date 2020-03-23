const Koa = require('koa');
const route = require("koa-route");
const static = require('koa-static');

const enforceHttps = require('koa-sslify').default;
const app = new Koa();
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

app.use(enforceHttps());

app.use(static(path.join(__dirname)+'/public/'));
const routes = fs.readdirSync(path.resolve(__dirname,"./routes"));

routes.forEach(v => {
    const url = v.replace(/\.js$/i,"");
    app.use(route.get(`/${url=="index"?"":url}`,require(`./routes/${v}`)))
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
