const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const creatElems = document.querySelector('#ingredients');

const listIngr = ingredients.map(elem => {
  const creatElem = document.createElement('li');
  creatElem.classList.add('item');
  creatElem.textContent = elem;
  return creatElem;
});
creatElems.append(...listIngr);