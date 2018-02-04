const Koa = require('koa');
const app = new Koa();
const router = require('./src/router');

app
    .use(router.routes())
    .listen(3000);