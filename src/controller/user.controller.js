const userService = require("../service/user.service");

class userController {
  async create(ctx, next) {
    const user = ctx.request.body;

    // user信息存储到数据库
    const result = await userService.create(user);

    ctx.body = {
      message: "创建用户成功",
      data: result,
    };
  }
}

module.exports = new userController();
