import * as lc4 from "https://cdn.jsdelivr.net/gh/umcconnell/lc4/dist/main.js";

let switcher = document.getElementById("encryptorFlip"),
    method = "encrypt",
    textareas = document.getElementsByTagName("textarea"),
    methodLabels = [...document.querySelectorAll(".encryptor__label")];

function switchUI() {
  // Flip textareas
  textareas[1].parentNode.insertBefore(textareas[1], textareas[0]);
  
  // Flip labels
  methodLabels[0].parentNode.insertBefore(methodLabels[0], methodLabels[1]);
  methodLabels[1].parentNode.insertBefore(methodLabels[1], switcher);
  methodLabels.reverse();
}

switcher.addEventListener("click", () => {
  switchUI();
});