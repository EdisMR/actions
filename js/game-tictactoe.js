/* Variables */
const formulario=document.forms[0];

var turno=true; /* Debe ser true para turno de usuario 1 y false para turno de usuario 2 */
const innerUserHTML=document.querySelector(".turno span");

var users={
	user1 : "", /* Es X */
	user2 : "", /* Es O */
}

const classInner={
	userO:"ms-Icon--CircleRing", /* classlist add */
	userX:"ms-Icon--Cancel", /* classlist add */
}

const gridItems=document.querySelectorAll("#grid div");

/* Definir usuarios del juego con el form */
formulario.addEventListener("submit",defineUsers,false);
function defineUsers(e){
	evento=e;
	evento.preventDefault();
	users.user1=formulario.user1.value;
	users.user2=formulario.user2.value;

	document.querySelector(".nombres").classList.add("d-None");
	document.getElementById("juego").classList.remove("d-None");
	innerTurnUser();
}


gridItems.forEach(elm=>{
	elm.addEventListener("click",listenerDivs,false);
})
function listenerDivs(evento){
	e=evento;

	let posX=parseInt(e.target.dataset.x);
	let posY=parseInt(e.target.dataset.y);

	/* Llenar elemento con el icono */
	let claseParaInner="";
	turno?claseParaInner=classInner.userX:claseParaInner=classInner.userO;

	innerTurnIcon(e.target.querySelector(".ms-Icon"),claseParaInner);
	switchTurno();
	innerTurnUser();
}

function innerTurnIcon(where,classIn){
	where.classList.add(classIn);
}

function switchTurno(){
	turno=!turno;
}

/*  Inner para definirle al usuario quien sigue */
function innerTurnUser(){
	if(turno){
		innerUserHTML.innerHTML=users.user1;
	}
	if(!turno){
		innerUserHTML.innerHTML=users.user2;
	}
}