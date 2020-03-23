const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;
const app = new Koa();
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

app.use(enforceHttps());
 
app.use(function * (next) {
    this.body = "hello world from " + this.request.url;
});


const privateKey = fs.readFileSync(path.join(__dirname, './3639621.key'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './3639621.pem'), 'utf8')

const options = {
    key:privateKey,
    cert:certificate
}


http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(443);
