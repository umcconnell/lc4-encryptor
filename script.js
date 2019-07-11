import * as lc4 from "https://cdn.jsdelivr.net/gh/umcconnell/lc4/dist/main.js";

let switcher = document.getElementById("encryptorFlip"),
    method = "encrypt",
    mode = "lc4",
    textareas = document.getElementsByTagName("textarea"),
    methodLabels = [...document.querySelectorAll(".encryptor__label")];

let key = document.getElementById("key"),
    keyBtn = document.getElementById("generateKey"),
    nonce = document.getElementById("nonce"),
    nonceBtn = document.getElementById("generateNonce"),
    signature = document.getElementById("signature"),
    headerData = document.getElementById("headerData");

function update() {
  textareas[1].value = lc4[method]({
    mode,
    // Remove \n
    message: textareas[0]
  });
}

function switchUI() {
  // Flip textareas
  textareas[1].parentNode.insertBefore(textareas[1], textareas[0]);
  
  // Flip labels
  methodLabels[0].parentNode.insertBefore(methodLabels[0], methodLabels[1]);
  methodLabels[1].parentNode.insertBefore(methodLabels[1], switcher);
  methodLabels.reverse();
}

function setup() {
  key.value = lc4.generateKey(null, mode);
  nonce.value = lc4.generateNonce(10, mode);
  
  keyBtn.addEventListener("click", () => {
    key.value = lc4.generateKey(null, mode);
    update();
  });
  nonceBtn.addEventListener("click", () => {
    nonce.value = lc4.generateNonce(10, mode);
    update();
  });
  
  switcher.addEventListener("click", () => {
    switchUI();
    method = method === "encrypt" ? "decrypt" : "encrypt";
  });
}

setup();