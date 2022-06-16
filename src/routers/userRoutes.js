const userController = require("../controllers/userController.js");
const validator =  require('../middlewares/validation/Validator')
const { Router } = require('express');

const router = Router();

  router.get('/users', userController.getUsers);
  router.post('/user/new', validator.newUser, userController.createUser);
  router.get("/user/:id", userController.getUser);
  router.patch("/user/:id", userController.updateUser);
  router.delete("/user/:id", userController.deleteUser);
  
module.exports = router;