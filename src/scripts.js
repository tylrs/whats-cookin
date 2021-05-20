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
searchButton.addEventListener('click', collectUserInfo)

// event handlers
function collectUserInfo() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let filteredRecipes = recipeRepository.filterRecipes(convertedUserSearch);
  renderRecipes(filteredRecipes)
  console.log(filteredRecipes);
}

function convertUserInfo(userSearch) {
  determineSearchType(userSearch);
  let convertedUserSearch = {
    type: 'name',
    query: [`${userSearch}`]
  }
  return convertedUserSearch;
}

function determineSearchType(userSearch) {
  let alteredUserSearch = userSearch.split(' ');
  alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = recipeRepository.generateAllRecipeNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
}

// other functions
renderRecipes(recipeRepository.recipes);
//rendering tags....
//loop through recipe tags

function renderRecipes(recipes) {
  main.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4>${tag}</h4>`
    })
    console.log(tags);
    main.innerHTML += `
    <article class="recipe-card flex-row" id="recipeName" >
      <img src=${recipe.image} alt="cookies"/>
      <div class="recipe-card-info flex-row">
        <div class="recipe-tag-container flex-column">
          <h3>${recipe.name}</h3>
          <div class="tag-container flex-row">
            ${tags}
          </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="favorite-recipe">
            <i class="fas fa-heart"></i>
          </button>
          <button class="this-week-recipe">
            <i class="fas fa-calendar-alt"></i>
          </button>
        </div>
      </div>
    </article>
    `
  })
}

console.log('Hello world');
