const Koa = require("koa");
const koaRouter = require("@koa/router");

const app = new Koa();
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/list", (ctx, next) => {
  ctx.body = "数据";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("coderhub服务器启动成功");
});
