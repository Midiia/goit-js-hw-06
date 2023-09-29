const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", loseFocus);

function loseFocus(evt) {
    const validLength = Number(textInput.dataset.length);
    const currentLength = textInput.value.length;

if (currentLength === validLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
}
else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
}
};