const Ingredient = require('./Ingredient');

class Recipe {
  constructor(recipeDetails, ingredientList) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name;
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
    this.ingredients = this.fetchIngredients(recipeDetails.ingredients, ingredientList);
  }

  fetchIngredients(recipeIngredients, ingredientList) {
    let totalIngredients = recipeIngredients.reduce((accumulator, recipeIngredient) => {
      let newIngredientInfo = ingredientList.find((ingredient) => {
        return ingredient.id === recipeIngredient.id;
      })
      recipeIngredient.name = newIngredientInfo.name;
      recipeIngredient.estimatedCostInCents = newIngredientInfo.estimatedCostInCents;
      accumulator.push(recipeIngredient);
      return accumulator;
    }, [])
    return totalIngredients;
  }
}

module.exports = Recipe;
