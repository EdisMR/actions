"use strict";
const cryptoElements = {
    encodeInput: document.getElementById("encodeInput"),
    encodeOutput: document.getElementById("encodeOutput"),
    decodeInput: document.getElementById("decodeInput"),
    decodeOutput: document.getElementById("decodeOutput"),
    copyEncoded: document.getElementById("copyEncoded"),
    copyDecoded: document.getElementById("copyDecoded"),
    resetEncoded: document.getElementById("resetEncoded"),
    resetDecoded: document.getElementById("resetDecoded"),
};
var encodeInputValue, decodeInputValue;
const encodeString = (input) => {
    let result = btoa(encodeURI(input));
    return result;
};
const decodeString = (input) => {
    let result = decodeURI(atob(input));
    return result;
};
const innerEncoded = () => {
    encodeInputValue = cryptoElements.encodeInput.value;
    cryptoElements.encodeOutput.innerText = encodeString(encodeInputValue);
    cryptoElements.copyEncoded.disabled = false;
};
const innerDecoded = () => {
    decodeInputValue = cryptoElements.decodeInput.value;
    let result;
    try {
        result = decodeString(decodeInputValue);
        cryptoElements.decodeOutput.innerText = result;
        cryptoElements.copyDecoded.disabled = false;
    }
    catch (e) {
        cryptoElements.copyDecoded.disabled = true;
    }
};
const copyResult = (what) => {
    navigator.clipboard.writeText(what);
    alertifyMessageBilingual({
        es: "Resultado copiado al portapapeles",
        eng: "Result copied to clipboard"
    });
};
const resetInput = (where) => {
    where.value = "";
};
cryptoElements.encodeInput.addEventListener("input", innerEncoded, false);
cryptoElements.decodeInput.addEventListener("input", innerDecoded, false);
cryptoElements.copyEncoded.addEventListener("click", () => {
    copyResult(cryptoElements.encodeOutput.innerText);
});
cryptoElements.copyDecoded.addEventListener("click", () => {
    copyResult(cryptoElements.decodeOutput.innerText);
});
cryptoElements.resetDecoded.addEventListener("click", () => {
    cryptoElements.decodeInput.value = "";
    cryptoElements.decodeOutput.innerText = "";
    cryptoElements.copyDecoded.disabled = true;
});
cryptoElements.resetEncoded.addEventListener("click", () => {
    cryptoElements.encodeInput.value = "";
    cryptoElements.encodeOutput.innerText = "";
    cryptoElements.copyEncoded.disabled = true;
});
window.addEventListener("load", () => {
    idiomHTMLInner({
        spa: window.location.origin + "/crypto/lang/spa.json",
        eng: window.location.origin + "/crypto/lang/eng.json"
    });
});
//# sourceMappingURL=script.js.map