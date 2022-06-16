// const jwtService = require('./jwtService')
const userService = require('./userService');
const db = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  const user = req.body;
  const match = await db.User.findOne({
    where: { username: user.username,
      password: user.password
     }
  })

  if(!match) return res.status(401).send("NOT AUTHORIZED");

  const token = jwt.sign(
    { payload: match.id }, 
    process.env.JWT_ACCESS_TOKEN_SECRET || 'secretphrase',
    { expiresIn: process.env.JWT_EXPIRES_IN || '2m' }
  );
  // const access = await jwtService.generateJWT(match.id);
  // console.log('body: ', JSON.parse(data));
  res.send({
    access_token: token
  });

  // res.send(200);
};

const registration = async (req, res, next) => {
  const regData = { 
    username: req.body.username,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    email: req.body.email
  }
  if(regData.password == regData.confirm_password) {
    next();
  } else {
    res.sendStatus(403);
  }

}

module.exports = {
  login,
  registration
}