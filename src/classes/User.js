class User {
  constructor(recipeRepo) {
    this.favoriteRecipes = recipeRepo;
    this.recipesToCook = recipeRepo;
  }
};


module.exports = User;
