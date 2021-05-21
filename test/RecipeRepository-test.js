/* eslint-disable max-len */
import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

describe('Recipe Repository', () => {
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
    let filteredRecipes = recipeRepository.filterRecipes({type: 'tags', query: ['side dish']})

    expect(filteredRecipes).to.be.deep.equal([recipes[3], recipes[4]])
  })

  it('Should have method to filter recipes based on multiple tags', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'tags', query: ['side dish', 'starter']})

    expect(filteredRecipes).to.be.deep.equal([recipes[4]])
  })

  it('Should have a method to filter recipes based on one ingredient', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'ingredientNames', query: ['butter']})

    expect(filteredRecipes).to.be.deep.equal([recipes[2], recipes[3]])
  })

  it('Should have a method to filter recipes based on multiple ingredients', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'ingredientNames', query: ['butter', 'seasoned', 'salt']})

    expect(filteredRecipes).to.be.deep.equal([recipes[2]])
  })

  it('Should have a method to search through recipe names with a single word', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'name', query: ['maple']})

    expect(filteredRecipes).to.be.deep.equal([recipes[1]])
  })

  it('Should have a method to search through recipe names with multiple words', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'name', query: ['chocolate', 'chip']})

    expect(filteredRecipes).to.be.deep.equal([recipes[0]])
  })

  it('Should return all recipes if no match is found for a recipe name with a single word', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'name', query: ['quesadilla']})

    expect(filteredRecipes).to.be.deep.equal([])
  })

  it('Should return all recipes if no match is found for a ingredient name with a single word', () => {
    let filteredRecipes = recipeRepository.filterRecipes({type: 'ingredientNames', query: ['saffron']})

    expect(filteredRecipes).to.be.deep.equal([])
  })

  it('Should have a method to generate all recipe names', () => {
    let allRecipeNames = recipeRepository.generateAllRecipeNames();

    expect(allRecipeNames.length).to.equal(27);
  })

  it('Should have a method to generate all ingredient names', () => {
    let allIngredientNames = recipeRepository.generateAllIngredientNames();

    expect(allIngredientNames.length).to.equal(111);
  })
})
