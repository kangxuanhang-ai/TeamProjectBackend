//导入
let { Sequelize, DataTypes } = require("sequelize")

//创建连接对象
let se = new Sequelize("database", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

//定义模型
let xxx = se.define("xxx", {

}, {
    tableName: "xxx",
    timestamps: false
})

//关联模型（根据表关联关系 没有关联的表不需要进行模型关联 ）
// 主表模型.hasMany(从表模型)
// 从表模型.belongsTo(主表模型)

//同步模型
se.sync({ alter: true }).then(() => {
    console.log("同步成功");
}).catch(err => {
    console.log(err);
})

//暴露模型

module.exports = {
    xxx
}