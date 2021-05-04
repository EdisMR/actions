function removeLoader(){

	setTimeout(()=>{
		if(window.evalResult){
			let quienes=Array.from(document.getElementsByClassName("loader"))
			quienes.forEach(elm=>{
				elm.style.display="none";
			})
		}
	},500);
}
removeLoader();

/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */
window.addEventListener("mousemove", mouseMovement, false)
function mouseMovement(e) {
	let evento = e;
	let innerMouse = Array.from(document.querySelectorAll(".header-events .inner-event"))[0];
	innerMouse.innerHTML = "X=" + parseInt(evento.clientX) + ", Y=" + parseInt(evento.clientY);
}

window.addEventListener("keyup", keyEvent, false);
function keyEvent(e) {
	evento = e;
	let innerKey = Array.from(document.querySelectorAll(".header-events .inner-event"))[1];
	innerKey.innerHTML = '"' + evento.key + '"';
}

/* ****************************************** */
/* ***** FUNCIONAMIENTO DE BOTON MENU ***** */
/* ***************************************** */
var headerButton = {
	btn: null, /* Boton para activar el menu */
	disp: false, /* Determina si el menu esta oculto o no */
	headerEnlaces: null, /* Contenedor de enlaces del menu */
	headerLi: null, /* Cada uno de los enlaces del menu */
};

if (screen.orientation.type == "portrait-primary") {
	window.removeEventListener("keyup", keyEvent, false);
	/* Variables */
	headerButton.btn = document.querySelector(".header-title button")
	headerButton.headerEnlaces = document.querySelector(".header-enlaces");
	headerButton.headerLi = Array.from(document.querySelectorAll(".header-enlaces a"));

	headerButton.btn.addEventListener("click", menuSwitchMain, false);
}

function menuSwitchMain() {
	/* Mostrar menu */
	if (headerButton.disp == false) {
		openMenu();

	} else {
		/* Ocultar menu */
		closeMenu();
	}
}

function openMenu() {
	headerButton.disp = true;

	headerButton.headerEnlaces.classList.add("showMenu");

	/* AGREGAR ANIMACION */
	headerButton.headerLi.forEach((elm,index)=>{
		elm.style.animationDelay=(index/16)+"s";
		elm.classList.add("animatedItem");
		elm.addEventListener("animationend",()=>{
			elm.style.opacity="1";
		},false)
	})

	/* Llenar boton con el icono */
	headerButton.btn.innerHTML = "&#x25B2;";

}

function closeMenu() {
	if (headerButton.disp == true) {
		headerButton.disp = false;

	headerButton.headerEnlaces.classList.remove("showMenu");

	/* QUITAR ANIMACION */
	headerButton.headerLi.forEach(elm=>{
		elm.style.display="auto";
		elm.classList.remove("animatedItem");
		elm.style.opacity="0";
	})

	/* Quitar animacion y Llenar boton con el icono */
		headerButton.btn.innerHTML = "&#x25BC;";
	}
}

/* ****************************************** */
/* ******************** 000 **************** */
/* ***************************************** */
window.addEventListener("load", w000, false);
function w000() {
	window.removeEventListener("load", w000, false);
	try {
		let Y = document.querySelector("body a[href*='000webhost']").parentNode;
		Y.id = "w000";
		document.body.removeChild(document.getElementById("w000"));
	} catch (e) {
		/* console.log(e); */
	}
}


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



/* ********************************************** */
/* ******************** ACCESIBILIDAD ************ */
/* ********************************************** */
const btnAccesibilidad = document.getElementById("accesibilityButton");
btnAccesibilidad.addEventListener("click", accesibilitySwitch, false);

function accesibilitySwitch() {
	console.log("accesibilitySwitch");
}

//!SOLICIONAR: no se ejecuta el js despues de haber terminado la carga de la pagina
console.log("Ahora si")