const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text")

input.addEventListener("input", changeFontSize);

function changeFontSize (event) {
    const textSize = input.value;
    span.style.fontSize = `${textSize}px`;
}