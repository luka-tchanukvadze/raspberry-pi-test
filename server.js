const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Raspberry Pi server 👌");
});

app.listen(3002, () => {
  console.log("Server running on port 3002");
});
