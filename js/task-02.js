const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const liElements = ingredients.map(element => {
  const li = document.createElement('li');
  li.textContent = liElements;
  li.classList.add('item');
  return li;
});

list.append(...liElements);

console.log(list)









