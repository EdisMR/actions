/* Variables globales */
var globals={
	fetchRes:"",
}

/* ****************************************** */
/* ******** EVENTOS DE MOUSE Y TECLADO ***** */
/* ***************************************** */
window.addEventListener("mousemove", mouseMovement, false)
window.addEventListener("keyup", keyEvent, false);
let innerMouse = Array.from(document.querySelectorAll(".header-events .inner-event"))[0];
let innerKey = Array.from(document.querySelectorAll(".header-events .inner-event"))[1];
const mitadPantallaHoriz=window.screen.width/2;
const mitadPantallaVert=window.screen.height/2;

function mouseMovement(e:MouseEvent) {
	let valXmouse:string;
	let valYmouse:string;

	valXmouse=e.clientX.toString();
	valYmouse=e.clientY.toString();

	innerMouse.innerHTML = `X=${valXmouse}, Y=${valYmouse}`;
}

function keyEvent(e:KeyboardEvent) {
	innerKey.innerHTML = e.key;
}

/* ****************************************** */
/* ***** FUNCIONAMIENTO DE BOTON MENU ***** */
/* ***************************************** */
interface headerButtons {
	btn: HTMLButtonElement;
	disp: Boolean;
	headerEnlaces: HTMLElement;
	headerLi: HTMLLIElement[];
	iconoArriba:string;
	iconoAbajo:string;
};

var headerButton:headerButtons = {
	btn: <HTMLButtonElement>document.querySelector(".header-title button"), /* Boton para activar el menu */
	disp: false, /* Determina si el menu esta oculto o no */
	headerEnlaces: <HTMLElement>document.querySelector(".header-enlaces"), /* Contenedor de enlaces del menu */
	headerLi: Array.from(document.querySelectorAll(".header-enlaces a")), /* Cada uno de los enlaces del menu */
	iconoArriba:"&#x25B2;",
	iconoAbajo:"&#x25BC;",
};

if (document.body.clientWidth<750 || screen.width<750) {
	window.removeEventListener("keyup", keyEvent, false);

	headerButton.btn.innerHTML=headerButton.iconoAbajo;
	headerButton.btn.addEventListener("click", menuSwitchMain, false);
	
	headerButton.headerLi.forEach(elm=>{
		elm.addEventListener("click",closeMenu,false)
	})

	headerButton.headerLi.forEach(elm=>{
		elm.addEventListener("animationend",()=>{
			elm.style.opacity="1";
		},false)
	})
}



function menuSwitchMain() {
	/* Mostrar menu */
	if (headerButton.disp == false) {
		openMenu();

	} else {
		/* Ocultar menu */
		closeMenu();
	}
}

function openMenu():void {
	headerButton.disp = true;
	headerButton.headerEnlaces.classList.add("showMenu");

	/* AGREGAR ANIMACION */
	headerButton.headerLi.forEach((elm,index)=>{
		elm.style.animationDelay=(index/16)+"s";
		elm.classList.add("animatedItem");
	})
	headerButton.headerEnlaces.style.height=`${headerButton.headerEnlaces.scrollHeight+30}px`;
	
	/* Llenar boton con el icono */
	headerButton.btn.innerHTML = headerButton.iconoArriba;
	
}

function closeMenu():void {
	if (headerButton.disp == true) {
		headerButton.disp = false;
		
		headerButton.headerEnlaces.classList.remove("showMenu");
		
		/* QUITAR ANIMACION */
		headerButton.headerLi.forEach(elm=>{
			elm.style.display="auto";
			elm.classList.remove("animatedItem");
			elm.style.opacity="0";
		})
		headerButton.headerEnlaces.style.height=0+"px";

	/* Llenar boton con el icono */
		headerButton.btn.innerHTML = headerButton.iconoAbajo;
	}
}

/* ****************************************** */
/* ******************** 000 **************** */
/* ***************************************** */
function w000():void {
	try {
		let Y=<HTMLElement>document.querySelector("body a[href*='000webhost']")
		let YY=<Node>Y.parentNode;
		document.body.removeChild(YY);
	} catch (e) {
		/* console.log(e); */
	}
}
w000();


/* **************************************************** */
/* ******************** ENLACE DE EMAIL **************** */
/* **************************************************** */
const email:string[] = ["edisanthony", "gmail.com"];
const emailBTN = <HTMLElement>document.querySelector("footer a[title='email']");
emailBTN.addEventListener("click", 
	function () { window.open("mailto:" + email[0] + "@" + email[1]); }
	, false);



/* **************************************************** */
/* ******************** ENLACE DE WHATSAPP ************ */
/* **************************************************** */
const wsppF:string[]= ["wa.me/", "50663062581"];
const wsppFBTN = <HTMLElement>document.querySelector("footer a[title='whatsapp']");
wsppFBTN.addEventListener("click", function () { window.open("https://" + wsppF[0] + wsppF[1]); }, false);


/* HELP en enlaces sin funcionamiento */
let ayuda=<HTMLElement>document.getElementById("helpNode");

var enlacesGato:HTMLElement[]=Array.from(document.querySelectorAll('[href="##"]'));
enlacesGato.forEach(elm=>{
	let elmParent=<Node>elm.parentNode
	elmParent.addEventListener("click",helpNodeAppear,false);
})

function helpNodeAppear(){
	ayuda.style.display="inline-block";
	ayuda.classList.add("animateHelpNode")

	setTimeout(()=>{
		ayuda.style.display="none";
		ayuda.classList.remove("animateHelpNode")
	},2000)
}


/* ****************************** */
/* *********** DINO ************* */
/* ****************************** */
const dinoEd=<HTMLElement>document.getElementById("dino");

window.addEventListener("contextmenu",dino,false);

function dino(e:MouseEvent){
	e.preventDefault();

	dinoEd.style.display="block";
	dinoEd.style.left=positionDino(e.clientX,mitadPantallaHoriz)+"px";
	dinoEd.style.top=positionDino(e.clientY,mitadPantallaVert)+"px";

	setTimeout(()=>{
		dinoEd.style.display="none";
	},500);
}

function positionDino(evVal:number,mitadP:number):number{
	let valor:number=evVal;
	let mitadPantalla:number=mitadP;
	let resultado:number=0;
	let divHeight:number=dinoEd.clientHeight;

	if(valor<mitadPantalla){
		resultado=valor;
	}
	if(valor>mitadPantalla){
		resultado=valor-divHeight;
	}
	return resultado;
}

/* Añadir script de settings */
var settingsDiv=<HTMLScriptElement>document.createElement("script");
settingsDiv.setAttribute("src","/global/script/settings.js");
document.head.appendChild(settingsDiv)