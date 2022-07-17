const express = require("express");
const router = express.Router();
const { Scores } = require("../models");

router.put("/", async (req, res) => {
  const { email, score } = req.body;
  Scores.update({ score }, { where: { email } })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  res.json({
    msg: "Scores added successfully",
  });
});

router.post("/", async (req, res) => {
  const { qId, name, email } = req.body;
  if (!qId) res.status(400).json({ msg: "id not given" });
  const checkExists = await Scores.findOne({
    where: { email },
  });
  if (checkExists) {
    res.status(409).json({ msg: "You have already given the exams." });
    return;
  }
  const { id } = await Scores.create({
    qId,
    name,
    email,
    score: 0,
  });
  res.json({ msg: "Good to go." });
});

router.get("/allScores", async (req, res) => {
  const { qId } = req.headers;
  const data = await Scores.findAll({
    where: { qId },
  });
  res.send(data);
});

module.exports = router;
