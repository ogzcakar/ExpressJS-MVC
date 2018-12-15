const Sequelize = require('sequelize');

const db = new Sequelize({
    host: process.env.host,
    database: process.env.database,
    username: process.env.username,
    password: process.env.password,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // logging:false,
    operatorsAliases: false
});

module.exports = {
  Sequelize,
  db
};
