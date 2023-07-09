let counterValue = 0;

let counter = document.querySelector('#value');

const buttonIncrement = document.querySelector('[data-action="increment"]');

const buttonDecrement = document.querySelector('[data-action="decrement"]');



buttonIncrement.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

