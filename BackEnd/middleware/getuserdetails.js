const process = require("process");
const dotEnv = require("dotenv");
const jwt = require("jsonwebtoken");

dotEnv.config();

function getuserdetails(req, res, next) {
  //getting the token from header
  let token = req.header("auth-api");
  if (!token) {
    //if there is no token then return erron
    return res.status(400).send("Give a valid token");
  }

  try {
    let secret = "iamsoldierboy"
    // let secret = process.env.SECRET_CODE;
    //varifying the token
    let User = jwt.verify(token, secret);
    req.id = User.id;
    next();
  } catch (error) {
    res.status(400).json({error: error});
  }
}

module.exports = getuserdetails;
