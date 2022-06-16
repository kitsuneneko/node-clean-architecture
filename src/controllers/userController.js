const db = require('../models');


const createUser = async (req, res, next) => {
  try {
    const userData = { 
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }
    const user = await db.User.create(userData); 
    res.send(`Succesfully created new user`);
  } catch (err) {
    res.send(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const userData = await db.User.destroy({
      where: { id: req.params.id },
    });

    if(!userData) return res.status(404).send("NOT FOUND");

    res.status(200);
  } catch(err) {
    console.log(err);
    res.send(500).json({ Error: err });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await db.User.update(data,{
      where: { id: req.params.id }
    }); 
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const userData = await db.User.findAll();

    if(!userData) return res.status(404).send("NOT FOUND");
    res.json(userData);

  } catch(err) {
    console.log(err);
    res.send(500).json({ Error: err });
  }
};

const getUser = async (req, res, next) => {
  try {
    const userData = await db.User.findOne({
      where: { id: req.params.id },
    });

    if(!userData) return res.status(404).send("NOT FOUND");

    res.json(userData);
  } catch(err) {
    console.log(err);
    res.send(500).json({ Error: err });
  }
};

module.exports = { 
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser
};