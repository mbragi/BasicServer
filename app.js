const express = require("express");
const data = require("./data.json");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
    data,
  });
});

module.exports = { app };
