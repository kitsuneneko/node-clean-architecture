const jwtService = require('./jwtService')

const login = async (req, res, next) => {
  // try {


  // } catch(err) {
  //   res.status(500).send(Error.err)
  // }

  const data = req.body;
  const access = await jwtService.generateJWT(data);
  console.log('body: ', JSON.parse(data));
  res.send({
    access_token: access
  });

  // res.send(200);
};

module.exports = {
  login,

}