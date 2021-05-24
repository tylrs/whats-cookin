/* eslint-disable max-len */
const expect = require('chai').expect;
const Recipe = require('../src/classes/Recipe');
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

describe('Recipe', () => {
  let updatedInstructions, updatedRecipeIngredients, sampleRecipe, sampleIngredients, recipe1, ingredient1, ingredient2, ingredient3;
  beforeEach('Setup', () => {
    sampleRecipe = data.sampleRecipe[0];
    sampleIngredients = data.sampleIngredients;
    recipe1 = new Recipe(sampleRecipe, sampleIngredients);

    updatedRecipeIngredients = [
      {
        id: 20081,
        quantity: { amount: 1.5, unit: 'c' },
        name: 'wheat flour',
        estimatedCostInCents: 142
      },
      {
        id: 18372,
        quantity: { amount: 0.5, unit: 'tsp' },
        name: 'bicarbonate of soda',
        estimatedCostInCents: 582
      },
      {
        id: 1123,
        quantity: { amount: 1, unit: 'large' },
        name: 'eggs',
        estimatedCostInCents: 472
      }
    ]

    updatedInstructions = [
    '1. In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
    '2. Add egg and vanilla and mix until combined.',
    '3. Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
    '4. Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
    '5. Bake for 9 to 10 minutes, or until you see the edges start to brown.',
    '6. Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.'
    ]
  })

  it('should be an instance of Recipe', () => {
    expect(recipe1).to.be.an.instanceof(Recipe);
  })

  it('should have a recipe id', () => {
    expect(recipe1.id).to.equal(595736);
  })

  it('should have a recipe image', () => {
    expect(recipe1.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  })

  it('should have a name which is an array of separate lowerCase words', () => {
    expect(recipe1.name).to.deep.equal([ 'loaded', 'chocolate', 'chip', 'pudding', 'cookie', 'cups' ]);
  })

  it('should have instructions', () => {
    expect(recipe1.instructions).to.deep.equal(sampleRecipe.instructions);
  })

  it('should have tags', () => {
    expect(recipe1.tags).to.deep.equal(sampleRecipe.tags);
  })

  it('should have a method which returns a new list of ingredients with updated information', () => {
    const updatedIngredients = recipe1.fetchIngredients(sampleRecipe.ingredients, sampleIngredients)
    expect(updatedIngredients).to.deep.equal(updatedRecipeIngredients);
  })

  it('should have a property which has the returned value from fetchIngredients', () => {
    expect(recipe1.ingredients).to.deep.equal(updatedRecipeIngredients);
  })

  it('should have a method to return ingredient names', () => {
    expect(recipe1.getIngredientNames()).to.deep.equal(['wheat', 'flour', 'bicarbonate', 'of', 'soda', 'eggs'])
  })

  it('should have a method to return total cost of ingredients in cents', () => {
    expect(recipe1.getTotalCost()).to.equal(976);
  })

  it('should have a method to return updated recipe instructions', () => {
    expect(recipe1.getInstructions()).to.deep.equal(updatedInstructions)
  })
})
