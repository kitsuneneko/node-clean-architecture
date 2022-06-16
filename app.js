const express = require('express');
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
require("dotenv").config();

// routes
// app.use("/")
app.use("/api", require('./src/middlewares/auth/AuthVerify'), require("./src/routers/userRoutes"));
app.use("/auth", require("./src/routers/authRoutes"));


// when invalid routes are entered
app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});