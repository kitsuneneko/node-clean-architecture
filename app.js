const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

// routes
// app.use("/")
app.use("/api", require("./src/controllers/userController"));


// when invalid routes are entered
app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});