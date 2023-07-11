const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];
const createElements = document.querySelector('#ingredients');
const listIngredients = ingredients.map(elem => {
const createElements = document.createElement('li');
createElement.classList.add('item');
createElement.textContent = elem;
return createElements;});
createElements.append(...listIngredients);