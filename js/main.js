function removeLoader(){
	let quienes=Array.from(document.getElementsByClassName("loader"))
	quienes.forEach(elm=>{
		elm.style.display="none";
	})
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
	window.addEventListener("hashchange",closeMenu,false);
	

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
function w000() {
	try {
		let Y = document.querySelector("body a[href*='000webhost']").parentNode;
		Y.id = "w000";
		document.body.removeChild(document.getElementById("w000"));
	} catch (e) {
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



/* ********************************************** */
/* ******************** ACCESIBILIDAD ************ */
/* ********************************************** */
const btnAccesibilidad = document.getElementById("accesibilityButton");
btnAccesibilidad.addEventListener("click", ()=>{accesibilitySwitch();closeMenu()}, false);

function accesibilitySwitch() {
	console.log("accesibilitySwitch");
}


/* HELP en enlaces sin funcionamiento */
let ayuda=document.getElementById("helpNode");

var enlacesGato=document.querySelectorAll('[href="##"]');
enlacesGato.forEach(elm=>{
	elm.parentNode.addEventListener("click",helpNodeAppear,false);
})

function helpNodeAppear(e){
	ayuda.style.display="inline-block";
	ayuda.classList.add("animateHelpNode")

	setTimeout(()=>{
		ayuda.style.display="none";
		ayuda.classList.remove("animateHelpNode")
	},2000)
}


/* ****************************** */
/* *********** DINO ************* */
/* ****************************** */
const dinoEd=document.getElementById("dino");

window.addEventListener("contextmenu",dino,false);
const mitadPantallaHoriz=window.screen.width/2;
const mitadPantallaVert=window.screen.height/2;

function dino(evento){
	let e=evento;
	e.preventDefault();

	dinoEd.style.display="block";
	dinoEd.style.left=positionDino(e.clientX,mitadPantallaHoriz)+"px";
	dinoEd.style.top=positionDino(e.clientY,mitadPantallaVert)+"px";

	setTimeout(()=>{
		dinoEd.style.display="none";
	},500);
}

function positionDino(evVal,mitadP){
	let valor=evVal;
	let mitadPantalla=mitadP;
	let resultado=0;
	let divHeight=document.getElementById("dino").clientHeight;

	if(valor<mitadPantalla){
		resultado=valor;
	}
	if(valor>mitadPantalla){
		resultado=valor-divHeight;
	}
	return resultado;
}