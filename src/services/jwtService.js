const jwt = require('jsonwebtoken');
require("dotenv").config();


const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;

const generateJWT = async (payload) => {
  try {
    const token = `Bearer ${jwt.sign({payload, 
      // secretKey: JWT_ACCESS_TOKEN_SECRET, 
      // expiresIn: process.env.JWT_EXPIRES_IN
    }, JWT_ACCESS_TOKEN_SECRET)}`;
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
};


const verifyJWT = async ({ token, secretKey = JWT_ACCESS_TOKEN_SECRET, signOption = JWT_SIGN_OPTIONS }) => {
  try {
    const data = jwt.verify(token, secretKey, signOption);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  generateJWT,
  verifyJWT
};