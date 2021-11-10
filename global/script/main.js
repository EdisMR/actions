"use strict";
/* Variables globales */
var globals = {
    fetchRes: "",
};
/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */
window.addEventListener("mousemove", mouseMovement, false);
window.addEventListener("keyup", keyEvent, false);
let innerMouse = Array.from(document.querySelectorAll(".header-events .inner-event"))[0];
let innerKey = Array.from(document.querySelectorAll(".header-events .inner-event"))[1];
const mitadPantallaHoriz = window.screen.width / 2;
const mitadPantallaVert = window.screen.height / 2;
function mouseMovement(e) {
    let valXmouse;
    let valYmouse;
    valXmouse = e.clientX.toString();
    valYmouse = e.clientY.toString();
    innerMouse.innerHTML = `X=${valXmouse}, Y=${valYmouse}`;
}
function keyEvent(e) {
    innerKey.innerHTML = e.key;
}
;
var headerButton = {
    btn: document.querySelector(".header-title button"),
    disp: false,
    headerEnlaces: document.querySelector(".header-enlaces"),
    headerLi: Array.from(document.querySelectorAll(".header-enlaces a")),
    iconoArriba: "&#x25B2;",
    iconoAbajo: "&#x25BC;",
};
if (document.body.clientWidth < 750 || screen.width < 750) {
    window.removeEventListener("keyup", keyEvent, false);
    headerButton.btn.innerHTML = headerButton.iconoAbajo;
    headerButton.btn.addEventListener("click", menuSwitchMain, false);
    headerButton.headerLi.forEach(elm => {
        elm.addEventListener("click", closeMenu, false);
    });
    headerButton.headerLi.forEach(elm => {
        elm.addEventListener("animationend", () => {
            elm.style.opacity = "1";
        }, false);
    });
}
function menuSwitchMain() {
    /* Mostrar menu */
    if (headerButton.disp == false) {
        openMenu();
    }
    else {
        /* Ocultar menu */
        closeMenu();
    }
}
function openMenu() {
    headerButton.disp = true;
    headerButton.headerEnlaces.classList.add("showMenu");
    /* AGREGAR ANIMACION */
    headerButton.headerLi.forEach((elm, index) => {
        elm.style.animationDelay = (index / 16) + "s";
        elm.classList.add("animatedItem");
    });
    headerButton.headerEnlaces.style.height = `${headerButton.headerEnlaces.scrollHeight + 30}px`;
    /* Llenar boton con el icono */
    headerButton.btn.innerHTML = headerButton.iconoArriba;
}
function closeMenu() {
    if (headerButton.disp == true) {
        headerButton.disp = false;
        headerButton.headerEnlaces.classList.remove("showMenu");
        /* QUITAR ANIMACION */
        headerButton.headerLi.forEach(elm => {
            elm.style.display = "auto";
            elm.classList.remove("animatedItem");
            elm.style.opacity = "0";
        });
        headerButton.headerEnlaces.style.height = 0 + "px";
        /* Llenar boton con el icono */
        headerButton.btn.innerHTML = headerButton.iconoAbajo;
    }
}
/* ****************************************** */
/* ******************** 000 **************** */
/* ***************************************** */
function w000() {
    try {
        let Y = document.querySelector("body a[href*='000webhost']");
        let YY = Y.parentNode;
        document.body.removeChild(YY);
    }
    catch (e) {
        /* console.log(e); */
    }
}
w000();
/* **************************************************** */
/* ******************** ENLACE DE EMAIL **************** */
/* **************************************************** */
const email = ["edisanthony", "gmail.com"];
const emailBTN = document.querySelector("footer a[title='email']");
emailBTN.addEventListener("click", function () { window.open("mailto:" + email[0] + "@" + email[1]); }, false);
/* **************************************************** */
/* ******************** ENLACE DE WHATSAPP ************ */
/* **************************************************** */
const wsppF = ["wa.me/", "50663062581"];
const wsppFBTN = document.querySelector("footer a[title='whatsapp']");
wsppFBTN.addEventListener("click", function () { window.open("https://" + wsppF[0] + wsppF[1]); }, false);
/* HELP en enlaces sin funcionamiento */
let ayuda = document.getElementById("helpNode");
var enlacesGato = Array.from(document.querySelectorAll('[href="##"]'));
enlacesGato.forEach(elm => {
    let elmParent = elm.parentNode;
    elmParent.addEventListener("click", helpNodeAppear, false);
});
function helpNodeAppear() {
    ayuda.style.display = "inline-block";
    ayuda.classList.add("animateHelpNode");
    setTimeout(() => {
        ayuda.style.display = "none";
        ayuda.classList.remove("animateHelpNode");
    }, 2000);
}
/* ****************************** */
/* *********** DINO ************* */
/* ****************************** */
const dinoEd = document.getElementById("dino");
window.addEventListener("contextmenu", dino, false);
function dino(e) {
    e.preventDefault();
    dinoEd.style.display = "block";
    dinoEd.style.left = positionDino(e.clientX, mitadPantallaHoriz) + "px";
    dinoEd.style.top = positionDino(e.clientY, mitadPantallaVert) + "px";
    setTimeout(() => {
        dinoEd.style.display = "none";
    }, 500);
}
function positionDino(evVal, mitadP) {
    let valor = evVal;
    let mitadPantalla = mitadP;
    let resultado = 0;
    let divHeight = dinoEd.clientHeight;
    if (valor < mitadPantalla) {
        resultado = valor;
    }
    if (valor > mitadPantalla) {
        resultado = valor - divHeight;
    }
    return resultado;
}
/* Añadir script de settings */
var settingsDiv = document.createElement("script");
settingsDiv.setAttribute("src", "/global/script/settings.js");
document.head.appendChild(settingsDiv);
