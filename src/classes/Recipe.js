/* eslint-disable max-len */
class Recipe {
  constructor(recipeDetails, ingredientList) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name.toLowerCase().split(' ');
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
    this.ingredients = this.fetchIngredients(recipeDetails.ingredients, ingredientList);
    this.ingredientNames = this.getIngredientNames();
    this.isFavorited = false;
    this.isToBeCooked = false;
  }

  fetchIngredients(recipeIngredients, ingredientList) {
    return recipeIngredients.map((recipeIngredient) => {
      let newIngredientInfo = ingredientList.find((ingredient) => {
        return ingredient.id === recipeIngredient.id;
      })
      recipeIngredient.name = newIngredientInfo.name;
      recipeIngredient.estimatedCostInCents = newIngredientInfo.estimatedCostInCents;
      return recipeIngredient;
    });
  }

  getIngredientNames() {
    return this.ingredients.reduce((acc, ingredient) => {
      let separatedNames = ingredient.name.split(' ')
      separatedNames.forEach((name) => {
        acc.push(name);
      })
      return acc;
    }, [])
  }

  getTotalCost() {
    return this.ingredients.reduce((accumulator, ingredient) => {
      accumulator += ingredient.estimatedCostInCents * ingredient.quantity.amount;
      return accumulator;
    }, 0);
  }

  getInstructions() {
    return this.instructions.map((instruction) => {
      return `${instruction.number}. ${instruction.instruction}`;
    })
  }

  favorite() {
    this.isFavorited = true;
  }

  unFavorite() {
    this.isFavorited = false;
  }

  toCook() {
    this.isToBeCooked = true;
  }

  removeToCook() {
    this.isToBeCooked = false;
  }
}

module.exports = Recipe;
