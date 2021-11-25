"use strict";
var globals = {
    fetchRes: "",
};
let Menuanimation = gsap.timeline()
    .from(".header-enlaces li,footer,footer li", {
    duration: .5,
    opacity: 0,
    x: -50,
    stagger: .1,
    delay: 1,
});
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
let menuAnimationPortrait;
if (document.body.clientWidth < 750 || screen.width < 750) {
    menuAnimationPortrait = gsap.from(".header-enlaces li", {
        rotationX: 90,
        stagger: .1,
        duration: .5,
        paused: true,
        onStart: function () {
            headerButton.headerEnlaces.style.height = `${headerButton.headerEnlaces.scrollHeight + 50}px`;
            headerButton.btn.innerHTML = headerButton.iconoArriba;
        },
        onReverseComplete: function () {
            headerButton.headerEnlaces.style.height = "0px";
            headerButton.btn.innerHTML = headerButton.iconoAbajo;
        }
    });
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
else {
    Menuanimation;
}
function menuSwitchMain() {
    if (headerButton.disp == false) {
        openMenu();
    }
    else {
        closeMenu();
    }
}
async function openMenu() {
    headerButton.disp = true;
    headerButton.headerEnlaces.classList.add("showMenu");
    menuAnimationPortrait.play();
}
async function closeMenu() {
    if (headerButton.disp == true) {
        headerButton.disp = false;
        headerButton.headerEnlaces.classList.remove("showMenu");
        menuAnimationPortrait.reverse();
    }
}
function w000() {
    try {
        let Y = document.querySelector("body a[href*='000webhost']");
        let YY = Y.parentNode;
        document.body.removeChild(YY);
    }
    catch (e) {
    }
}
w000();
const email = ["edisanthony", "gmail.com"];
const emailBTN = document.querySelector("footer a[title='email']");
emailBTN.addEventListener("click", function () { window.open("mailto:" + email[0] + "@" + email[1]); }, false);
const wsppF = ["wa.me/", "50663062581"];
const wsppFBTN = document.querySelector("footer a[title='whatsapp']");
wsppFBTN.addEventListener("click", function () { window.open("https://" + wsppF[0] + wsppF[1]); }, false);
let ayuda = document.getElementById("helpNode");
var enlacesGato = Array.from(document.querySelectorAll('[href="##"]'));
enlacesGato.forEach(elm => {
    let elmParent = elm.parentNode;
    elmParent.addEventListener("click", helpNodeAppear, false);
});
async function helpNodeAppear() {
    ayuda.style.display = "inline-block";
    ayuda.classList.add("animateHelpNode");
    setTimeout(() => {
        ayuda.style.display = "none";
        ayuda.classList.remove("animateHelpNode");
    }, 2000);
}
const dinoEd = document.getElementById("dino");
window.addEventListener("contextmenu", dino, false);
async function dino(e) {
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
var settingsDiv = document.createElement("script");
settingsDiv.setAttribute("src", "/global/script/settings.js");
document.head.appendChild(settingsDiv);
window.addEventListener("load", deleteLoader, false);
function deleteLoader() {
    window.removeEventListener("load", deleteLoader, false);
    let childBodyA = document.querySelector(".loader");
    childBodyA.style.display = "none";
}
//# sourceMappingURL=main.js.map