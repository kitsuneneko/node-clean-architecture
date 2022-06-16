const authController = require('../controllers/authController.js');
const userController = require("../controllers/userController.js");
const validator = require('../middlewares/validation/Validator')
const { Router } = require('express');


const router = Router();

  router.post('/login', authController.login);
  router.post('/registration', validator.newUser, userController.createUser);
  
module.exports = router;

