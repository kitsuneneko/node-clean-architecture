const userService = require("../services/userService.js");
const validator =  require('../middlewares/validation/Validator')
const { Router } = require('express');

const router = Router();
  router.get('/users', userService.getUsers);
  router.post('/user/new', validator.newUser, userService.createUser);
  router.get("/user/:id", userService.getUser);
  router.patch("/user/:id", userService.updateUser);
  router.delete("/user/:id", userService.deleteUser);
module.exports = router;