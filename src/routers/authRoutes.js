const authService = require('../services/authService.js');
const userService = require("../services/userService.js");
const { Router } = require('express');


const router = Router();
  router.post('/login', authService.login);
  router.post('/registration', authService.registration, userService.createUser);
module.exports = router;

