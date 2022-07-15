const express = require("express");
const router = express.Router();
const { Admins } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    const { id } = await Admins.create({
      username,
      email,
      password: hash,
    });
    res.json({ msg: "Admin added successfully", id });
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Admins.findOne({ where: { username } });
  if (!user) res.status(403).json({ msg: "user not found" });
  else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.status(401).json({ msg: "wrong username or password" });
      else {
        res.json({ msg: "Admin added successfully", id: user.id });
      }
    });
  }
});

module.exports = router;
