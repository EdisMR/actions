/* ************************************ */
/* ***** PROCEDIMIENTOS INICIALES ******/
/* ************************************ */

const formularioConecta4 = <HTMLFormElement>document.forms[0]
const camposGrid: HTMLElement[] = Array.from(document.querySelectorAll(".grid-container div"))
const innerTurnDiv = <HTMLElement>document.querySelector(".innerTurnUser span")
const innerTurnDivParent = <HTMLElement>document.querySelector(".innerTurnUser")
const buttonResetParent = <HTMLElement>document.querySelector(".buttonReset")
const buttonReset :HTMLButtonElement= <HTMLButtonElement>document.querySelector(".buttonReset button")
const ElmDefinirJugadores=	<HTMLElement>document.querySelector(".definirJugadores")
const gameContainer=<HTMLElement>document.querySelector(".game-container")

/* Declarando matriz para guardar los divs que lo conforman */
const gameHorizontal:number = 7;
const gameVertical:number = 6;

var matrizGame = new Array(gameHorizontal);
for (let i = 0; i < gameHorizontal; i++) {
	matrizGame[i] = new Array(gameVertical);
}

/* Recorrer la matriz para añadir los div a esas casillas, y añadiendo el dataset a los div */
let contadorCamposGrid = 0;
for (let Y = 0; Y < gameVertical; Y++) {
	for (let X = 0; X < gameHorizontal; X++) {

		matrizGame[X][Y] = camposGrid[contadorCamposGrid];

		let n = "columna" + (X + 1);
		camposGrid[contadorCamposGrid].classList.add(n);
		camposGrid[contadorCamposGrid].dataset.posx = X.toString();
		camposGrid[contadorCamposGrid].dataset.posy = Y.toString();
		contadorCamposGrid++;
	}
}

var Users : {
		user1: string;
		user2: string;
		winner: string;
		icon: string;
		turno: number;
} = {
	user1: "",
	user2: "",
	winner: "",
	icon: "ms-Icon--CircleFill",
	turno: 1,
}

function retornaClaseUser() :string{
	let resultado:string="";
	if (Users.turno == 0) {
		resultado = "user1";
	}
	if (Users.turno == 1) {
		resultado = "user2";
	}
	return resultado;
}

buttonReset.addEventListener("click", resetGame);


/* ************************************************ */
/* ********* FORMULARIOConecta4 Y DESPUES DE ********* */
/* ************************************************ */

/* Formulario de usuarios del juego */

formularioConecta4.addEventListener("submit", defineUsers, false);

function defineUsers(ev:Event):Boolean{
	let e = ev;
	e.preventDefault();
	if (formularioConecta4.user1.value != formularioConecta4.user2.value) {
		formularioConecta4.removeEventListener("submit", defineUsers, false);
		Users.user1 = formularioConecta4.user1.value;
		Users.user2 = formularioConecta4.user2.value;
		afterDefineUsers();
	}
	return false;
}

function afterDefineUsers() {
	ElmDefinirJugadores.classList.add("d-none");
	
	gameContainer.classList.remove("d-none");
	innerTurnDivParent.classList.remove("d-none")

	/* sobre los divs */
	camposGrid.forEach(elm => {
		elm.addEventListener("mouseover", addHoverGrid);
		elm.addEventListener("mouseleave", removeHoverGrid);
		elm.addEventListener("click", divCLicked);
	})

	innerTurnUser();
}

function removeListerDivs() {
	/* sobre los divs */
	camposGrid.forEach(elm => {
		elm.removeEventListener("mouseover", addHoverGrid);
		elm.removeEventListener("mouseleave", removeHoverGrid);
		elm.removeEventListener("click", divCLicked);
	})

}


/* El hover personalizado para las columnas */
function addHoverGrid(elem:HTMLElement) {
	let claseColumna;
	try {
		claseColumna = this.classList[0];
	} catch (e) {
		claseColumna = elem.classList[0];
	}
	let elementos = document.querySelectorAll("." + claseColumna);
	elementos.forEach(elm => {
		elm.classList.add("divHover");
	})
}

function removeHoverGrid(elem:HTMLElement) {
	let claseColumna;
	try {
		claseColumna = this.classList[0];
	} catch (e) {
		claseColumna = elem.classList[0];
	}
	let elementos = document.querySelectorAll("." + claseColumna);
	elementos.forEach(elm => {
		elm.classList.remove("divHover");
	})
}

/* ******************************************************** */
/* *************** CUANDO UN DIV ES CLICADO *************** */
/* ******************************************************** */

/* funcion del div cliqueado */
function divCLicked() :void{
	let elemento = this;
	let elementoLlenar:HTMLElement;
	let hayGanador:Boolean;

	elementoLlenar = <HTMLElement>defineUltimoElementoVacio(elemento)
	llenarElemento(elementoLlenar)
	hayGanador = evaluarGanador(elementoLlenar);
	if (!hayGanador) {
		switchUser();
		innerTurnUser();
	} else {
		buttonResetParent.classList.remove("d-none")
		ganadorEncontrado();
		removeListerDivs();
		removeHoverGrid(elementoLlenar);
	}
}

function switchUser() :void{
	Users.turno == 0 ? Users.turno = 1 : Users.turno = 0;
}

/* Llenar elemento desocupado */
function llenarElemento(divLlenar:HTMLElement) :void{
	let divParaLlenar = divLlenar;

	divParaLlenar.children[0].classList.add(Users.icon);
	divParaLlenar.classList.add(retornaClaseUser());
	divParaLlenar.children[0].dataset.occupied = "true";
}

/* Llenado del div para indicar de quien es el turno */
function innerTurnUser() :void{
	if (Users.turno == 1) {
		innerTurnDiv.innerHTML = Users.user1;
	} else {
		innerTurnDiv.innerHTML = Users.user2;
	}
	animateInnerUser();
}

/* Animacion cuando llenamos el div con la info del turno */
function animateInnerUser() :void{
	innerTurnDivParent.classList.add("innerTurnUserAnimation");
}
innerTurnDivParent.addEventListener("animationend", afterAnimateInnerUser, false);

function afterAnimateInnerUser() :void{
	innerTurnDivParent.classList.remove("innerTurnUserAnimation");
}

/* ****************************************** */
/* ************ EVALUAR GANADOR ************ */
/* ****************************************** */

/* 
	Definir el ultimo elemento que fue llenado, para evaluar grupos -
	Recibe el elemento clicado y define el elemento a llenar,
	recorriendo Y de abajo hacia arriba (con X estatico)
*/
function defineUltimoElementoVacio(elemento:HTMLElement):HTMLElement{
	let ultimo:any;
	var y :any= gameVertical - 1;

	for (y; y >= 0; y--) {
		if (matrizGame[elemento.dataset.posx][y].children[0].dataset.occupied == "false") {
			ultimo = matrizGame[elemento.dataset.posx][y];
			break
		}
	}
	
	return ultimo;
}

function evaluarGanador(elem:HTMLElement) :Boolean{
	let hayGanador:Boolean = false;
	let valorX:number = parseInt(elem.dataset.posx);
	let valorY:number= parseInt(elem.dataset.posy);

/* Horizontal */
	/* caso1 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX+1,valorY)==true&&
		buscarClaseEnReferencia(valorX+2,valorY)==true&&
		buscarClaseEnReferencia(valorX+3,valorY)==true
	){
		hayGanador=true;
	}

	/* caso2 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY)==true&&
		buscarClaseEnReferencia(valorX+1,valorY)==true&&
		buscarClaseEnReferencia(valorX+2,valorY)==true
	){
		hayGanador=true;
	}

	/* caso3 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-2,valorY)==true&&
		buscarClaseEnReferencia(valorX-1,valorY)==true&&
		buscarClaseEnReferencia(valorX+1,valorY)==true
	){
		hayGanador=true;
	}

	/* caso4 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY)==true&&
		buscarClaseEnReferencia(valorX-2,valorY)==true&&
		buscarClaseEnReferencia(valorX-3,valorY)==true
	){
		hayGanador=true;
	}

/* Vertical */
	/* caso1 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX,valorY+1)==true&&
		buscarClaseEnReferencia(valorX,valorY+2)==true&&
		buscarClaseEnReferencia(valorX,valorY+3)==true
	){
		hayGanador=true;
	}
	
	/* caso2 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX,valorY-1)==true&&
		buscarClaseEnReferencia(valorX,valorY+1)==true&&
		buscarClaseEnReferencia(valorX,valorY+2)==true
	){
		hayGanador=true;
	}
	
	/* caso3 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX,valorY-2)==true&&
		buscarClaseEnReferencia(valorX,valorY-1)==true&&
		buscarClaseEnReferencia(valorX,valorY+1)==true
	){
		hayGanador=true;
	}
	
	/* caso4 */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX,valorY-1)==true&&
		buscarClaseEnReferencia(valorX,valorY-2)==true&&
		buscarClaseEnReferencia(valorX,valorY-3)==true
	){
		hayGanador=true;
	}

/* Creciente */
	/* Primer grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX+1,valorY-1)&&
		buscarClaseEnReferencia(valorX+2,valorY-2)&&
		buscarClaseEnReferencia(valorX+3,valorY-3)
	){
		hayGanador=true
	}
	
	/* Segundo grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY+1)&&
		buscarClaseEnReferencia(valorX+1,valorY-1)&&
		buscarClaseEnReferencia(valorX+2,valorY-2)
	){
		hayGanador=true
	}

	/* Tercer grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-2,valorY+2)&&
		buscarClaseEnReferencia(valorX-1,valorY+1)&&
		buscarClaseEnReferencia(valorX+1,valorY-1)
	){
		hayGanador=true
	}

	/* Cuarto grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY+1)&&
		buscarClaseEnReferencia(valorX-2,valorY+2)&&
		buscarClaseEnReferencia(valorX-3,valorY+3)
	){
		hayGanador=true
	}

/* Decreciente */
	/* Primer grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX+1,valorY+1)&&
		buscarClaseEnReferencia(valorX+2,valorY+2)&&
		buscarClaseEnReferencia(valorX+3,valorY+3)
	){
		hayGanador=true
	}

	/* Segundo grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY-1)&&
		buscarClaseEnReferencia(valorX+1,valorY+1)&&
		buscarClaseEnReferencia(valorX+2,valorY+2)
	){
		hayGanador=true
	}

	/* Tercer grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY-1)&&
		buscarClaseEnReferencia(valorX-2,valorY-2)&&
		buscarClaseEnReferencia(valorX+1,valorY+1)
	){
		hayGanador=true
	}


	/* Cuarto grupo */
	if(
		hayGanador==false&&
		buscarClaseEnReferencia(valorX-1,valorY-1)&&
		buscarClaseEnReferencia(valorX-2,valorY-2)&&
		buscarClaseEnReferencia(valorX-3,valorY-3)
	){
		hayGanador=true
	}


	return hayGanador;
}


function buscarClaseEnReferencia(valX:number,valY:number):Boolean{
	let resultadoF:Boolean=false;
	let contadorErrores:Boolean=false;/* No hay errores */

	try {matrizGame[valX][valY].classList} 
	catch (error) {contadorErrores=true}

	if(contadorErrores==false){

		let clases=Array.from(matrizGame[valX][valY].classList);
		
		clases.forEach(elmx=>{
			if(elmx==retornaClaseUser()){
				resultadoF=true;
			}
		})
	}

	return resultadoF
}

/* **************************************************** */
/* ******* CUANDO SE HA ENCONTRADO UN GANADOR ******* */
/* **************************************************** */
function ganadorEncontrado() :void{
	let name:string="";
	let color:string="";
	if (Users.turno == 1) {
		name = Users.user1;
		color = "hsl(60, 70%, 60%)";
	}
	if (Users.turno == 0) {
		name = Users.user2;
		color = "hsl(0, 60%, 50%)";
	}
	innerTurnDivParent.style.backgroundColor = color;
	innerTurnDivParent.innerHTML = `The winner is ${name}`;
}

function resetGame():void{
	buttonResetParent.classList.add("d-none");

	camposGrid.forEach(elm => {
		elm.classList.remove("user1");
		elm.classList.remove("user2");
		elm.children[0].classList.remove(Users.icon);
		elm.children[0].dataset.occupied = "false";
	})

	innerTurnDivParent.style.backgroundColor = "initial";
	innerTurnDivParent.innerHTML = `
		<div><span></span>'s shift</div>
	`;
	innerTurnDiv = <HTMLSpanElement>document.querySelector(".innerTurnUser span");

	afterDefineUsers();
	innerTurnUser();
}