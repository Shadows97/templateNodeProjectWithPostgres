const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5431/test');

module.exports = {
    sequelize
}
