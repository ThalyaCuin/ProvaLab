const Sequelize = require('sequelize')
const sequelize = new Sequelize("web_node", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}