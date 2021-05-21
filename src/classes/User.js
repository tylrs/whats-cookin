class User {
  constructor(recipeRepo, name) {
    this.favoriteRecipes = recipeRepo;
    this.recipesToCook = recipeRepo;
    this.name = name;
  }
};


module.exports = User;
