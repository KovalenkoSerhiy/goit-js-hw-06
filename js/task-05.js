const inputName = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

inputName.addEventListener("input", (Event) => {
    spanOutput.textContent = Event.currentTarget.value; 
});
