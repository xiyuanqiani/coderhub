const jwt = require("jsonwebtoken");
const { PRIVATEKEY } = require("../config/screct");

class loginController {
  sign(ctx, next) {
    const { id, name } = ctx.user;

    const token = jwt.sign({ id, name }, PRIVATEKEY, {
      expiresIn: 24 * 60 * 60,
      algorithm: "RS256",
    });

    ctx.body = { code: 0, data: { id, name, token }, message: "登录成功" };
  }
}

module.exports = new loginController();
