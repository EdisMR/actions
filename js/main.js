/* FUNCIONAMIENTO DE MENU EN MODO PORTRAIT */
const menuControl = document.querySelector(".menuControl"); /* Boton para mostrar menu */
const menuItemsPadre = document.querySelector(".header-shortcuts");/* Items de header */
var menuControlActive = true;/* Switch del menu */

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
}