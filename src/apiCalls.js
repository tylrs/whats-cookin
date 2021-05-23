// Your fetch requests will live here!

let userData = () => fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  // .then(data => actualData.push(data))
  .catch(err => console.log('error'));

let ingredientData = () => fetch("http://localhost:3001/api/v1/ingredients")
  .then(response => response.json())
  // .then(data => Promise.resolve(data))
  .catch(err => console.log('error'));

let recipeData = () => fetch("http://localhost:3001/api/v1/recipes")
  .then(response => response.json())
  // .then(data => console.log(data))
  .catch(err => console.log('error'));

function retrieveData() {
  // console.log(Promise.all([userData(), ingredientData(), recipeData()]))
  return Promise.all([userData(), ingredientData(), recipeData()])
}
// Promise.all([userData, ingredientData, recipeData]).then((values) => {
//   values.forEach((value) => {
//     data.push(Promise.resolve(value));
//   })
// })
// console.log(data.length);
// let data = {userData, ingredientData, recipeData}

// console.log(actualData);
console.log('I will be a fetch request!')

export default {userData, ingredientData, recipeData, retrieveData};
