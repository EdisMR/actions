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
btnAccesibilidad.addEventListener("click", accesibilitySwitch, false);

function accesibilitySwitch() {
	console.log("accesibilitySwitch");
}


/* HELP en enlaces # */
let ayuda=document.createElement("div");
ayuda.setAttribute("id","helpNode")
ayuda.innerHTML="<p>Site under construction</p>";
document.body.appendChild(ayuda);

var enlacesGato=document.querySelectorAll("a[href = '##']");
enlacesGato.forEach(elm=>{
	elm.parentNode.addEventListener("click",helpNodeAppear,false);
})

function helpNodeAppear(){
	let elemento1=document.getElementById("helpNode");
	elemento1.style.display="inline-block";

	setTimeout(()=>{
		elemento1.style.display="none";
	},2000)
}


/* ****************************** */
/* *********** DINO ************* */
/* ****************************** */
const dinoEd=document.getElementById("dino");

window.addEventListener("contextmenu",dino,false);

function dino(evento){
	let e=evento;
	e.preventDefault();

	dinoEd.style.display="block";
	dinoEd.style.left=positionDinoLeft(e.clientX)+"px";
	dinoEd.style.top=positionDinoTop(e.clientY)+"px";

	setTimeout(()=>{
		dinoEd.style.display="none";
	},500);
}


function positionDinoLeft(evVal){
	let valor=evVal;
	let mitadPantalla=window.screen.width/2;
	let resultado=0;
	let divWidth=document.getElementById("dino").clientWidth;

	if(valor<mitadPantalla){
		resultado=valor;
	}
	if(valor>mitadPantalla){
		resultado=valor-divWidth;
	}
	return resultado;
}

function positionDinoTop(evVal){
	let valor=evVal;
	let mitadPantalla=window.screen.height/2;
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

