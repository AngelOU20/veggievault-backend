const Category = require("../model/CategoryModel");
const Recipe = require("../model/ItemModel");

const getCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const categoryData = await Category.findOne({ name: category });
    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }

    const recipes = await Recipe.find({ menuId: categoryData.menuId });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getCategory,
};
