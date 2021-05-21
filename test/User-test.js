/* eslint-disable max-len */
import { expect } from 'chai';
import User from '../src/classes/User';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

describe('User', () => {
  let recipes, recipeRepository, user1
  beforeEach('Setup', () => {
    const sampleUsers = data.sampleUsers;
    const sampleRecipes = data.sampleRecipe
    const sampleIngredients = data.sampleIngredients
    recipes = sampleRecipes.map((recipe) => {
      let newRecipe = new Recipe(recipe, sampleIngredients)
      return newRecipe;
    })
    recipeRepository = new RecipeRepository([])
    user1 = new User(sampleUsers[0]);
    user1.addFavoriteRecipe(recipes[0])
    user1.addFavoriteRecipe(recipes[1])
    user1.addFavoriteRecipe(recipes[2])
    user1.addFavoriteRecipe(recipes[3])
    user1.addFavoriteRecipe(recipes[4])
  })

  it('Should be an instance of a user class', () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('Should have a name', () => {
    expect(user1.name).to.equal('Saige O\'Kon');
  })

  it('Should have an ID', () => {
    expect(user1.id).to.equal(1);
  })

  it('Should have a favorite recipes array which is an instance of a recipe repository', () => {
    expect(user1.favoriteRecipes).to.be.an.instanceOf(RecipeRepository);
  })

  it('Should have a recipes to cook array which is an instance of a recipe repository', () => {
    expect(user1.recipesToCook).to.be.an.instanceOf(RecipeRepository);
  })

  it('Should have a method to favorite recipes', () => {
    expect(user1.favoriteRecipes.recipes.length).to.equal(5);
    expect(user1.favoriteRecipes.recipes).to.deep.equal(recipes)
  })

  it('Should only favorite unique recipes', () => {
    user1.addFavoriteRecipe(recipes[0])

    expect(user1.favoriteRecipes.recipes.length).to.equal(5);
    expect(user1.favoriteRecipes.recipes).to.deep.equal(recipes)
  })

  it('Should have a method to add recipes to cook this week', () => {
    user1.addRecipeToCookThisWeek(recipes[0])

    expect(user1.recipesToCook.recipes.length).to.equal(1);
    expect(user1.recipesToCook.recipes).to.deep.equal([recipes[0]])
  })

  it('Should have a method to unFavorite recipes', () => {

    user1.removeFavoriteRecipe(recipes[0].id);

    expect(user1.favoriteRecipes.recipes.length).to.equal(4);
    expect(user1.favoriteRecipes.recipes).to.deep.equal([recipes[1], recipes[2], recipes[3], recipes[4]]);
  })

  it('Should not remove item from favoriteRecipes if id does not match', () => {
    user1.removeFavoriteRecipe(2126351423);

    expect(user1.favoriteRecipes.recipes.length).to.equal(5);
    expect(user1.favoriteRecipes.recipes).to.deep.equal(recipes);
  })

  it('Should have a method to filter favoriteRecipes based on one tag', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'tags', query: ['side dish']})

    expect(filteredRecipes).to.be.deep.equal([recipes[3], recipes[4]])
  })

  it('Should have a method to filter favoriteRecipes based on multiple tags', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'tags', query: ['side dish', 'starter']})

    expect(filteredRecipes).to.be.deep.equal([recipes[4]])
  })

  it('Should have a method to filter favoriteRecipes based on one ingredient', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'ingredientNames', query: ['butter']})

    expect(filteredRecipes).to.be.deep.equal([recipes[2], recipes[3]])
  })

  it('Should have a method to filter favoriteRecipes based on multiple ingredients', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'ingredientNames', query: ['butter', 'seasoned', 'salt']})

    expect(filteredRecipes).to.be.deep.equal([recipes[2]])
  })

  it('Should have a method to search through favoriteRecipe names with a single word', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'name', query: ['maple']})

    expect(filteredRecipes).to.be.deep.equal([recipes[1]])
  })

  it('Should have a method to search through favoriteRecipe names with multiple words', () => {
    let filteredRecipes = user1.filterFavoriteRecipes({type: 'name', query: ['chocolate', 'chip']})

    expect(filteredRecipes).to.be.deep.equal([recipes[0]])
  })

})
