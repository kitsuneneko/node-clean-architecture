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
  res.send({
    access_token: token
  });

};


module.exports = {
  login,
}