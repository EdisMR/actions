console.log("realizado");
const formulario=document.forms[0];
formulario.addEventListener("submit",defineUsers,false);

const camposGrid=document.querySelectorAll(".grid-container div");

var users={
	user1:"",
	user2:"",
	winner:"",
	icon:"ms-Icon--CircleFill",
	turno:0,
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

	camposGrid.forEach(elm=>{
		elm.addEventListener("mouseover",addHoverGrid,false);
		elm.addEventListener("mouseleave",removeHoverGrid,false);
		elm.addEventListener("click",divCLicked,false);
	})
}


function addHoverGrid(elem){
	let claseColumna=elem.target.classList[0];

	let elementos=document.querySelectorAll("."+claseColumna);

	elementos.forEach(elm=>{
		elm.classList.add("divHover");
	})
}

function removeHoverGrid(elem){
	let claseColumna=elem.target.classList[0];

	let elementos=document.querySelectorAll("."+claseColumna);

	elementos.forEach(elm=>{
		elm.classList.remove("divHover");
	})
}


function divCLicked(evnt){
	e=evnt;

	let arrayColumna=Array.from(document.querySelectorAll("."+e.target.classList[0]));


	for(let x=arrayColumna.length-1;x>=0;x--){
		
		if(arrayColumna[x].children[0].dataset.ocuppied){

		}else{

			arrayColumna[x].children[0].classList.add(users.icon);

			if(turno){
				arrayColumna[x].classList.add("user2");
			}else{
				arrayColumna[x].classList.add("user1");
			}

			break;
		}
	}


}