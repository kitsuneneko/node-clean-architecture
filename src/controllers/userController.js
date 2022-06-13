const userService = require("../services/userService.js");
const db = require('../models');

const authService = require('../services/authService.js');


const { Router } = require('express');
// const bodyParser = require('body-parser');

const router = Router();
  router.get('/users', userService.getUsers);
  router.post('/user/new', userService.createUser);
  router.get("/user/:id", userService.getUser);
  router.patch("/user/:id", userService.updateUser);
  router.delete("/user/:id", userService.deleteUser);
  router.post('/login', authService.login);
  router.post('/registration', authService.registration);


module.exports = router;