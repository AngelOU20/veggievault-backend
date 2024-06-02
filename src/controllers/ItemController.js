const Recipe = require("../model/ItemModel");

const getAllRecipes = async (req, res) => {
  const result = await Recipe.find().sort({ createdAt: -1 });
  res.status(200).json(result);
};

const getSeachedRecipes = async (req, res) => {
  const { q } = req.query;

  try {
    let items;
    if (q) {
      items = await Recipe.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "No recipes found" });
  }
};

const getSingleRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Not found any recipe" });
  }
};

module.exports = { getAllRecipes, getSeachedRecipes, getSingleRecipe };
