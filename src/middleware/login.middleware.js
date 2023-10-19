const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
} = require("../config/error");
const userService = require("../service/user.service");
const md5password = require("../utils/handle.password");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  const users = await userService.findUserByName(name);
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }

  if (user.password !== md5password(password)) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRENT, ctx);
  }

  ctx.user = user;

  await next();
};

module.exports = { verifyLogin };
