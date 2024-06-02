const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
