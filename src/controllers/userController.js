const { getUser } = require("../services/userService.js");


const userController = (router) => {
  router.get("/users/:id", getUser);
}

// export default userController;
module.exports = userController;