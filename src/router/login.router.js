const koaRouter = require("@koa/router");
const loginRouter = new koaRouter({ prefix: "/login" });
const loginController = require("../controller/login.controller");
const { verifyLogin } = require("../middleware/login.middleware");

loginRouter.post("/", verifyLogin, loginController.sign);

module.exports = loginRouter;
