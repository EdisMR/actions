/* ************************************ */
/* ***** PROCEDIMIENTOS INICIALES ******/
/* ************************************ */

const formulario=document.forms[0];
const camposGrid=document.querySelectorAll(".grid-container div");
var innerTurnDiv=document.querySelector(".innerTurnUser span");
const innerTurnDivParent=document.querySelector(".innerTurnUser");
const buttonResetParent=document.querySelector(".buttonReset");
const buttonReset=document.querySelector(".buttonReset button");


/* Declarando matriz para guardar los divs que lo conforman */
const gameHorizontal=7;
const gameVertical=6;

var matrizGame=new Array(gameHorizontal);
for(let i=0; i<gameHorizontal; i++) {
    matrizGame[i] = new Array(gameVertical);
}

/* Recorrer la matriz para añadir los div a esas casillas, y añadiendo el dataset a los div */
let contadorCamposGrid=0;
for (let Y=0; Y< gameVertical;Y++){
	for (let X=0;X < gameHorizontal;X++){

		matrizGame[X][Y]=camposGrid[contadorCamposGrid];

		let n="columna" + (X+1);
		camposGrid[contadorCamposGrid].classList.add(n);
		camposGrid[contadorCamposGrid].dataset.posx=X;
		camposGrid[contadorCamposGrid].dataset.posy=Y;
		contadorCamposGrid++;
	}
}

var users={
	user1:"",
	user2:"",
	winner:"",
	icon:"ms-Icon--CircleFill",
	turno:1,
}

function retornaClaseUser(){
	let resultado;
	if(users.turno==0){
		resultado="user1";
	}
	if(users.turno==1){
		resultado="user2";
	}
	return resultado;
}

buttonReset.addEventListener("click",resetGame);


/* ************************************************ */
/* ********* FORMULARIO Y DESPUES DE ********* */
/* ************************************************ */

/* Formulario de usuarios del juego */

formulario.addEventListener("submit",defineUsers,false);

function defineUsers(ev){
	e=ev;
	e.preventDefault();
	if(formulario.user1.value != formulario.user2.value){
		formulario.removeEventListener("submit",defineUsers,false);
		users.user1=formulario.user1.value;
		users.user2=formulario.user2.value;
		afterDefineUsers();
	}
	return false;
}

function afterDefineUsers(){
	document.querySelector(".definirJugadores").classList.add("d-none");
	document.querySelector(".game-container").classList.remove("d-none");
	innerTurnDivParent.classList.remove("d-none")

	/* sobre los divs */
	camposGrid.forEach(elm=>{
		elm.addEventListener("mouseover",addHoverGrid);
		elm.addEventListener("mouseleave",removeHoverGrid);
		elm.addEventListener("click",divCLicked);
	})

	innerTurnUser();
}

function removeListerDivs(){
	/* sobre los divs */
	camposGrid.forEach(elm=>{
		elm.removeEventListener("mouseover",addHoverGrid);
		elm.removeEventListener("mouseleave",removeHoverGrid);
		elm.removeEventListener("click",divCLicked);
	})

}


/* El hover personalizado para las columnas */
function addHoverGrid(elem){
	let claseColumna;	
	try{
		claseColumna=this.classList[0];
	}catch(e){
		claseColumna=elem.classList[0];
	}
	let elementos=document.querySelectorAll("."+claseColumna);
	elementos.forEach(elm=>{
		elm.classList.add("divHover");
	})
}

function removeHoverGrid(elem){
	let claseColumna;	
	try{
		claseColumna=this.classList[0];
	}catch(e){
		claseColumna=elem.classList[0];
	}
	let elementos=document.querySelectorAll("."+claseColumna);
	elementos.forEach(elm=>{
		elm.classList.remove("divHover");
	})
}

/* ******************************************************** */
/* *************** CUANDO UN DIV ES CLICADO *************** */
/* ******************************************************** */

/* funcion del div cliqueado */
function divCLicked(evt){
	let e=evt;
	let elemento=this;
	let elementoLlenar
	let hayGanador;
	let tipoUser=retornaClaseUser();

	elementoLlenar=defineUltimoElementoVacio(elemento)
	llenarElemento(elementoLlenar)
	hayGanador=evaluarGanador(elementoLlenar);
	if(!hayGanador){
		switchUser();
		innerTurnUser();
	}else{
		buttonResetParent.classList.remove("d-none")
		ganadorEncontrado();
		removeListerDivs();
		removeHoverGrid(elementoLlenar);
	}
}

function switchUser(){
	users.turno==0?users.turno=1:users.turno=0;
}

/* Llenar elemento desocupado */
function llenarElemento(divLlenar){
	let divParaLlenar=divLlenar;
	
	divParaLlenar.children[0].classList.add(users.icon);
	divParaLlenar.classList.add(retornaClaseUser());
	divParaLlenar.children[0].dataset.occupied="true";
}

/* Llenado del div para indicar de quien es el turno */
function innerTurnUser(){
	if(users.turno==1){
		innerTurnDiv.innerHTML=users.user1;
	}else{
		innerTurnDiv.innerHTML=users.user2;
	}
	animateInnerUser();
}

/* Animacion cuando llenamos el div con la info del turno */
function animateInnerUser(){
	innerTurnDivParent.classList.add("innerTurnUserAnimation");
}
innerTurnDivParent.addEventListener("animationend",afterAnimateInnerUser,false);
function afterAnimateInnerUser(){
	innerTurnDivParent.classList.remove("innerTurnUserAnimation");
}

/* ****************************************** */
/* ************ EVALUAR GANADOR ************ */
/* ****************************************** */
function evaluarGanador(elem){
	let elementoLlenado=elem;
	let hayGanador=false;

	let posicionX=elementoLlenado.dataset.posx;
	let posicionY=elementoLlenado.dataset.posy;

	if(
		evaluaHorizontal(posicionX,posicionY) ||
		evaluaVertical(posicionX,posicionY) ||
		evaluaCreciente(posicionX,posicionY) ||
		evaluaDecreciente(posicionX,posicionY)
		){
			hayGanador=true;
		}


	return hayGanador;
}

/* Definir el ultimo elemento que fue llenado, para evaluar grupos */
function defineUltimoElementoVacio(elm){
	let elemento=elm;
	let ultimo;
	var y=gameVertical - 1;

	for(y;y>=0;y--){
		if(matrizGame[elemento.dataset.posx][y].children[0].dataset.occupied=="false"){
			ultimo=matrizGame[elemento.dataset.posx][y];
			break
		}
	}

	return ultimo;
}


function evaluaHorizontal(valX,valY){
	let result=false;
	let valorX=valX;
	let valorY=valY;
	let tipoTurno=retornaClaseUser();/* Si es User1 o User2 */

	/* Crear array para guardar la columna horizontal */
	var arrayTemp=new Array(gameHorizontal);
	for(var x=0;x<arrayTemp.length;x++){
		arrayTemp[x]=matrizGame[x][valorY];
	}

	/* Recorrido del array de cuatro en cuatro para verificar si hay cuatro en linea */
	let limiteSuperiorRecorrido=gameHorizontal-4;
	for(let x=0;x<=limiteSuperiorRecorrido;x++){
		/* array de ClassList en array[X] */
		let arrayClassList1=Array.from(arrayTemp[x].classList);
		let arrayClassList2=Array.from(arrayTemp[x+1].classList);
		let arrayClassList3=Array.from(arrayTemp[x+2].classList);
		let arrayClassList4=Array.from(arrayTemp[x+3].classList);
		if(/* Evaluar si los 4 elementos contienen la clase tipoTurno */
			arrayClassList1.some(index => index == tipoTurno) &&
			arrayClassList2.some(index => index == tipoTurno) &&
			arrayClassList3.some(index => index == tipoTurno) &&
			arrayClassList4.some(index => index == tipoTurno)
		){
			result=true;
			break;
		}
	}

	return result;
}

function evaluaVertical(valX,valY){
	let result=false;
	let valorX=valX;
	let valorY=valY;
	let tipoTurno=retornaClaseUser();/* Si es User1 o User2 */

	/* Crear array para guardar la columna horizontal */
	var arrayTemp=new Array(gameVertical);
	for(var x=0;x<arrayTemp.length;x++){
		arrayTemp[x]=matrizGame[valorX][x];
	}
	/* Recorrido del array de cuatro en cuatro para verificar si hay cuatro en linea */
	let limiteSuperiorRecorrido=gameVertical-4;
	for(let x=0;x<=limiteSuperiorRecorrido;x++){
		/* array de ClassList en array[X] */
		let arrayClassList1=Array.from(arrayTemp[x].classList);
		let arrayClassList2=Array.from(arrayTemp[x+1].classList);
		let arrayClassList3=Array.from(arrayTemp[x+2].classList);
		let arrayClassList4=Array.from(arrayTemp[x+3].classList);
		if(/* Evaluar si los 4 elementos contienen la clase tipoTurno */
			arrayClassList1.some(index => index == tipoTurno) &&
			arrayClassList2.some(index => index == tipoTurno) &&
			arrayClassList3.some(index => index == tipoTurno) &&
			arrayClassList4.some(index => index == tipoTurno)
		){
			result=true;
			break;
		}
	}
	
	return result;
}

function evaluaCreciente(valX,valY){
	let result=false;

	/* Importante destacar que el X y Y son del item llenado */
	let valorX=valX;
	let valorY=valY;
	let tipoTurno=retornaClaseUser();/* Si es User1 o User2 */
	
	return result;
}

function evaluaDecreciente(valX,valY){
	/* Importante destacar que el X y Y son del item llenado */
	let result=false;
	let valorX=valX;
	let valorY=valY;
	let tipoTurno=retornaClaseUser();/* Si es User1 o User2 */

	return result;
}


/* **************************************************** */
/* ******* CUANDO SE HA ENCONTRADO UN GANADOR ******* */
/* **************************************************** */
function ganadorEncontrado(){
	let name;
	let color;
	if(users.turno==1){
		name=users.user1;
		color="hsl(60, 70%, 60%)";
	}
	if(users.turno==0){
		name=users.user2;
		color="hsl(0, 60%, 50%)";
	}
	innerTurnDivParent.style.backgroundColor=color;
	innerTurnDivParent.innerHTML=`The winner is ${name}`;
}

function resetGame(){
	buttonResetParent.classList.add("d-none");

	camposGrid.forEach(elm=>{
		elm.classList.remove("user1");
		elm.classList.remove("user2");
		elm.children[0].classList.remove(users.icon);
		elm.children[0].dataset.occupied="false";
	})

	innerTurnDivParent.style.backgroundColor="initial";
	innerTurnDivParent.innerHTML=`
		<div><span></span>'s shift</div>
	`;
	innerTurnDiv = document.querySelector(".innerTurnUser span");
	
	afterDefineUsers();
	innerTurnUser();
}