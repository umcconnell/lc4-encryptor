import * as lc4 from "https://cdn.jsdelivr.net/gh/umcconnell/lc4/dist/main.js";

let switcher = document.getElementById("encryptorFlip"),
    method = "encrypt",
    textareas = document.getElementsByTagName("textarea"),
    methodLabels = document.querySelectorAll(".encryptor__label");


function switchUi() {
  // Flip textareas
  textareas[1].parentNode.insertBefore(textareas[1], textareas[0]);
  
  // Flip labels
  methodLabels[1].parentNode.insertBefore(methodLabels[1], switcher);
  methodLabels[0].parentNode.insert
}

switcher.addEventListener("click", () => {
  
})