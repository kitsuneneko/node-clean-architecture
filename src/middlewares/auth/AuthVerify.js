const jwt = require('jsonwebtoken');


module.exports = async (req, res, next) => {
  try{
    const auth = req.headers.authorization
    const token = ( auth && auth.startsWith('Bearer')) ? auth.split(' ')[1] : undefined;
    if(!token)
    return res.status(401).send("NOT AUTHORIZED");
    
    const verification = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET || 'secretphrase');
    
    next();

  } catch(err){
    return res.status(401).send("NOT AUTHORIZED");
  }

}