const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name;
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
  }
}

module.exports = Recipe;
