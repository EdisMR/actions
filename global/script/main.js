var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* Variables globales */
var globals = {
    fetchRes: ""
};
/* Menu animation */
var Menuanimation = gsap.timeline()
    .from(".header-enlaces li,footer,footer li", {
    duration: .5,
    opacity: 0,
    x: -50,
    stagger: .1,
    delay: 1
});
/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */
window.addEventListener("mousemove", mouseMovement, false);
window.addEventListener("keyup", keyEvent, false);
var innerMouse = Array.from(document.querySelectorAll(".header-events .inner-event"))[0];
var innerKey = Array.from(document.querySelectorAll(".header-events .inner-event"))[1];
var mitadPantallaHoriz = window.screen.width / 2;
var mitadPantallaVert = window.screen.height / 2;
function mouseMovement(e) {
    var valXmouse;
    var valYmouse;
    valXmouse = e.clientX.toString();
    valYmouse = e.clientY.toString();
    innerMouse.innerHTML = "X=" + valXmouse + ", Y=" + valYmouse;
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
    iconoAbajo: "&#x25BC;"
};
var menuAnimationPortrait;
if (document.body.clientWidth < 750 || screen.width < 750) {
    /* MENU ANIMATION */
    menuAnimationPortrait = gsap.from(".header-enlaces li", {
        rotationX: 90,
        stagger: .1,
        duration: .5,
        paused: true,
        onStart: function () {
            headerButton.headerEnlaces.style.height = headerButton.headerEnlaces.scrollHeight + 50 + "px";
            /* Llenar boton con el icono */
            headerButton.btn.innerHTML = headerButton.iconoArriba;
        },
        onReverseComplete: function () {
            headerButton.headerEnlaces.style.height = "0px";
            /* Llenar boton con el icono */
            headerButton.btn.innerHTML = headerButton.iconoAbajo;
        }
    });
    window.removeEventListener("keyup", keyEvent, false);
    headerButton.btn.innerHTML = headerButton.iconoAbajo;
    headerButton.btn.addEventListener("click", menuSwitchMain, false);
    headerButton.headerLi.forEach(function (elm) {
        elm.addEventListener("click", closeMenu, false);
    });
    headerButton.headerLi.forEach(function (elm) {
        elm.addEventListener("animationend", function () {
            elm.style.opacity = "1";
        }, false);
    });
}
else {
    Menuanimation;
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            headerButton.disp = true;
            /* AGREGAR ANIMACION */
            menuAnimationPortrait.play();
            headerButton.headerEnlaces.classList.add("showMenu");
            return [2 /*return*/];
        });
    });
}
function closeMenu() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (headerButton.disp == true) {
                headerButton.disp = false;
                /* Agregar animacion */
                menuAnimationPortrait.reverse();
                headerButton.headerEnlaces.classList.remove("showMenu");
            }
            return [2 /*return*/];
        });
    });
}
/* ****************************************** */
/* ******************** 000 **************** */
/* ***************************************** */
function w000() {
    try {
        var Y = document.querySelector("a[href\*='www.000webhost']");
        var YY = Y.parentNode;
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
var email = ["edisanthony", "gmail.com"];
var emailBTN = document.querySelector("footer a[title='email']");
emailBTN.addEventListener("click", function () { window.open("mailto:" + email[0] + "@" + email[1]); }, false);
/* **************************************************** */
/* ******************** ENLACE DE WHATSAPP ************ */
/* **************************************************** */
var wsppF = ["wa.me/", "50663062581"];
var wsppFBTN = document.querySelector("footer a[title='whatsapp']");
wsppFBTN.addEventListener("click", function () { window.open("https://" + wsppF[0] + wsppF[1]); }, false);
/* HELP en enlaces sin funcionamiento */
var ayuda = document.getElementById("helpNode");
var enlacesGato = Array.from(document.querySelectorAll('[href="##"]'));
enlacesGato.forEach(function (elm) {
    var elmParent = elm.parentNode;
    elmParent.addEventListener("click", helpNodeAppear, false);
});
function helpNodeAppear() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ayuda.style.visibility = "visible";
            ayuda.classList.add("animateHelpNode");
            setTimeout(function () {
                ayuda.style.visibility = "hidden";
                ayuda.classList.remove("animateHelpNode");
            }, 2000);
            return [2 /*return*/];
        });
    });
}
/* ****************************** */
/* *********** DINO ************* */
/* ****************************** */
window.addEventListener("contextmenu", dino, false);
var dinoEd = document.getElementById("dino");
function dino(e) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            dinoEd.style.visibility = "visible";
            dinoEd.style.left = positionDino(e.clientX, mitadPantallaHoriz) + "px";
            dinoEd.style.top = positionDino(e.clientY, mitadPantallaVert) + "px";
            setTimeout(function () {
                dinoEd.style.visibility = "hidden";
            }, 500);
            return [2 /*return*/];
        });
    });
}
function positionDino(evVal, mitadP) {
    var valor = evVal;
    var mitadPantalla = mitadP;
    var resultado = 0;
    var divHeight = dinoEd.clientHeight;
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
window.addEventListener("load", deleteLoader, false);
function deleteLoader() {
    window.removeEventListener("load", deleteLoader, false);
    var childBodyA = document.querySelector(".loader");
    childBodyA.style.display = "none";
}
