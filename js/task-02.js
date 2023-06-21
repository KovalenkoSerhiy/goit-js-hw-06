const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const liEl = document.createElement("li");

list.append(liEl);

liEl.classList.add("item");

console.log(list);





// const listEl = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");

// console.log(listEl);

// list.innerHTML = listEl;


