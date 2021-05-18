class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterByTags(tags) {
    let totalFilteredRecipes = tags.reduce((accumulator, tag) => {
      accumulator = accumulator.filter((recipe) => {
        return recipe.tags.includes(tag)
      })
      return accumulator;
    }, this.recipes);
    return totalFilteredRecipes;
  }

}

export default RecipeRepository;
