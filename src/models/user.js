const { Model } = require('sequelize');
// import { sequelize } from './index.cjs';
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelize, DataTypes) => {

  class User extends Model {} 

  User.init({
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
    },
    {
      sequelize,
      tableName: 'Users',
      modulename: 'User'
    }
  );
  
  return User;
};


// const User = sequelize.define('User', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   username: {  
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   // role: {  
//   //   type: DataTypes.STRING,
//   //   allowNull: false,
//   // },
// },
// {
//   sequelize:
//   tableName: 'users',
//   modulename: 'User'
// }
// );

// module.exports = User;  
