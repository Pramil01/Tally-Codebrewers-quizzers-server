const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: " *",
  })
);

// Routers;
const adminRouter = require("./routes/Admins");
app.use("/auth", adminRouter);

const quesRouter = require("./routes/Questions");
app.use("/ques", quesRouter);

const scoreRouter = require("./routes/Scores");
app.use("/scores", scoreRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
