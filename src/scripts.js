/* eslint-disable max-len */
import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe.js'
import RecipeRepository from './classes/RecipeRepository.js'
import User from './classes/User.js'

// querySelectors
const mainRecipes = document.querySelector('#mainRecipes');
const mainSection = document.querySelector('#mainSection');
const filter = document.querySelector('#filter')
const filterMenu = document.querySelector('#filterMenu')
const tagCheckBox = document.querySelectorAll('input[type="checkbox"]')
const filterSubmitBtn = document.querySelector('#filterSubmitBtn')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const fullRecipeSection = document.querySelector('#fullRecipeView');
const messageBar = document.querySelector('#messageBar');
const favoritesViewButton = document.querySelector('#favoritesViewButton');
const toCookViewButton = document.querySelector('#toCookViewButton');
const homeButton = document.querySelector('#homeView')
const footer = document.querySelector('footer')

//global variables
let currentRecipeRepo;
let originalRecipeRepo;
let currentUser;
let counter = 0;
let isLoaded = false

// event listeners
window.onload = generateStartingInformation()
searchButton.addEventListener('click', searchThroughRecipes)
filter.addEventListener('click', toggleFilterMenu)
filterSubmitBtn.addEventListener('click', searchByTag)
mainSection.addEventListener('click', determineRecipeCardAction)
favoritesViewButton.addEventListener('click', showFavoritesView)
toCookViewButton.addEventListener('click', showToCookView)
homeButton.addEventListener('click', showHomeView)

function generateStartingInformation() {
  apiCalls.retrieveData()
    .then((promise) => {
      let num = getRandomNumber(promise[0]['usersData'].length)
      currentUser = new User(promise[0]['usersData'][num])
      let ingredients = promise[1]['ingredientsData']
      let recipes = promise[2]['recipeData']
      let formattedRecipes = recipes.map((recipe) => {
        let newRecipe = new Recipe(recipe, ingredients)
        return newRecipe
      })
      originalRecipeRepo = new RecipeRepository(formattedRecipes, ingredients);
      showHomeView();
      isLoaded = true 
    })
}

//switch views functions
function showFavoritesView() {
  hide(fullRecipeSection);
  messageBar.innerHTML = `<h2>Your Favorite Recipes</h2>` 
  currentRecipeRepo = currentUser.favoriteRecipes;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}

function showToCookView() {
  hide(fullRecipeSection);
  messageBar.innerHTML = `<h2>Your Recipes to Cook</h2>`
  currentRecipeRepo = currentUser.recipesToCook;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])

}

function showHomeView() {
  hide(fullRecipeSection);
  !isLoaded ? messageBar.innerHTML = `<h2>Hello, ${currentUser.name}</h2>` : messageBar.innerHTML = `<h2>Grains of Paradise</h2>`
  currentRecipeRepo = originalRecipeRepo;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}


function showFullRecipeView(id) {
  renderFullRecipeInfo(id);
  hide([footer, mainRecipes, searchBar, searchButton])
  show(fullRecipeSection);
}

//card button event handlers
function determineRecipeCardAction(event) {
  let id = parseInt(event.target.closest('.recipe-card').id);
  if (event.target.parentElement.classList.contains('favorite-recipe')) {
    determineFavoriteOrUnfavorite(id, event);
  } else if (event.target.parentElement.classList.contains('this-week-recipe')) {
    determineAddOrRemoveToCook(id, event);
  } else if (id) {
    showFullRecipeView(id);
  }
}

function determineFavoriteOrUnfavorite(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.favoriteRecipes.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addFavoriteRecipe(clickedRecipe);
  } else {
    currentUser.removeFavoriteRecipe(clickedRecipe)
    renderRecipes(currentRecipeRepo.recipes);
  }
}

function determineAddOrRemoveToCook(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.recipesToCook.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addRecipeToCookThisWeek(clickedRecipe);
  } else {
    currentUser.removeRecipeToCookThisWeek(clickedRecipe)
    renderRecipes(currentRecipeRepo.recipes);
  }
}
//search functions
function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  renderRecipes(uniqueFilteredRecipes);
  searchBar.value = '';
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' '). map((word) => {
    return word.toLowerCase();
  });
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchInfo = alteredUserSearch.reduce((acc, word) => {
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
  return searchInfo;
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = currentRecipeRepo.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = currentRecipeRepo.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function searchByTag(e) {
  e.preventDefault();
  let tagSearchInfo = {type: 'tags', query: []}
  tagCheckBox.forEach((tag) => {
    tag.checked ? tagSearchInfo.query.push(tag.value) : null
    tag.checked = false;
  })
  let filteredRecipes = currentRecipeRepo.filterRecipes(tagSearchInfo);
  renderRecipes(filteredRecipes);
}

//render functions
function renderRecipes(recipes) {
  mainRecipes.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4 class="tags flex-column">${tag}</h4>`
    })
    let recipeNames = recipe.name.map((name) => {
      return name[0].toUpperCase() + name.substring(1);
    }).join(' ');
    let favoriteButtonClass = `favorite-recipe`
    let calendarButtonClass = `this-week-recipe`
    if (recipe.isFavorited) {
      favoriteButtonClass = `favorite-recipe icon-on`
    }
    if (recipe.isToBeCooked) {
      calendarButtonClass = `this-week-recipe icon-on`
    }
    mainRecipes.innerHTML +=
    `
      <article class="recipe-card flex-row" id="${recipe.id}" >
        <img src=${recipe.image} alt="A picture of a dish called  ${recipeNames} "/>
        <div class="recipe-card-info flex-column">
         <div class="recipe-tag-container flex-column">
            <p class="recipe-name">${recipeNames}</p>
            <div class="tag-container flex-row">
              ${tags}
            </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="${favoriteButtonClass}">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="${calendarButtonClass}">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        </article>
    `
  })
}

function renderFullRecipeInfo(id) {
  let recipeToRender = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  let recipeToRenderInfo = convertRecipeToRender(recipeToRender);
  messageBar.innerHTML = `<h2>${recipeToRenderInfo.name}</h2>`
  fullRecipeSection.innerHTML =
  ` <div class="tag-container-full flex-row">
    ${recipeToRenderInfo.tags}
  </div>

    <article  class="recipe-card-all flex-column" >

    <div class="recipe-card flex-row" id="${recipeToRender.id}">

      <img src=${recipeToRender.image} alt="A picture of a dish called ${recipeToRenderInfo.name}"/>

      <div class="recipe-card-buttons-container flex-column">
        <button class="${recipeToRenderInfo.exitButtonClass}">
          <i class="exit-card fas fa-times"></i>
        </button>
        <button class="${recipeToRenderInfo.favoriteButtonClass}">
          <i class="heart-card fas fa-heart"></i>
        </button>
        <button class="${recipeToRenderInfo.calendarButtonClass}">
          <i class="calendar-card fas fa-calendar-alt"></i>
        </button>
      </div>
      <div class="total-cost flex-row" id="totalCost">
      <h5>Estimated Cost </h5>
      <p>${recipeToRenderInfo.totalCost}</p>
    </div>
      </div>

    <section class="full-recipe-info flex-column" id="fullRecipeInfo">
    <div class="recipePriceContainer flex-row">
      <div class="ingredients-info" id=ingredientsInfo>
        <h4>Ingredients</h4>
        <p> ${recipeToRenderInfo.ingredients}</p>
      </div>

      </div>
      <div class="instructions-info flex-column" id="totalCost">
        <h4>Instructions</h4>
        <p>${recipeToRenderInfo.fixedInstructions}</p>
      </div>
    </section>
    </article>
  `
}


function convertRecipeToRender(recipeToRender) {
  let tags = recipeToRender.tags.map((tag) => {
    return `<h4 class="tags flex-column">${tag}</h4>`
  }).join(' ');
  let ingredients = recipeToRender.ingredients.map((ingredient) => {
    return `<p class="ingredients flex-column">${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}</p>`
  }).join(' ');
  let instructions = recipeToRender.getInstructions();
  let fixedInstructions = instructions.map((instruction) => {
    return `<p class="instructions flex-column">${instruction}</p>`
  }).join('  ');
  let name = recipeToRender.name.map((name) => {
    return name[0].toUpperCase() + name.substring(1);
  }).join(' ');
  let totalCost = convertTotalCost(recipeToRender);
  let exitButtonClass = showHomeView();
  let favoriteButtonClass = `favorite-recipe`
  let calendarButtonClass = `this-week-recipe`
  if (recipeToRender.isFavorited) {
    favoriteButtonClass = `favorite-recipe icon-on`
  }
  if (recipeToRender.isToBeCooked) {
    calendarButtonClass = `this-week-recipe icon-on`
  }
  let recipeToRenderInfo = {tags, ingredients, fixedInstructions, name, totalCost, exitButtonClass,  favoriteButtonClass, calendarButtonClass};
  return recipeToRenderInfo;
}

function convertTotalCost(recipeToRender) {
  let totalCost = recipeToRender.getTotalCost();
  let dollars = Math.floor(totalCost / 100);
  return `$${dollars}`;
}

//other functions
function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max - 1) + 1);
  return number;
}

function toggleFilterMenu() {
  if (!(counter % 2)) {
    show(filterMenu);
    counter ++;
  } else {
    hide(filterMenu);
    counter ++;
  }
}

function show(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.remove('hidden')
    })
  } else {
    e.classList.remove('hidden')
  }
}

function hide(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.add('hidden')
    })
  } else {
    e.classList.add('hidden')
  }
}
