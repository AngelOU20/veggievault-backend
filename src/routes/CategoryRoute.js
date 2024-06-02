const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");

router.get("/categories/:category", categoryController.getCategory);

module.exports = router;
