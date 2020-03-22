const Koa = require('koa');
const enforceHttps = require('koa-sslify').default;
const app = new Koa();
const https = require('https');
const fs = require('fs');
const path = require('path');

app.use(enforceHttps());

const privateKey = fs.readFileSync(path.join(__dirname, './3639621.key'), 'utf8')
const certificate = fs.readFileSync(path.join(__dirname, './3639621.pem'), 'utf8')


const options = {
    key:privateKey,
    cert:certificate
}


// 创建https服务器实例
const httpsServer = https.createServer(options, async (req, res) => {
    res.writeHead(200)
    res.end('Hello https')
  })
  
  // 设置https的访问端口号
  const SSLPORT = 8081
  
  // 启动服务器，监听对应的端口
  httpsServer.listen(SSLPORT, () => {
    console.log(`HTTPS Server is running on: https://localhost:${SSLPORT}`)
  })
  