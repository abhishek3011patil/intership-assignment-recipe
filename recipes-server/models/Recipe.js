const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  ingredients: [String],
  instructions: [String],
  cooking_time: { type: String, required: true },
  dietary: [String], // e.g., ["vegetarian", "gluten-free"]
  image: String, // URL to the image
});

module.exports = mongoose.model('Recipe', recipeSchema);
