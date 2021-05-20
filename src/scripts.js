import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;
// querySelectors
const main = document.querySelector('#recipeContainer')

// event listeners

// event handlers

// other functions

console.log('Hello world');
let recipes, recipeRepository
const sampleRecipes = data.sampleRecipe
const sampleIngredients = data.sampleIngredients
recipes = sampleRecipes.map((recipe) => {
  let newRecipe = new Recipe(recipe, sampleIngredients)
  return newRecipe
})
recipeRepository = new RecipeRepository(recipes)
console.log(recipeRepository);

// let updatedInstructions, updatedRecipeIngredients, sampleRecipe, sampleIngredients, recipe1, ingredient1, ingredient2, ingredient3;
//
// sampleRecipe = {
//   "id": 595736,
//   "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
//   "ingredients": [
//     {
//       "id": 20081,
//       "quantity": {
//         "amount": 1.5,
//         "unit": "c"
//       }
//     },
//     {
//       "id": 18372,
//       "quantity": {
//         "amount": 0.5,
//         "unit": "tsp"
//       }
//     },
//     {
//       "id": 1123,
//       "quantity": {
//         "amount": 1,
//         "unit": "large"
//       }
//     },
//   ],
//   "instructions": [
//     {
//       "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
//       "number": 1
//     },
//     {
//       "instruction": "Add egg and vanilla and mix until combined.",
//       "number": 2
//     },
//     {
//       "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
//       "number": 3
//     },
//     {
//       "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
//       "number": 4
//     },
//     {
//       "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
//       "number": 5
//     },
//     {
//       "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
//       "number": 6
//     }
//   ],
//   "name": "Loaded Chocolate Chip Pudding Cookie Cups",
//   "tags": [
//     "antipasti",
//     "starter",
//     "snack",
//     "appetizer",
//     "antipasto",
//     "hor d'oeuvre"
//   ]
// },
// sampleIngredients = [
//   {
//     "id": 20081,
//     "name": "wheat flour",
//     "estimatedCostInCents": 142
//   },
//   {
//     "id": 18372,
//     "name": "bicarbonate of soda",
//     "estimatedCostInCents": 582
//   },
//   {
//     "id": 1123,
//     "name": "eggs",
//     "estimatedCostInCents": 472
//   }
// ]
//
// recipe1 = new Recipe(sampleRecipe, sampleIngredients);
// console.log(recipe1);
