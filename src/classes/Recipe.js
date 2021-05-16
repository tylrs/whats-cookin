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
    return this.ingredients.map((ingredient) => {
      return ingredient.name;
    })
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
}

module.exports = Recipe;
