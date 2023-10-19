const app = require("./app/index.js");
require("./utils/handle.error.js");

const { SERVER_PORT } = require("./config/server");

app.listen(SERVER_PORT, () => {
  console.log("coderhub服务器启动成功");
});
