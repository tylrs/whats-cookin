const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name;
    this.tags = recipeDetails.tags;
  }
}

module.exports = Recipe;
