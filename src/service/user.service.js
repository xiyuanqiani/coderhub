const connection = require("../app/database");
class userService {
  async create(user) {
    const {name,password} = user

    const statement = 'INSERT INTO `user` (name,password) values (?,?);'

    const [result] =  await connection.execute(statement,[name,password])
    return result
  }

  async findUserByName(name){
    const statement = 'SELECT * FROM `user` WHERE name = ?;'
    const [values] = await connection.execute(statement,[name])
    return values
  }
}

module.exports = new userService();
