const Joi = require('joi');

const authSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .max(25)
    .required(),
})

const newUser = async (req, res, next) => {
  const body = req.body;
  const validation = authSchema.validate(body);
  if(!validation.error) {
    next();
  } else {
    validation.error.statusCode = 401;
    next(validation.error);
  }
}

module.exports = {newUser};