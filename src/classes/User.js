import RecipeRepository from './RecipeRepository';

class User {
  constructor(name) {
    this.favoriteRecipes = new RecipeRepository([]);
    this.recipesToCook = new RecipeRepository([]);
    this.name = name;
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.recipes.includes(recipe)) {
      this.favoriteRecipes.recipes.push(recipe);
    }
  }

  addRecipeToCookThisWeek(recipe) {
    if (!this.recipesToCook.recipes.includes(recipe)) {
      this.recipesToCook.recipes.push(recipe);
    }
  }

  filterFavoriteRecipes(queryInfo) {
    return this.favoriteRecipes.filterRecipes(queryInfo);
  }

};


export default User;
