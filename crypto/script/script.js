/* Declare elements to be used */
var cryptoElements = {
    encodeInput: document.getElementById("encodeInput"),
    encodeOutput: document.getElementById("encodeOutput"),
    decodeInput: document.getElementById("decodeInput"),
    decodeOutput: document.getElementById("decodeOutput"),
    copyEncoded: document.getElementById("copyEncoded"),
    copyDecoded: document.getElementById("copyDecoded"),
    resetEncoded: document.getElementById("resetEncoded"),
    resetDecoded: document.getElementById("resetDecoded")
};
/* Variables to use when inner an input */
var encodeInputValue, decodeInputValue;
/* Encode the input */
var encodeString = function (input) {
    var result = btoa(encodeURI(input));
    return result;
};
/* Decode the input */
var decodeString = function (input) {
    var result = decodeURI(atob(input));
    return result;
};
/* Show encoded result */
var innerEncoded = function () {
    encodeInputValue = cryptoElements.encodeInput.value;
    cryptoElements.encodeOutput.innerText = encodeString(encodeInputValue);
    cryptoElements.copyEncoded.disabled = false;
};
/* Show Decoded result */
var innerDecoded = function () {
    decodeInputValue = cryptoElements.decodeInput.value;
    var result;
    try {
        result = decodeString(decodeInputValue);
        cryptoElements.decodeOutput.innerText = result;
        cryptoElements.copyDecoded.disabled = false;
    }
    catch (e) {
        cryptoElements.copyDecoded.disabled = true;
    }
};
/* Copy the input to the clipboard */
var copyResult = function (what) {
    navigator.clipboard.writeText(what);
    alertifyMessageBilingual({
        es: "Resultado copiado al portapapeles",
        eng: "Result copied to clipboard"
    });
};
/* Reset input */
var resetInput = function (where) {
    where.value = "";
};
/* Listeners */
cryptoElements.encodeInput.addEventListener("input", innerEncoded, false);
cryptoElements.decodeInput.addEventListener("input", innerDecoded, false);
cryptoElements.copyEncoded.addEventListener("click", function () {
    copyResult(cryptoElements.encodeOutput.innerText);
});
cryptoElements.copyDecoded.addEventListener("click", function () {
    copyResult(cryptoElements.decodeOutput.innerText);
});
cryptoElements.resetDecoded.addEventListener("click", function () {
    cryptoElements.decodeInput.value = "";
    cryptoElements.decodeOutput.innerText = "";
    cryptoElements.copyDecoded.disabled = true;
});
cryptoElements.resetEncoded.addEventListener("click", function () {
    cryptoElements.encodeInput.value = "";
    cryptoElements.encodeOutput.innerText = "";
    cryptoElements.copyEncoded.disabled = true;
});
/* INNER TEXT */
window.addEventListener("load", function () {
    idiomHTMLInner({
        spa: window.location.origin + "/crypto/lang/spa.json",
        eng: window.location.origin + "/crypto/lang/eng.json"
    });
});
