const userService = require("../services/userService.js");
const { Router } = require('express');
// const bodyParser = require('body-parser');

const router = Router();
  router.get('/users', userService.getUsers);
  router.post('/user/new', userService.createUser);
  router.get("/user/:id", userService.getUser);
  router.patch("/user/:id", userService.updateUser);
  router.delete("/user/:id", userService.deleteUser);
module.exports = router;