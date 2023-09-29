const inputLine = document.querySelector(`#name-input`);
const outputLine = document.querySelector(`#name-output`);


inputLine.addEventListener('input', handlerInput); 

function handlerInput(evt) {
    outputLine.textContent = evt.currentTarget.value || `Anonymous`;
};
