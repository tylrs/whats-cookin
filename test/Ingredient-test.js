const expect = require('chai').expect
const Ingredient = require('../src/classes/Ingredient')

describe.only('Ingredient', () => {
  let sampleIngredients, ingredient1
  beforeEach('Setup', () => {
    [{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    },
    {
      "id": 19206,
      "name": "instant vanilla pudding",
      "estimatedCostInCents": 660
    }]

    // sampleIngredients.forEach((ingredient, index) => {
    //   ingredient[index]
    // })

    ingredient1 = new Ingredient()
    // ingredient2 = new Ingredient()
    // ingredient3 = new Ingredient()
    // ingredient4 = new Ingredient()
    // ingredient5 = new Ingredient()

  })

  it('should be an instance of ingredient class', () => {
    expect(ingredient1).to.be.an.instanceof(Ingredient)
  })

  it('should have an ID property', () => {
    expect(ingredient1.id).to.equal(sampleIngredients[0].id)
  })
    
})