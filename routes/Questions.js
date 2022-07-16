const express = require("express");
const router = express.Router();
const { Questions } = require("../models");

router.post("/", async (req, res) => {
  const { qId, questions, admin } = req.body;
  if (!qId) res.status(400).json({ msg: "id not given" });
  const link = `http://localhost:3000/#/takeQuiz?id=${qId}`;
  const { id } = await Questions.create({
    qId,
    questions,
    link,
    admin,
    quizName: questions[0].quizName,
  });
  res.json({
    msg: "Questions added successfully",
  });
});

router.get("/quizes", async (req, res) => {
  const { admin } = req.headers;
  const data = await Questions.findAll({
    attributes: ["quizName", "link"],
    where: { admin },
  });
  res.send(data);
});

module.exports = router;
