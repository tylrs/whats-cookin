import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleData from '../test/sampleData';
const data = sampleData.sampleData

describe.only('Recipe Repository', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should hold an array of recipes', () => {
    console.log(data.sampleIngredients.length)
  })
})




// recipe1 = new Recipe(sampleRecipe, sampleIngredients);
