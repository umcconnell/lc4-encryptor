import * as lc4 from "https://cdn.jsdelivr.net/gh/umcconnell/lc4@1/dist/main.js";
import { debounce, showSnackbar, createSnackbar } from "./helpers.js";

let method = "encrypt",
    mode = "lc4";
    
let switcher = document.getElementById("encryptorFlip"),
    errorSnackbar = createSnackbar(),
    textareas = document.getElementsByTagName("textarea"),
    methodLabels = [...document.querySelectorAll(".encryptor__label")];

let key = document.getElementById("key"),
    keyBtn = document.getElementById("generateKey"),
    nonce = document.getElementById("nonce"),
    nonceBtn = document.getElementById("generateNonce"),
    signature = document.getElementById("signature"),
    headerData = document.getElementById("headerData");

let update = debounce(function () {
  try {
    textareas[1].value = lc4[method]({
      mode,
      message: textareas[0].value.split("\n"),
      key: key.value,
      nonce: !!nonce.value && nonce.value,
      signature: !!signature.value && signature.value,
      headerData: !!headerData.value && headerData
    }).join("\n");
  } catch(err) {
    console.log(err);
    showSnackbar()
  }
}, 250);

function switchUI() {
  // Flip textareas
  textareas[1].parentNode.insertBefore(textareas[1], textareas[0]);
  
  // Flip labels
  methodLabels[0].parentNode.insertBefore(methodLabels[0], methodLabels[1]);
  methodLabels[1].parentNode.insertBefore(methodLabels[1], switcher);
  methodLabels.reverse();
}

function setup() {
  document.body.insertAdjacentElement("beforeend", errorSnackbar);
  
  document.body.addEventListener("input", () => {
    update();
  });
  
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
    update();
  });
}

setup();