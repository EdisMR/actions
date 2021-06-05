const formulario=document.forms[0];
formulario.addEventListener("submit",defineUsers,false);

const camposGrid=document.querySelectorAll(".grid-container div");
const innerTurnDiv=document.querySelector(".innerTurnUser span");
const innerTurnDivParent=document.querySelector(".innerTurnUser");

/* Declarando matriz para guardar los divs y hacer con esto la evaluacion del ganador */
const matrizGame=new Array(6);/* Filas */
for(let i=0; i<matrizGame.length; i++) {
    matrizGame[i] = new Array(7);/* Columnas */
}

/* Recorrer la matriz añadiendo los div de camposGrid */
let contadorCamposGrid=0;
for (let X=0;X < matrizGame.length;X++){
	for (let Y=0;Y < matrizGame[X].length;Y++){
		matrizGame[X][Y]=camposGrid[contadorCamposGrid];
		
		let n="columna" + (Y+1);
		camposGrid[contadorCamposGrid].classList.add(n);
		
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

	camposGrid.forEach(elm=>{
		elm.addEventListener("mouseover",addHoverGrid);
		elm.addEventListener("mouseleave",removeHoverGrid);
		elm.addEventListener("click",divCLicked);
	})

	innerTurnUser();
}



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


function divCLicked(){
	if(llenarElemento()){
		switchUser();
		innerTurnUser();
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