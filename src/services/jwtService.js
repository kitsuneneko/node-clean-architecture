const jwt = require('jsonwebtoken');
// const { JWT_ACCESS_TOKEN_SECRET, JWT_SIGN_OPTIONS } = require('config');
// const { JWT_ACCESS_TOKEN_SECRET } = require('../../.env');

// const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;
const JWT_ACCESS_TOKEN_SECRET = 'secret';


// const { BadRequestError } = require('../../utils/api-errors');
// const secretKey = require('../../config/constants').secret;

// const generateJWT = async ({ payload, secretKey = JWT_ACCESS_TOKEN_SECRET, signOption = JWT_SIGN_OPTIONS }) => {
const generateJWT = async (payload, secretKey = JWT_ACCESS_TOKEN_SECRET) => {
  try {
    const token = `Bearer ${jwt.sign({payload, secretKey})}`;
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