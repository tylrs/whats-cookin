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
    recipeRepository = new RecipeRepository(recipes)
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should be able to hold recipes', () => {
    expect(recipeRepository.recipes).to.deep.equal(recipes)
  })
  it('Should have method to filter recipes based on one or more tags', () => {
    let filteredRecipes = recipeRepository.filterByTags(['snack']) 
    console.log(recipes[0])
    expect(filteredRecipes).to.be.deep.equal([recipes[0]])
  })
  it.skip('', () => {
    
  })

})


//       "name": "Loaded Chocolate Chip Pudding Cookie Cups",


// recipe1 = new Recipe(sampleRecipe, sampleIngredients);
