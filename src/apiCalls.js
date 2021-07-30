let usersData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .catch(err => console.log('error'));

let ingredientData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .catch(err => console.log('error'));

let recipeData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .catch(err => console.log('error'));

function retrieveData() {
  return Promise.all([usersData(), ingredientData(), recipeData()])
}

export default {retrieveData};
