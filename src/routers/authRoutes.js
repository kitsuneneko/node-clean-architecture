const authService = require('../services/authService.js');
const userService = require("../services/userService.js");
const validator = require('../middlewares/validation/Validator')
const { Router } = require('express');


const router = Router();
  router.post('/login', authService.login);
  router.post('/registration', validator.newUser, userService.createUser);
module.exports = router;

