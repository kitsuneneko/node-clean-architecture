// import db from "../models/index.js";

const db = require('../models');

// const Login = () => {};
// const Rre

const createUser = () => {};

const deleteUser = () => {};

const updateUser = () => {};

const getUsers = () => {
 
};

const getUser = async (req, res, next) => {
  try {
    const useData = await db.User.findOne({
      where: { id: req.params.id },
    });

    if(!userData) return res.status(404).send("NOT FOUND");

    res.json(userData);
  } catch(err) {
    console.log(err);
    res.send(500).json({ Error: err });
  }
};

// export { getUser };
module.exports = getUser;