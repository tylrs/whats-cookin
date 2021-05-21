class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterRecipes(queryInfo) {
    if (queryInfo.query.length > 0) {
      let totalFilteredRecipes = queryInfo.query.reduce((accumulator, query) => {
        accumulator = accumulator.filter((recipe) => {
          return recipe[queryInfo.type].includes(query)
        })
        return accumulator;
      }, this.recipes);
      return totalFilteredRecipes;
    } else {
      return [];
    }
  }
  generateAllRecipeNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.name.forEach((word) => {
        acc.push(word);
      })
      return acc;
    }, [])
    return result;
  }
  generateAllIngredientNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.ingredientNames.forEach((ingredient) => {
        acc.push(ingredient)
      })
      return acc;
    }, [])
    return result;
  }
}

export default RecipeRepository;
