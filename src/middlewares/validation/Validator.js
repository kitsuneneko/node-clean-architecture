const Joi = require('joi');

const authSchema = Joi.object({
  username: Joi.string().min(3).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern()
    .required(),
})

const authValidator = async (req, res, next) => {
  const data = req.body;
  const validation = authSchema.validate(body);
  if(!validation.error) {
    next();
  } else {
    validation.error.statusCode = 401;
    next(validation.error);
  }
}

module.exports = authValidator;