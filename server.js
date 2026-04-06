const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Raspberry Pi server 👌");
});

// testing pm2 / auto deployment / 4

app.get("/test", (req, res) => {
  res.send("Hello from laptop edit!");
});

app.listen(3003, () => {
  console.log("Server running on port 3003");
});
