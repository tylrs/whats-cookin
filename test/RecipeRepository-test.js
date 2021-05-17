import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData

describe.only('Recipe Repository', () => {
  let recipes, recipeRepository
  beforeEach('Setup', () => {
    const sampleRecipes = data.sampleRecipe
    const sampleIngredients = data.sampleIngredients
    recipes = sampleRecipes.map((recipe) => {
      let newRecipe = new Recipe(recipe, sampleIngredients)
      return newRecipe
    })
    const recipeRepository = new RecipeRepository(recipes)
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should hold an array of recipes', () => {
    expect(recipeRepository.recipes).to.deep.equal(recipes)
  })
})




// recipe1 = new Recipe(sampleRecipe, sampleIngredients);
