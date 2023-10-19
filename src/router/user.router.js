const koaRouter = require("@koa/router");
const userController = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

const userRouter = new koaRouter({ prefix: "/users" });

userRouter.post("/", verifyUser,handlePassword, userController.create);

module.exports = userRouter;
