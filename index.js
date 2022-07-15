const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routers;

const userRouter = require("./routes/Admins");
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
