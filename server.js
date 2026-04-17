const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello from Raspberry Pi server 👌 👌");
});

app.get("/test", (req, res) => {
  res.send("Hello from laptop edit!");
});

app.get("/ci-test", (req, res) => {
  res.send("Deployed via CI/CD!");
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
