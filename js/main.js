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


/* ****************************************** */
/* ***** FUNCIONAMIENTO DE BOTON MENU ***** */
/* ***************************************** */
var headerButton={
	btn:null,
	disp:false,
	headerEnlaces:null,
	headerLi:null,
};

if(screen.orientation.type=="portrait-primary"){
	/* Variables */
	headerButton.btn=document.querySelector(".header-title button")
	headerButton.headerEnlaces=document.querySelector(".header-enlaces");
	headerButton.headerLi=Array.from(document.querySelectorAll(".header-enlaces a"));

	headerButton.btn.addEventListener("click",menuSwitchMain,false);
}

function menuSwitchMain(){
	/* Mostrar menu */
	if(headerButton.disp==false){
		headerButton.disp=true;

		headerButton.headerEnlaces.style.display="block";


		/* ANIMACION */
		headerButton.headerLi.forEach(elm=>{
			elm.style.display="flex";
			elm.style.opacity="0%";
			elm.addEventListener("animationend",function(){elm.style.opacity="100%";},false);
		})

		for(let x=0;x< headerButton.headerLi.length;x++){
			headerButton.headerLi[x].classList.add("headerLiAnimated");
			headerButton.headerLi[x].style.animationDelay=x+"00ms";
		}
		
		headerButton.btn.innerHTML="&#x25B2;";
		
		
	}else /* Ocultar menu */
	
	
	if(headerButton.disp==true){
		headerButton.disp=false;
		
		headerButton.headerEnlaces.style.display="none";
		headerButton.headerLi.forEach(elm=>{
			elm.style.display="none";
			elm.classList.remove("headerLiAnimated");
		})
		headerButton.btn.innerHTML="&#x25BC;";
	}
}

/* ****************************************** */
/* ****************************************** */
/* ***************************************** */