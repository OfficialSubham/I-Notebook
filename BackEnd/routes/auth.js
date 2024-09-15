const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello")
})

router.get("/login", (req, res) => {
    res.send("Login Page");
})

router.get("/signup", (req, res) => {
    res.send("Signup Page");
})

module.exports = router
