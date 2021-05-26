console.log("realizado");
const formulario=document.forms[0];
formulario.addEventListener("submit",defineUsers,false);

var users={
	user1:"",
	user2:"",
	winner:"",
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
}

