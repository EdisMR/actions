/* ********************************************** */
/* ******************** CONFIGURACIONES ************ */
/* ********************************************** */
var settingsVars={
	/* para mostrar la ventana */
	parentDisplay:document.getElementById("modalSettings"),
	buttonOpen:document.getElementById("settingsButton"),
	closeButton:document.getElementById("settingsClose"),

	/* Botones controladores de las configuraciones */
	buttonHighContrast:document.getElementById("buttonHighContrast"),
	buttonBigFont:document.getElementById("buttonBigFont"),
	buttonBilingual:document.getElementById("buttonBilingual"),
}

/* Settings to Display */
settingsVars.buttonOpen.addEventListener("click",displaySettings,false);
settingsVars.closeButton.addEventListener("click",hideSettings,false);
function displaySettings(){
	settingsVars.parentDisplay.classList.remove("d-none")
}
function hideSettings(){
	settingsVars.parentDisplay.classList.add("d-none")
}




/* ******************************************* */
/* ********** LocalStorage para settings ********** */
/* ******************************************* */

if(!localStorage.highContrastBoolean){
	localStorage.highContrastBoolean="false"
}else{
	/* Si es true, aplicar esta configuracion */
	if(localStorage.highContrastBoolean=="true"){
		applyHighContrast();
	}
	/* Si es false, aplicar esta configuracion */
	if(localStorage.highContrastBoolean=="false"){
		removeHighContrast();
	}
}

if(!localStorage.bigFontBoolean){
	localStorage.bigFontBoolean="false"
}else{
	/* Si es true, aplicar esta configuracion */
	if(localStorage.bigFontBoolean=="true"){
		applyBigFont();
	}
	/* Si es false, aplicar esta configuracion */
	if(localStorage.bigFontBoolean=="false"){
		removeBigFont();
	}
}



/* ************************************* */
/* ******** LISTENERS de controles ******** */
/* ************************************* */
settingsVars.buttonHighContrast.addEventListener("click",switchHighContrast,false)
settingsVars.buttonBigFont.addEventListener("click",switchBigFont,false)
settingsVars.buttonBilingual.addEventListener("click",switchLang,false)


/* ******************************* */
/* ******** Funciones switch ******** */
/* ******************************* */

function switchHighContrast(){
	if(localStorage.highContrastBoolean=="true"){
		/* Pasar a false */
		removeHighContrast()
		localStorage.highContrastBoolean="false";
	}else{

		if(localStorage.highContrastBoolean=="false"){
			/* Pasar a true */
			applyHighContrast()
			localStorage.highContrastBoolean="true";
		}
	}
	helpNodeAppear()
}


function switchLang(){
	if(localStorage.lang=="spa"){
		/* Pasar a eng */
		settingsVars.buttonBilingual.classList.remove("settingItemInactive");
		defineLang("eng")
	}else{

		if(localStorage.lang=="eng"){
			/* Pasar a spa */
			settingsVars.buttonBilingual.classList.add("settingItemInactive");
		defineLang("spa")
		}
	}

	window.location.reload()
}

function switchBigFont(){
	if(localStorage.bigFontBoolean=="true"){
		/* Pasar a false */
		removeBigFont()
		localStorage.bigFontBoolean="false";
	}else{
		if(localStorage.bigFontBoolean=="false"){
			/* Pasar a true */
			applyBigFont()
			localStorage.bigFontBoolean="true";
		}
	}
}


/* ************************** */
/* ****** Funciones apply ****** */
/* ************************** */

function applyHighContrast(){
	settingsVars.buttonHighContrast.classList.remove("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		if(elm.dataset.accesibilityborder=="true"){
			elm.classList.add("accesibilityBorder")
		}
	})
}


function applyBigFont(){
	settingsVars.buttonBigFont.classList.remove("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		elm.dataset.initialfont=getComputedStyle(elm).fontSize
	})
	arrayTodos.forEach(elm=>{
		elm.style.fontSize=`calc(${elm.dataset.initialfont} + 5px)`
	})
}



/* ****************************** */
/* ******* Funciones remove ******* */
/* ****************************** */

function removeHighContrast(){
	settingsVars.buttonHighContrast.classList.add("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		if(elm.dataset.accesibilityborder=="true"){
			elm.classList.remove("accesibilityBorder")
		}
	})
}


function removeBigFont(){
	settingsVars.buttonBigFont.classList.add("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		elm.style.fontSize=elm.dataset.initialfont
		elm.removeAttribute("data-initialfont");
	})
}








/* LANGUAGES */
//! SPA para español
//! ENG para ingles

/* Si no se define el lenguaje, se definira el idioma tomando el del navegador */

function defineLang(idiomText=""){
	if(idiomText==""){

		if(window.navigator.language.includes("es")) {
			localStorage.lang="spa";

			alertify.set('notifier','delay', 5);
			alertify.set('notifier','position', 'top-center');
			alertify.message("Por favor considera que el sitio está en desarrollo por lo que las traducciones no están terminadas.");
			alertify.message("Puedes cambiarlo en Configuraciones.");
			alertify.message('Idioma configurado automáticamente.');
		}
		if(window.navigator.language.includes("eng")){
			localStorage.lang="eng";

			alertify.set('notifier','delay', 5);
			alertify.set('notifier','position', 'top-center');
			alertify.message("Please consider that the website is on construction so, some translations are not completed")
			alertify.message("You can change it on Settings.")
			alertify.message("Language was set automatically.")
		}
	}else{
		localStorage.lang=idiomText
	}
}
/* La funcion idiomHTMLInner() recibe como parametro un objeto con las urls del fetch hacia el 
archivo json de cada lenguaje, con los items spa y eng como keys. Esta funcion sera llamada
para llenar los span correspondientes al idioma. el identificador en el html es un data-text="key" */

/* Funcion para llenar el texto */
function idiomHTMLInner(urls):void{

	var myHeaders = new Headers();
	myHeaders.append('pragma', 'no-cache');
	myHeaders.append('cache-control', 'no-cache');

	var myInit = {
	method: 'GET',
	headers: myHeaders,
};


	let urlParaFetch="";
	let htmlLang="";
	if(localStorage.lang==null || localStorage.lang==""){
		defineLang();
	}
	if(localStorage.lang=="spa"){
		urlParaFetch=urls.spa;
		htmlLang="es"
	}
	
	if(localStorage.lang=="eng"){
		urlParaFetch=urls.eng;
		htmlLang="eng"
	}


	/* Traer json de esta url */	
	fetch(urlParaFetch,myInit)

	.then(
		/* Retornar como un JSON */
		fetchResult=>{
			return fetchResult.text();
		}
	)
	.then(
		textoResult=>{
			return JSON.parse(textoResult)
		}
	)
	.then(
		jsonParseado=>{
			/* Configurar lang en html */
			document.firstElementChild.setAttribute("lang",htmlLang)

			/* Llamar a todos los span */
			let todosSpan=Array.from(document.querySelectorAll("[data-text]"));
			for(let x in todosSpan){
				if(jsonParseado[todosSpan[x].dataset.text]!=null){
					todosSpan[x].innerHTML=jsonParseado[todosSpan[x].dataset.text]
				}
			}
		}
	)
}


idiomHTMLInner({
	spa: window.location.origin+"/global/lang/spa.json",
	eng: window.location.origin+"/global/lang/eng.json",
})

if(localStorage.lang=="eng"){
	settingsVars.buttonBilingual.classList.add("settingItemInactive");
}
if(localStorage.lang=="spa"){
	settingsVars.buttonBilingual.classList.remove("settingItemInactive");
}


/* eliminar loader */
document.body.removeChild(document.querySelector(".loader"))