const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  let url = ctx.request.url;
  ctx.body = url
});

app.listen(3008);
console.log('server starting at port 3008...');