const descrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const result = document.querySelector(`#value`);
let step = 0;


descrementBtn.addEventListener("click", minusClick);
function minusClick() {
    step -= 1;
    result.textContent = step;
};


incrementBtn.addEventListener("click", plusClick);
function plusClick() {
    step += 1;
    result.textContent = step;
};