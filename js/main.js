/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */

window.addEventListener("mousemove",mouseMovement,false)
function mouseMovement(e){
	let evento=e;
	let innerMouse=Array.from(document.querySelectorAll(".events .inner-info"))[0];
	innerMouse.innerHTML="X="+parseInt(evento.clientX)+", Y="+parseInt(evento.clientY);
	watchEventsTarget()
}

window.addEventListener("keyup",keyEvent,false);
function keyEvent(e){
	evento=e;
	let innerKey=Array.from(document.querySelectorAll(".events .inner-info"))[1];
	innerKey.innerHTML='"'+evento.key+'"';
	watchEventsTarget()
}

function watchEventsTarget(){
	let estilo=window.getComputedStyle(divEventos,null).getPropertyValue("display");
	if(estilo=="none"){
		divEventos.style.display="block";
		setTimeout(function (){
			divEventos.style.display="none";
		},3000)
	}
}