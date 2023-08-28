const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients')
const marcup = ingredients.map((item) => {
const listOfIngredients = document.createElement('li');

listOfIngredients.textContent = item;
listOfIngredients.classList = 'item';
console.log(listOfIngredients);

return listOfIngredients;
})

console.log(marcup);
marcup.forEach((item) => {
  container.append(item)
});
console.dir(container)