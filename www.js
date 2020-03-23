
const koa = require("koa");
const app = new koa();
const route = require("koa-route");
const fs = require("fs");
const path = require("path");
const static = require('koa-static');

app.use(static(path.join(__dirname)+'/public/'));
const routes = fs.readdirSync(path.resolve(__dirname,"./routes"));

routes.forEach(v => {
    const url = v.replace(/\.js$/i,"");
    app.use(route.get(`/${url=="index"?"":url}`,require(`./routes/${v}`)))
})


const _error = path.resolve(__dirname,"./routes/error.js");
app.use(route.get("*",require("./routes/error.js")))



app.listen(8081)
