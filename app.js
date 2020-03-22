const https = require('https');
const fs = require('fs');
const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;
const app = new Koa();
app.use(enforceHttps());

const options = {
    key:fs.readFileSync('./3639621_www.zjsor.com.key'),
    cert:fs.readFileSync('./3639621_www.zjsor.com.pen')
}

https.createServer(options, app.callback()).listen(8081, () => {
    ctx.body = 'Hello https World';
  });

// response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(8081);