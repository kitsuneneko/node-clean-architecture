// const { Model, DataTypes } = require('sequelize');
// import { sequelize } from './index.cjs';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {  
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {  
    type: DataTypes.STRING,
    allowNull: false,
  },
}
// {
//   // sequelize,
//   tableName: 'users',
//   modulename: 'User'
// }
);

module.exports = User;  