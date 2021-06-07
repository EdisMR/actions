/* ************************************ */
/* ***** PROCEDIMIENTOS INICIALES ******/
/* ************************************ */

const formulario=document.forms[0];
const camposGrid=document.querySelectorAll(".grid-container div");
const innerTurnDiv=document.querySelector(".innerTurnUser span");
const innerTurnDivParent=document.querySelector(".innerTurnUser");

/* Declarando matriz para guardar los divs y hacer con esto la evaluacion del ganador */
const gameHorizontal=7;
const gameVertical=6;

var matrizGame=new Array(gameHorizontal);
for(let i=0; i<gameHorizontal; i++) {
    matrizGame[i] = new Array(gameVertical);
}

/* Recorrer la matriz añadiendo los div de camposGrid y el dataset */
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

/* ************************************************ */
/* ********* FORMULARIO Y DESPUES DE ESTE ********* */
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
	document.querySelector(".innerTurnUser").classList.remove("d-none")

	/* sobre los divs */
	camposGrid.forEach(elm=>{
		elm.addEventListener("mouseover",addHoverGrid);
		elm.addEventListener("mouseleave",removeHoverGrid);
		elm.addEventListener("click",divCLicked);
	})

	innerTurnUser();
}


/* El hover personalizado para las columnas */
function addHoverGrid(elem){
	let claseColumna=this.classList[0];
	let elementos=document.querySelectorAll("."+claseColumna);
	elementos.forEach(elm=>{
		elm.classList.add("divHover");
	})
}

function removeHoverGrid(elem){
	let claseColumna=this.classList[0];
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
	if(elementoLlenar=defineUltimoElementoVacio(elemento)){
		llenarElemento(elementoLlenar)
		switchUser();
		innerTurnUser();
		evaluarGanador(elementoLlenar);
	}
}

function switchUser(){
	users.turno==0?users.turno=1:users.turno=0;
}

/* Llenar elemento desocupado */
function llenarElemento(divLlenar){
	let divParaLlenar=divLlenar;
	
	divParaLlenar.children[0].classList.add(users.icon);
	if(users.turno==1){
		divParaLlenar.classList.add("user2");
	}else{
		divParaLlenar.classList.add("user1");
	}
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

/* **************************************************** */
/* ******* CUANDO SE HA ENCONTRADO UN GANADOR ******* */
/* **************************************************** */
function ganadorEncontrado(){
	console.info("ganador encontrado");
}