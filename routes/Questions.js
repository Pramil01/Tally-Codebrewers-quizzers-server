const express = require("express");
const router = express.Router();
const { Questions } = require("../models");

router.post("/", async (req, res) => {
  const { qId, questions, admin, baseURL } = req.body;
  if (!qId) res.status(400).json({ msg: "id not given" });
  const link = `${baseURL}/#/takeQuiz?id=${qId}`;
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

router.get("/", async (req, res) => {
  const { qid } = req.headers;
  const data = await Questions.findOne({
    attributes: ["questions"],
    where: { qid },
  });
  res.send(data);
});

router.get("/quizes", async (req, res) => {
  const { admin } = req.headers;
  const data = await Questions.findAll({
    attributes: ["quizName", "link", "qId"],
    where: { admin },
  });
  res.send(data);
});

module.exports = router;
