const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(process.env.DB_CNN);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

main()
  .then(() => console.log("MongoDB connected!!"))
  .catch((err) => console.log(err));

// Routes
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/CategoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
