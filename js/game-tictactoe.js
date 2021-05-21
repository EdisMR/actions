/* Variables */
const formulario=document.forms[0];
var turno=true; /* Debe ser true para turno de usuario 1 y false para turno de usuario 2 */
const innerUserHTML=document.querySelector(".turno span");
var users={
	user1 : "", /* Es X */
	user2 : "", /* Es O */
	winner:"",
}
const classInner={
	userO:"ms-Icon--CircleRing", /* classlist add */
	userX:"ms-Icon--Cancel", /* classlist add */
}
const gridItems=document.querySelectorAll("#grid div");
const gridItemsSpan=document.querySelectorAll("#grid div span");
var contadorDeTurnos=0;



/* Definir usuarios del juego con el form */
formulario.addEventListener("submit",defineUsers,false);
function defineUsers(e){
	evento=e;
	evento.preventDefault();

	if(formulario.user1.value!=formulario.user2.value){
		users.user1=formulario.user1.value;
		users.user2=formulario.user2.value;
	}else{
		return false;
	}

	document.querySelector(".nombres").classList.add("d-None");
	document.getElementById("juego").classList.remove("d-None");
	innerTurnUser();
}


/* ******************************************* */
/********* Eventos al hacer clic en el cuadro *********/
/* ******************************************* */

/* Al hacer clic en un elemento del grid */
function addClickEventGrid(){
	gridItems.forEach(elm=>{
		elm.addEventListener("click",listenerDivs,false);
	})
}
addClickEventGrid();

function listenerDivs(evento){
	e=evento;

	let posX=parseInt(e.target.dataset.x);
	let posY=parseInt(e.target.dataset.y);

	llenarConIcono(e.target);
	
	contadorDeTurnos++;
	if(contadorDeTurnos>4){
		evaluarGanador();
	}

	switchTurno();
	innerTurnUser();
}

function llenarConIcono(donde){
	/* Llenar elemento con el icono */
	let claseParaInner="";
	turno?claseParaInner=classInner.userX:claseParaInner=classInner.userO;
	if(donde.dataset.occupied=="false"){
		donde.querySelector(".ms-Icon").classList.add(claseParaInner);
		donde.dataset.occupied="true";
	}
}

function switchTurno(){
	turno=!turno;
}

/*  Inner para definirle al usuario quien sigue */
function innerTurnUser(){
	if(turno){
		innerUserHTML.innerHTML=users.user1;
		innerUserHTML.parentNode.classList.add("animatedWho");
		innerUserHTML.parentNode.addEventListener("animationend",animatedWhoRemove)
	}
	if(!turno){
		innerUserHTML.innerHTML=users.user2;
		innerUserHTML.parentNode.classList.add("animatedWho");
		innerUserHTML.parentNode.addEventListener("animationend",animatedWhoRemove)
	}
}

function animatedWhoRemove(){
	innerUserHTML.parentNode.classList.remove("animatedWho");
	innerUserHTML.parentNode.removeEventListener("animationend",animatedWhoRemove);

}
/* ***************************************** */
/* ********Funcion para evaluar el ganador******* */
/* ***************************************** */
function evaluarGanador(icono){
	let hayGanador=false;
	let comparador;
	if(turno){
		comparador=classInner.userX;
	}else{
		comparador=classInner.userO;
	}

	/* EVALUADOR AQUI */
	if(gridItemsSpan[0].classList[1]==comparador &&
		gridItemsSpan[1].classList[1]==comparador &&
		gridItemsSpan[2].classList[1]==comparador	){
			hayGanador=true;
	}
		
	if(gridItemsSpan[3].classList[1]==comparador &&
		gridItemsSpan[4].classList[1]==comparador &&
		gridItemsSpan[5].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[6].classList[1]==comparador &&
		gridItemsSpan[7].classList[1]==comparador &&
		gridItemsSpan[8].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[0].classList[1]==comparador &&
		gridItemsSpan[3].classList[1]==comparador &&
		gridItemsSpan[6].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[1].classList[1]==comparador &&
		gridItemsSpan[4].classList[1]==comparador &&
		gridItemsSpan[7].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[2].classList[1]==comparador &&
		gridItemsSpan[5].classList[1]==comparador &&
		gridItemsSpan[8].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[0].classList[1]==comparador &&
		gridItemsSpan[4].classList[1]==comparador &&
		gridItemsSpan[8].classList[1]==comparador
	){
		hayGanador=true;
	}

	if(gridItemsSpan[2].classList[1]==comparador &&
		gridItemsSpan[4].classList[1]==comparador &&
		gridItemsSpan[6].classList[1]==comparador
	){
		hayGanador=true;
	}

	/* cuando detecta gandor, entonces: */
	if(turno && hayGanador){
		users.winner=users.user1;
	}
	if(!turno && hayGanador){
		users.winner=users.user2;
	}
	if(hayGanador){
		mostrarGanador();
		document.querySelector(".resetGame").classList.remove("d-None");
	}else{
		if(contadorDeTurnos>=9){
			document.querySelector(".turno").classList.add("d-None");
			document.querySelector(".resetGame").classList.remove("d-None");
			removeListeners();
		}
	}
}

function mostrarGanador(){
	removeListeners();

	document.querySelector(".turno").classList.add("d-None");
	document.getElementById("mostrarGanador").classList.remove("d-None");
	document.querySelector("#mostrarGanador .ganadorInner").innerHTML=users.winner;
}

function removeListeners(){
	gridItems.forEach(elm=>{
		elm.removeEventListener("click",listenerDivs,false);
	})
}


var buttonReset=document.querySelector(".resetGame button");
buttonReset.addEventListener("click",resetGame,false);
function resetGame(){

	gridItemsSpan.forEach(elm=>{
		elm.parentNode.dataset.occupied="false";
		elm.classList.remove("ms-Icon--CircleRing");
		elm.classList.remove("ms-Icon--Cancel");
	})

	document.getElementById("mostrarGanador").classList.add("d-None");
	document.querySelector(".resetGame").classList.add("d-None");

	addClickEventGrid();
	contadorDeTurnos=0;

}