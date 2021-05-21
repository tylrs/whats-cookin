import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

//extra
let recipes, recipeRepository;
const sampleRecipes = data.sampleRecipe
const sampleIngredients = data.sampleIngredients
recipes = sampleRecipes.map((recipe) => {
  let newRecipe = new Recipe(recipe, sampleIngredients)
  return newRecipe
})
recipeRepository = new RecipeRepository(recipes)
// console.log(recipeRepository);

// querySelectors
const main = document.querySelector('#recipeContainer');
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')


// event listeners
searchButton.addEventListener('click', searchThroughRecipes)

// event handlers
function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  renderRecipes(uniqueFilteredRecipes);
  console.log('These are filtered', uniqueFilteredRecipes);
  // console.log(filteredRecipesByName);
  // console.log(allFilteredRecipes);
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = recipeRepository.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = recipeRepository.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' ');
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  console.log(convertedUserSearch);
  // let convertedUserSearch = {
  //   type: 'name',
  //   query: [`${userSearch}`]
  // }
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchObject = alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = recipeRepository.generateAllRecipeNames();
    let allIngredientNames = recipeRepository.generateAllIngredientNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
    if (allIngredientNames.includes(word)) {
      acc.ingredientNames.query.push(word);
    }
    return acc;
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
  console.log(searchObject);
  return searchObject;
}

// other functions
renderRecipes(recipeRepository.recipes);
//rendering tags....
//loop through recipe tags

function renderRecipes(recipes) {
  main.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4 class="tags flex-column">${tag}</h4>`
    })
    let recipeNames = recipe.name.map((name) => {
      return name[0].toUpperCase() + name.substring(1);
    }).join(' ');
    main.innerHTML +=
    `
      <article class="recipe-card flex-row" id="recipeName" >
        <img src=${recipe.image} alt="cookies"/>
        <div class="recipe-card-info flex-column">
         <div class="recipe-tag-container flex-column">
            <p class="recipe-name">${recipeNames}</p>
            <div class="tag-container flex-row">
              ${tags}
            </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="favorite-recipe">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="this-week-recipe">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        </article>
    `
  })
}

console.log('Hello world');
// <article class="recipe-card flex-row" id="recipeName" >
//   <img src=${recipe.image} alt="cookies"/>
//   <div class="recipe-card-info flex-row">
//     <div class="recipe-tag-container flex-column">
//       <h3>${recipeNames}</h3>
//       <div class="tag-container flex-row">
//         ${tags}
//       </div>
//     </div>
//     <div class="recipe-card-buttons-container flex-column">
//       <button class="favorite-recipe">
//         <i class="fas fa-heart"></i>
//       </button>
//       <button class="this-week-recipe">
//         <i class="fas fa-calendar-alt"></i>
//       </button>
//     </div>
//   </div>
// </article>
