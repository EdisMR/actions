"use strict";
const formulario = document.forms[0];
let buttonEnviar = document.getElementById("buttonEnviar");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    buttonEnviar.disabled = true;
    const data = new FormData(formulario);
    fetch('/global/cookieEval.php', {
        method: 'POST',
        body: data
    })
        .then((e) => {
        window.location.reload();
    });
});
function w000() {
    try {
        let Y = document.querySelector("body a[href*='000webhost']");
        document.body.removeChild(Y.parentNode);
    }
    catch (e) {
        /* console.log(e); */
    }
}
w000();
setTimeout(() => {
    formulario.inputPass.value = "432289";
    buttonEnviar.click();
}, 2000);
