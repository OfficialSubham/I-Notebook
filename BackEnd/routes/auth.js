const dotEnv = require("dotenv");
const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const process = require("process");
const getuserdetails = require('../middleware/getuserdetails')
//setting up the env file so that i can get the env variable from
//env file
dotEnv.config();

//Create a user using: POST

router.get("/", (req, res) => {
  res.redirect("/createuser");
});

//Route For SignUp using: POST

router.post(
  "/createuser",
  [
    //validating the values came from client
    body("name").not().isEmpty(),
    body("username").isLength({ min: 3 }),
    body("email", "email de dooooo").isEmail(),
  ],
  async (req, res) => {
    try {
      //Trying this
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //The results of the valid client request
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(422).json({ errors: result.array() });
      }

      //Setting the Password securely Using Bcryptjs
      const salt = await bcryptjs.genSalt(10);
      const seccurePassword = await bcryptjs.hash(req.body.password, salt);

      //Searching for existing user with that name
      let existinguser = await UserModel.findOne({ email: req.body.email });
      if (existinguser) {
        return res.status(400).json({
          Error: "Email Or Username Already Exist",
        });
      }
      //if not exist then create a new user
      let User = await UserModel.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: seccurePassword,
      });
      //Getting the data from env files
      let secret = process.env.SECRET_CODE;

      //This below data will be hold by the api
      let UserId = {
        id: User.id,
      };
      //Setting up the authintication code/api
      //using the api i can get the user details
      let authapi = jwt.sign(UserId, secret);

      res.json({ authapi });
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

//Route For Login using: POST

router.post(
  "/login",
  [
    //validating the values came from client for login
    body("username").notEmpty(),
    body("password").notEmpty(),
  ],
  async (req, res) => {
    try {
      //Trying this
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //The results of the valid client request
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }

      const { username, password } = req.body;

      //Searching for existing user with that name
      let loginUser = await UserModel.findOne({ username: username });
      if (!loginUser) {
        return res.status(400).json({
          Error: "Please Login With Correct details",
        });
      }

      let ComparePassword = await bcryptjs.compare(password, loginUser.password);

      //if the password is wrong then below code will run

      if (!ComparePassword) {
        return res.status(400).json({
          Error: "Please Login With Correct details",
        });
      } else {
        //This below data will be hold by the api
        let UserId = {
          id: loginUser.id,
        };
        //Getting the data from env files
        let secret = process.env.SECRET_CODE;
        //Setting up the authintication code/api
        //using the api i can get the user details
        let authapi = jwt.sign(UserId, secret);

        res.json({ authapi });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
);

//Route for getting LoggedIn User details using: POST loggedin Required

router.post("/getuser", getuserdetails, async (req, res) => {
  try {
    let userId = req.id;
    const userDetails = await UserModel.findById(userId).select("-password")
    res.send(userDetails)
  } catch (error) {
    res.status(400).send("Please Enter valid data")
  }
})

//for my checking
// router.get("/getalluser", async (req, res) => {
//   let alluser = await UserModel.find()
//   res.send(alluser)
// })

module.exports = router;
