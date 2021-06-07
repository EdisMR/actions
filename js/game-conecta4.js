/* ************************************ */
/* ***** PROCEDIMIENTOS INICIALES ******/
/* ************************************ */

const formulario=document.forms[0];
const camposGrid=document.querySelectorAll(".grid-container div");
const innerTurnDiv=document.querySelector(".innerTurnUser span");
const innerTurnDivParent=document.querySelector(".innerTurnUser");

/* Declarando matriz para guardar los divs y hacer con esto la evaluacion del ganador */
var matrizGame=new Array(7);
for(let i=0; i<7; i++) {
    matrizGame[i] = new Array(6);
}

/* Recorrer la matriz añadiendo los div de camposGrid y el dataset */
let contadorCamposGrid=0;
for (let Y=0; Y< 6;Y++){
	for (let X=0;X < 7;X++){

		matrizGame[X][Y]=camposGrid[contadorCamposGrid];

		let n="columna" + (X+1);
		camposGrid[contadorCamposGrid].classList.add(n);
		camposGrid[contadorCamposGrid].dataset.posx=X;
		camposGrid[contadorCamposGrid].dataset.posy=Y;
		contadorCamposGrid++;
		/* debugger */
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

	if(llenarElemento()){
		switchUser();
		innerTurnUser();
		evaluarGanador(elemento);
	}
}

function switchUser(){
	users.turno==0?users.turno=1:users.turno=0;
}

/* Llenar elemento desocupado */
function llenarElemento(){
	let llenado;

	/* Verificar si el ultimo elemento esta ocupado, sino llenar */
	let arrayColumna=Array.from(document.querySelectorAll(".divHover"));

	for(let x=arrayColumna.length-1;x>=0;x--){

		let ocupado=Boolean(arrayColumna[x].children[0].dataset.occupied=="true");

		if(ocupado){ /* caso en que esta ocupado */
			llenado=false;
		}else{/* caso en que NO esta ocupado */
			llenado=true;
			arrayColumna[x].children[0].classList.add(users.icon);
			if(users.turno==1){
				arrayColumna[x].classList.add("user2");
			}else{
				arrayColumna[x].classList.add("user1");
			}
			arrayColumna[x].children[0].dataset.occupied="true";
			break;
		}
	}
	return llenado;
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
	let elemento=elem;

	console.log(elemento);/* Elemento clikeado */

	console.log(matrizGame[elemento.dataset.posx][5]);/* ultimo elemento de columna seleccionada */
}

/* **************************************************** */
/* ******* CUANDO SE HA ENCONTRADO UN GANADOR ******* */
/* **************************************************** */
function ganadorEncontrado(){
	console.info("ganador encontrado");
}