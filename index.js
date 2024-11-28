const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

app.use(express.json());

const corsOptions = {
  origin: ["https://veggievault-frontend.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

async function main() {
  await mongoose.connect(process.env.DB_CNN);
}

main()
  .then(() => console.log("MongoDB connected!!"))
  .catch((err) => console.log(err));

const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes = require("./src/routes/CategoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
