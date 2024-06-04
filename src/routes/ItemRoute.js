const express = require("express");
const router = express.Router();

const ItemController = require("../controllers/ItemController");

router.get("/all-recipes", ItemController.getAllRecipes);
router.get("/recipes", ItemController.getSeachedRecipes);
router.get("/recipes/:id", ItemController.getSingleRecipe);
router.get("/latest-recipes", ItemController.getLatestRecipes);

module.exports = router;
