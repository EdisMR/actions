/* ****************************************** */
/* FUNCIONAMIENTO DE MENU EN MODO PORTRAIT */
/* ****************************************** */
const menuControl = document.querySelector(".menuControl"); /* Boton para mostrar menu */
const menuItemsPadre = document.querySelector(".header-shortcuts");/* Items de header */
var menuControlActive = true;/* Switch del menu */
const divEventos=document.querySelector(".events");

function controlMenuHide() {

	if (menuControlActive == false) {/* Esta oculto, entonces mostrar y quitar eventListener */
		menuControlActive = true;
		menuItemsPadre.style.height = "initial";
		menuItemsPadre.style.animation = "headerAppear .5s linear 1";
		menuControl.removeEventListener("click", controlMenuHide, false);

		setTimeout(() => {
			menuControlActive = true;
			controlMenuHide();
		}, 3000);

	} else {
		menuControlActive = false;
		menuItemsPadre.style.height = "0px";
		menuItemsPadre.style.animation = "none";
		menuControl.addEventListener("click", controlMenuHide, false);
	}
}

if(window.screen.orientation.type=="portrait-primary"){
	controlMenuHide();
	divEventos.classList.add("glass");
}

/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */

window.addEventListener("mousemove",mouseMovement,false)
function mouseMovement(e){
	let evento=e;
	let innerMouse=Array.from(document.querySelectorAll(".events .inner-info"))[0];
	innerMouse.innerHTML="X="+parseInt(evento.clientX)+", Y="+parseInt(evento.clientY);
	watchEventsTarget()
}

window.addEventListener("keyup",keyEvent,false);
function keyEvent(e){
	evento=e;
	let innerKey=Array.from(document.querySelectorAll(".events .inner-info"))[1];
	innerKey.innerHTML='"'+evento.key+'"';
	watchEventsTarget()
}

function watchEventsTarget(){
	let estilo=window.getComputedStyle(divEventos,null).getPropertyValue("display");
	if(estilo=="none"){
		divEventos.style.display="block";
		setTimeout(function (){
			divEventos.style.display="none";
		},3000)
	}
}