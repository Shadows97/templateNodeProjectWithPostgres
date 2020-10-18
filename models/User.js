const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConfig')


const UserModel = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {
  freezeTableName: true,
  timestamps: true,
  createdAt: true,
  updatedAt: 'updateTimestamp'
});

module.exports = {
  User: UserModel
}
  
  