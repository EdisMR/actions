var formulario=document.forms[0];
var users={
	user1 : "",
	user2:""
}

formulario.addEventListener("submit",defineUsers,false);

function defineUsers(e){
	evento=e;
	evento.preventDefault();
	let user1=formulario.user1.value;
	let user2=formulario.user1.value;

	
}