const jwtService = require('./jwtService')
const userService = require('./userService')
const db = require('../models')

const login = async (req, res, next) => {
  const user = req.body;
  const match = await db.User.findOne({
    where: { username: user.username,
      password: user.password
     }
  })

  if(!match) return res.status(401).send("NOT AUTHORIZED");


  const access = await jwtService.generateJWT(match.id);
  // console.log('body: ', JSON.parse(data));
  res.send({
    access_token: access
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
    userService.createUser(JSON.stringify(regData));
  }

}

module.exports = {
  login,
  registration
}