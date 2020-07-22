const router = require("express").Router();
let users = require("../models/Users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/Users.model");

require("dotenv").config();

router.route("/").get((req, res) => {
  users
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  users.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    //validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign(
        //user id as a payload?
        { id: user.id },
        process.env.jwtsecret,
        // token to last 1h
        { expiresIn: 3600 },
        (err, token) => {
          if (err) return res.status(500).send("Server Error");
          res.json({
            token,
            user: {
              id: user.id,
              role: user.role,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});
// JWT is stateless
// @route GET request auth/ USers users
// @desc Get user data
// @access private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      res.status(500).send("Server Error");
    });
});

module.exports = router;
