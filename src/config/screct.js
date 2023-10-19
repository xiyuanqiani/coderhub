const fs = require("fs");
const path = require("path");

// 默认情况下相对目录和node程序的启动目录有关系
const PRIVATEKEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);

const PUBLICKEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"));

module.exports = {
  PRIVATEKEY,
  PUBLICKEY,
};
