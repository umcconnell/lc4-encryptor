import * as lc4 from "https://cdn.jsdelivr.net/gh/umcconnell/lc4/dist/main.js";

let switcher = document.getElementById("encryptorFlip"),
    method = "encrypt",
    mode = "lc4",
    textareas = document.getElementsByTagName("textarea"),
    methodLabels = [...document.querySelectorAll(".encryptor__label")];

let [key, nonce, signature] = ["key", "nonce", "signature"].map(
    el => {
      let input = document.getElementById(el);
      
      
    }
);

let headerData = {input: document.getElementById("headerData")};

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
  method = method === "encrypt" ? "decrypt" : "encrypt";
});

key.input.value = lc4.generateKey(null, mode);
nonce.input.value = lc4.generateNonce(10, mode);
