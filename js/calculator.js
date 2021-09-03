document.forms[0].addEventListener("submit",calcularString,false)

function calcularString(evento){
	var e=evento;
	e.preventDefault();
	helpNodeAppear();
}

helpNodeAppear();