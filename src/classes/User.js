class User {
  constructor(recipeRepo, name) {
    this.favoriteRecipes = recipeRepo;
    this.recipesToCook = recipeRepo;
    this.name = name;
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.recipes.includes(recipe)) {
      this.favoriteRecipes.recipes.push(recipe);
    }
  }

  filterFavoriteRecipes(queryInfo) {
    return this.favoriteRecipes.filterRecipes(queryInfo);
  }

};


module.exports = User;
