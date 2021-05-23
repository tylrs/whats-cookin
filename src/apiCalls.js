let usersData = () => fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  .catch(err => console.log('error'));

let ingredientData = () => fetch("http://localhost:3001/api/v1/ingredients")
  .then(response => response.json())
  .catch(err => console.log('error'));

let recipeData = () => fetch("http://localhost:3001/api/v1/recipes")
  .then(response => response.json())
  .catch(err => console.log('error'));

function retrieveData() {
  return Promise.all([usersData(), ingredientData(), recipeData()])
}

export default {retrieveData};
