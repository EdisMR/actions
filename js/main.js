/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */

window.addEventListener("mousemove",mouseMovement,false)
function mouseMovement(e){
	let evento=e;
	let innerMouse=Array.from(document.querySelectorAll(".header-events .inner-event"))[0];
	innerMouse.innerHTML="X="+parseInt(evento.clientX)+", Y="+parseInt(evento.clientY);
}

window.addEventListener("keyup",keyEvent,false);
function keyEvent(e){
	evento=e;
	let innerKey=Array.from(document.querySelectorAll(".header-events .inner-event"))[1];
	innerKey.innerHTML='"'+evento.key+'"';
}