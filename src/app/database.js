const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  database: "coderhub",
  password: ".17383180440ys",
  connectionLimit: 5,
});

// 判断连接是否成功
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("数据库连接失败", err);
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log("数据库连接失败", err);
    } else {
      console.log("数据库连接成功");
    }
  });
});

const connection = connectionPool.promise();

module.exports = connection;
