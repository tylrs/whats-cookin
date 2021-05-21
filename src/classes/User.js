import RecipeRepository from './RecipeRepository';

class User {
  constructor(userInfo) {
    this.favoriteRecipes = new RecipeRepository([]);
    this.recipesToCook = new RecipeRepository([]);
    this.name = userInfo.name;
    this.id = userInfo.id;
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.recipes.includes(recipe)) {
      this.favoriteRecipes.recipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipeID) {
    let index = this.favoriteRecipes.recipes.findIndex((recipe) => {
      return recipe.id === recipeID;
    })
    if (index !== -1) {
      this.favoriteRecipes.recipes.splice(index, 1);
    }
  }

  filterFavoriteRecipes(queryInfo) {
    return this.favoriteRecipes.filterRecipes(queryInfo);
  }

  addRecipeToCookThisWeek(recipe) {
    if (!this.recipesToCook.recipes.includes(recipe)) {
      this.recipesToCook.recipes.push(recipe);
    }
  }

};


export default User;
