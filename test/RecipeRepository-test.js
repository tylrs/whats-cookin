/* eslint-disable max-len */
import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

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
  it('Should have method to filter recipes based on one tag', () => {
    let filteredRecipes = recipeRepository.filterByTags(['side dish'])

    expect(filteredRecipes).to.be.deep.equal([recipes[3], recipes[4]])
  })
  it('Should have method to filter recipes based on multiple tags', () => {
    let filteredRecipes = recipeRepository.filterByTags(['side dish', 'starter'])
  
    expect(filteredRecipes).to.be.deep.equal([recipes[4]])
  })
  it('Should have a method to filter recipes based on one ingredient', () => {

  })
  it('Should have a method to filter recipes based on multiple ingredients', () => {

  })
  it('Should have a method to search through recipe names on a single word', () => {
    
  })
  it('Should have a method to search through recipe names on multiple word', () => {
    
  })
  it('Should return all recipes if no match is found for a recipe name', () => {
    
  })
  it('Should return all recipes if no match is found for a ingredient name', () => {
    
  })
})
