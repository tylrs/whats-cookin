import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import User from './classes/User.js'
import sampleData from '../test/sampleData';
const data = sampleData.sampleData;

//extra
let recipes;
const sampleRecipes = data.sampleRecipe
const sampleIngredients = data.sampleIngredients
recipes = sampleRecipes.map((recipe) => {
  let newRecipe = new Recipe(recipe, sampleIngredients)
  return newRecipe
})
// recipeRepository = new RecipeRepository(recipes)
//global variable
let currentRecipeRepo = new RecipeRepository(recipes);
let currentUser;

// querySelectors
const main = document.querySelector('#mainRecipes');
const filter = document.querySelector('#filter')
const filterMenu = document.querySelector('#filterMenu')
const tagCheckBox = document.querySelectorAll('input[type="checkbox"]')
const filterSubmitBtn = document.querySelector('#filterSubmitBtn')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')


// event listeners
window.onload = renderRecipes(currentRecipeRepo.recipes);
window.onload = generateRandomUser();
searchButton.addEventListener('click', searchThroughRecipes)
filter.addEventListener('click', openFilterMenu)
filterSubmitBtn.addEventListener('click', submitFilter)


// event handlers
function generateRandomUser() {
  let randomNumber = getRandomNumber(data.sampleUsers.length + 1);
  let randomUserInfo = data.sampleUsers.find((user) => {
    return user.id === randomNumber;
  })
  currentUser = new User(randomUserInfo);
}

function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  renderRecipes(uniqueFilteredRecipes);
  console.log('These are filtered', uniqueFilteredRecipes);
  console.log(currentUser);
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = currentRecipeRepo.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = currentRecipeRepo.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' '). map((word) => {
    return word.toLowerCase();
  });
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  console.log(convertedUserSearch);
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchObject = alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = currentRecipeRepo.generateAllRecipeNames();
    let allIngredientNames = currentRecipeRepo.generateAllIngredientNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
    if (allIngredientNames.includes(word)) {
      acc.ingredientNames.query.push(word);
    }
    return acc;
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
  return searchObject;
}

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

function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max - 1) + 1);
  return number;
}

function  openFilterMenu() {
  show(filterMenu)
}

function submitFilter(e) {
  e.preventDefault();
  let filteredTags = []
  tagCheckBox.forEach((tag) => {
    return tag.checked ? filteredTags.push(tag.value) : null

  })
  filteredTags.reduce((acc, tag) => {
    return tag.checked ? acc.query.push(tag.value) : null
  }, {tag: {type: 'tags', query: []} })
  console(filteredTags)
  hide(filterMenu)
}
  

  


function show(e) {
  e.classList.remove('hidden')
}

function hide(e) {
  e.classList.add('hidden')
}


console.log('Hello world');
