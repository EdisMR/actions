"use strict";
var settingsVars = {
    parentDisplay: document.getElementById("modalSettings"),
    buttonOpen: document.getElementById("settingsButton"),
    closeButton: document.getElementById("settingsClose"),
    buttonHighContrast: (document.getElementById("buttonHighContrast")),
    buttonBigFont: document.getElementById("buttonBigFont"),
    buttonBilingual: (document.getElementById("buttonBilingual")),
    settingsDisplayed: false,
};
let animationSettings = gsap.from(".settingsContainer", {
    rotationY: 20,
    duration: 0.5,
    opacity: 0.5,
    paused: true,
    onStart: function () {
        settingsVars.parentDisplay.style.visibility = "visible";
    },
    onReverseComplete: function () {
        settingsVars.parentDisplay.style.visibility = "hidden";
    },
});
settingsVars.buttonOpen.addEventListener("click", displaySettings, false);
settingsVars.closeButton.addEventListener("click", hideSettings, false);
async function displaySettings() {
    animationSettings.play();
    settingsVars.settingsDisplayed = true;
}
async function hideSettings() {
    animationSettings.reverse();
    settingsVars.settingsDisplayed = false;
}
if (!localStorage.highContrastBoolean) {
    localStorage.highContrastBoolean = "false";
}
else {
    if (localStorage.highContrastBoolean == "true") {
        applyHighContrast();
    }
    if (localStorage.highContrastBoolean == "false") {
        removeHighContrast();
    }
}
if (!localStorage.bigFontBoolean) {
    localStorage.bigFontBoolean = "false";
}
else {
    if (localStorage.bigFontBoolean == "true") {
        applyBigFont();
    }
    if (localStorage.bigFontBoolean == "false") {
        removeBigFont();
    }
}
settingsVars.buttonHighContrast.addEventListener("click", switchHighContrast, false);
settingsVars.buttonBigFont.addEventListener("click", switchBigFont, false);
settingsVars.buttonBilingual.addEventListener("click", switchLang, false);
function switchHighContrast() {
    if (localStorage.highContrastBoolean == "true") {
        removeHighContrast();
        localStorage.highContrastBoolean = "false";
    }
    else {
        if (localStorage.highContrastBoolean == "false") {
            applyHighContrast();
            localStorage.highContrastBoolean = "true";
        }
    }
}
function switchLang() {
    if (localStorage.lang == "spa") {
        settingsVars.buttonBilingual.classList.remove("settingItemInactive");
        defineLang("eng");
    }
    else {
        if (localStorage.lang == "eng") {
            settingsVars.buttonBilingual.classList.add("settingItemInactive");
            defineLang("spa");
        }
    }
    window.location.reload();
}
function switchBigFont() {
    if (localStorage.bigFontBoolean == "true") {
        removeBigFont();
        localStorage.bigFontBoolean = "false";
    }
    else {
        if (localStorage.bigFontBoolean == "false") {
            applyBigFont();
            localStorage.bigFontBoolean = "true";
        }
    }
}
function applyHighContrast() {
    settingsVars.buttonHighContrast.classList.remove("settingItemInactive");
    let arrayTodos = Array.from(document.querySelectorAll("[data-text]"));
    arrayTodos.forEach((elm) => {
        elm.classList.add("highContrast");
    });
    if (settingsVars.settingsDisplayed) {
        alertifyMessageBilingual({
            es: "Alto Contraste Aplicado",
            eng: "High Contrast Applied",
        });
    }
}
function applyBigFont() {
    settingsVars.buttonBigFont.classList.remove("settingItemInactive");
    let arrayTodos = Array.from(document.querySelectorAll("*"));
    arrayTodos.forEach((elm) => {
        elm.dataset.initialfont = getComputedStyle(elm).fontSize;
    });
    arrayTodos.forEach((elm) => {
        elm.style.fontSize = `calc(${elm.dataset.initialfont} + 5px)`;
    });
    if (settingsVars.settingsDisplayed) {
        alertifyMessageBilingual({
            es: "Tipografía grande Aplicada",
            eng: "Big Typography Applied",
        });
    }
}
function removeHighContrast() {
    settingsVars.buttonHighContrast.classList.add("settingItemInactive");
    let arrayTodos = Array.from(document.querySelectorAll("[data-text]"));
    arrayTodos.forEach((elm) => {
        elm.classList.remove("highContrast");
    });
    if (settingsVars.settingsDisplayed) {
        alertifyMessageBilingual({
            es: "Alto Contraste Removido",
            eng: "High Contrast Removed",
        });
    }
}
function removeBigFont() {
    settingsVars.buttonBigFont.classList.add("settingItemInactive");
    let arrayTodos = Array.from(document.querySelectorAll("*"));
    arrayTodos.forEach((elm) => {
        elm.style.fontSize = elm.dataset.initialfont;
        elm.removeAttribute("data-initialfont");
    });
    if (settingsVars.settingsDisplayed) {
        alertifyMessageBilingual({
            es: "Tipografía grande Removida",
            eng: "Big Typography Removed",
        });
    }
}
function defineLang(idiomText = "") {
    if (idiomText == "") {
        if (window.navigator.language.includes("es")) {
            localStorage.lang = "spa";
        }
        if (window.navigator.language.includes("eng")) {
            localStorage.lang = "eng";
        }
        alertifyMessageBilingual({
            es: "Puedes cambiarlo en Configuraciones.",
            eng: "You can change it on Settings.",
        });
        alertifyMessageBilingual({
            es: "Idioma configurado automáticamente.",
            eng: "Language was set automatically.",
        });
    }
    else {
        localStorage.lang = idiomText;
    }
}
function idiomHTMLInner(urls) {
    var myHeaders = new Headers();
    myHeaders.append("pragma", "no-cache");
    myHeaders.append("cache-control", "no-cache");
    var myInit = {
        method: "GET",
        headers: myHeaders,
    };
    let urlParaFetch = "";
    let htmlLang = "";
    if (localStorage.lang == null || localStorage.lang == "") {
        defineLang();
    }
    if (localStorage.lang == "spa") {
        urlParaFetch = urls.spa;
        htmlLang = "es";
    }
    if (localStorage.lang == "eng") {
        urlParaFetch = urls.eng;
        htmlLang = "eng";
    }
    fetch(urlParaFetch, myInit)
        .then((fetchResult) => {
        return fetchResult.text();
    })
        .then((textoResult) => {
        return JSON.parse(textoResult);
    })
        .then((jsonParseado) => {
        let firstHTML = document.firstElementChild;
        firstHTML.setAttribute("lang", htmlLang);
        let todosSpan = Array.from(document.querySelectorAll("[data-text]"));
        for (let x in todosSpan) {
            if (jsonParseado[todosSpan[x].dataset.text] != null) {
                todosSpan[x].innerHTML = jsonParseado[todosSpan[x].dataset.text];
            }
        }
    });
}
idiomHTMLInner({
    spa: window.location.origin + "/global/lang/spa.json",
    eng: window.location.origin + "/global/lang/eng.json",
});
if (localStorage.lang == "eng") {
    settingsVars.buttonBilingual.classList.add("settingItemInactive");
}
if (localStorage.lang == "spa") {
    settingsVars.buttonBilingual.classList.remove("settingItemInactive");
}
function alertifyMessageBilingual(param) {
    if (localStorage.lang == "spa") {
        alertify.set("notifier", "delay", 5);
        alertify.set("notifier", "position", "top-center");
        alertify.message(param.es);
    }
    if (localStorage.lang == "eng") {
        alertify.set("notifier", "delay", 5);
        alertify.set("notifier", "position", "top-center");
        alertify.message(param.eng);
    }
}
//# sourceMappingURL=settings.js.map