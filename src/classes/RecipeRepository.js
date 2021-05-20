class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterRecipes(queryInfo) {
    let totalFilteredRecipes = queryInfo.query.reduce((accumulator, query) => {
      accumulator = accumulator.filter((recipe) => {
        return recipe[queryInfo.type].includes(query)
      })
      return accumulator;
    }, this.recipes);
    return totalFilteredRecipes;
  }
  generateAllRecipeNames() {
    this.recipes.reduce((acc, recipe) => {
      
    }, acc)
    return result;
  }
  generateAllIngredientNames() {

  }
}

export default RecipeRepository;
