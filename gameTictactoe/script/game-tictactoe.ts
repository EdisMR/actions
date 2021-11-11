/* Variables */
let formularioTicTacToe=<HTMLFormElement>document.forms[0];
var turno:Boolean=true; /* Debe ser true para turno de usuario 1 y false para turno de usuario 2 */
const innerUserHTML=<HTMLSpanElement>document.querySelector(".turno span");


let users:{
	user1 : string;
	user2 : string;
	winner: string;
}={
	user1 : "", /* Es X */
	user2 : "", /* Es O */
	winner:	"",
}


const classInner :{
	userO:string;
	userX:string;
}={
	userO:"ms-Icon--CircleRing", /* classlist add */
	userX:"ms-Icon--Cancel", /* classlist add */
}

const htmlElm:{
	resetGame:HTMLElement;
	turno:HTMLElement;
	mostrarGanador:HTMLElement;
}={
	resetGame:<HTMLElement>document.querySelector(".resetGame"),
	turno:<HTMLElement>document.querySelector(".turno"),
	mostrarGanador:<HTMLElement>document.getElementById("mostrarGanador"),
}

const gridItems:HTMLElement[]=Array.from(document.querySelectorAll("#grid div"));
const gridItemsSpan:HTMLElement[]=Array.from(document.querySelectorAll("#grid div span"));
var contadorDeTurnos:number=0;



/* Definir usuarios del juego con el form */
formularioTicTacToe.addEventListener("submit",defineUsers,false);
function defineUsers(evento:Event){
	evento.preventDefault();

	if(formularioTicTacToe.user1.value!=formularioTicTacToe.user2.value){
		users.user1=formularioTicTacToe.user1.value;
		users.user2=formularioTicTacToe.user2.value;
	}else{
		return false;
	}

	
	let nombres:HTMLElement=<HTMLElement>document.querySelector(".nombres");
	nombres.classList.add("d-None");

	let juego:HTMLElement=<HTMLElement>document.getElementById("juego");
	juego.classList.remove("d-None");
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

function listenerDivs(e:any){

	let posX:number=parseInt(e.target.dataset.x);
	let posY:number=parseInt(e.target.dataset.y);

	
	
	if(e.target.dataset.occupied=="false"){
		llenarConIcono(e.target);
		contadorDeTurnos++;
		
		evaluarGanador();
		
		switchTurno();
		innerTurnUser();
	}

}

function llenarConIcono(donde:HTMLElement){
	/* Llenar elemento con el icono */
	let claseParaInner="";
	turno?claseParaInner=classInner.userX:claseParaInner=classInner.userO;
	
	let dondeIcon:HTMLElement=<HTMLElement>donde.querySelector(".ms-Icon")
	dondeIcon.classList.add(claseParaInner);
	donde.dataset.occupied="true";
}

function switchTurno(){
	turno=!turno;
}

/*  Inner para definirle al usuario quien sigue */
function innerTurnUser(){
	let innerUserHTMLParent:any=innerUserHTML.parentNode;
	if(turno){
		innerUserHTML.innerHTML=users.user1;
		innerUserHTMLParent.classList.add("animatedWho");
		innerUserHTMLParent.addEventListener("animationend",animatedWhoRemove)
	}
	if(!turno){
		innerUserHTML.innerHTML=users.user2;
		innerUserHTMLParent.classList.add("animatedWho");
		innerUserHTMLParent.addEventListener("animationend",animatedWhoRemove)
	}
}

function animatedWhoRemove(){
	let innerUserHTMLParent:any=innerUserHTML.parentNode
	innerUserHTMLParent.classList.remove("animatedWho");
	innerUserHTMLParent.removeEventListener("animationend",animatedWhoRemove);

}
/* ***************************************** */
/* ********Funcion para evaluar el ganador******* */
/* ***************************************** */
function evaluarGanador(){
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
		htmlElm.resetGame.classList.remove("d-None");
	}else{
		if(contadorDeTurnos>=9){
			htmlElm.turno.classList.add("d-None");
			htmlElm.resetGame.classList.remove("d-None");
			removeListeners();
		}
	}
}

function mostrarGanador(){
	removeListeners();

	htmlElm.turno.classList.add("d-None");
	htmlElm.mostrarGanador.classList.remove("d-None");
	document.querySelector("#mostrarGanador .ganadorInner").innerHTML=users.winner;
}

function removeListeners(){
	gridItems.forEach(elm=>{
		elm.removeEventListener("click",listenerDivs,false);
	})
}


let buttonReset:HTMLButtonElement=<HTMLButtonElement>document.querySelector(".resetGame button");
buttonReset.addEventListener("click",resetGame,false);
function resetGame(){

	gridItemsSpan.forEach(elm=>{
		elm.parentNode.dataset.occupied="false";
		elm.classList.remove("ms-Icon--CircleRing");
		elm.classList.remove("ms-Icon--Cancel");
	})

	htmlElm.mostrarGanador.classList.add("d-None");
	htmlElm.resetGame.classList.add("d-None");

	htmlElm.turno.classList.remove("d-None");

	addClickEventGrid();
	contadorDeTurnos=0;

}