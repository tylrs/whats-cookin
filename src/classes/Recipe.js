const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeDetails) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name;
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
    this.ingredients = this.fetchIngredients();
  }

  fetchIngredients() {
    //use recipedetails.id to find id in array of ingredients
    //then use that id to create a new ingredient isntance
    //use that new instance in addition to the recipeDetails.ingredients
    //to create a new ingredients property on the recipe class
    // const ingredients = recipeDetails.ingredients.map((ingredient) => {
    //   return
    // })
    return [];
  }
}

module.exports = Recipe;
