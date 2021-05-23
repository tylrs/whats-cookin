// Your fetch requests will live here!
let userData = fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  // .then(data => console.log(data))
  .catch(err => console.log('error'));

let ingredientData = fetch("http://localhost:3001/api/v1/ingredients")
  .then(response => response.json())
  // .then(data => console.log(data))
  .catch(err => console.log('error'));

let recipeData = fetch("http://localhost:3001/api/v1/recipes")
  .then(response => response.json())
  // .then(data => console.log(data))
  .catch(err => console.log('error'));

let data = {userData, ingredientData, recipeData}
console.log(data);

console.log('I will be a fetch request!')

export default data;
