/* ********************************************** */
/* ******************** CONFIGURACIONES ************ */
/* ********************************************** */
var settingsVars={
	/* para mostrar la ventana */
	parentDisplay:document.getElementById("modalSettings"),
	buttonOpen:document.getElementById("settingsButton"),
	closeButton:document.getElementById("settingsClose"),

	/* Botones controladores de las configuraciones */
	buttonTheme:document.getElementById("buttonTheme"),
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
if(!localStorage.darkThemeBoolean){
	localStorage.darkThemeBoolean="false"
}else{
	/* Si es true, aplicar esta configuracion */
	if(localStorage.darkThemeBoolean=="true"){
		applyDarkTheme();
	}
	/* Si es false, aplicar esta configuracion */
	if(localStorage.darkThemeBoolean=="false"){
		removeDarkTheme();
	}
}

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

if(!localStorage.spanishBoolean){
	localStorage.spanishBoolean=false
}else{
	/* Si es true, aplicar esta configuracion */
	if(localStorage.spanishBoolean=="true"){
		applySpanish();
	}
	/* Si es false, aplicar esta configuracion */
	if(localStorage.spanishBoolean=="false"){
		removeSpanish();
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
settingsVars.buttonTheme.addEventListener("click",switchDarkTheme,false)
settingsVars.buttonHighContrast.addEventListener("click",switchHighContrast,false)
settingsVars.buttonBigFont.addEventListener("click",switchBigFont,false)
settingsVars.buttonBilingual.addEventListener("click",switchSpanish,false)


/* ******************************* */
/* ******** Funciones switch ******** */
/* ******************************* */
function switchDarkTheme(){
	if(localStorage.darkThemeBoolean=="true"){
		/* Pasar a false */
		removeDarkTheme();
		localStorage.darkThemeBoolean="false";
	}else{

		if(localStorage.darkThemeBoolean=="false"){
			/* Pasar a true */
			applyDarkTheme();
			localStorage.darkThemeBoolean="true";
		}
	}
	helpNodeAppear()
}
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
function switchSpanish(){
	if(localStorage.spanishBoolean=="true"){
		/* Pasar a false */
		removeSpanish()
		localStorage.spanishBoolean="false";
	}else{

		if(localStorage.spanishBoolean=="false"){
			/* Pasar a true */
			applySpanish()
			localStorage.spanishBoolean="true";
		}
	}
	helpNodeAppear()
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
function applyDarkTheme(){
	settingsVars.buttonTheme.classList.remove("settingItemInactive");
}

function applyHighContrast(){
	settingsVars.buttonHighContrast.classList.remove("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		if(elm.dataset.accesibilityborder=="true"){
			elm.classList.add("accesibilityBorder")
		}
	})
}

function applySpanish(){
	settingsVars.buttonBilingual.classList.remove("settingItemInactive");
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

function removeDarkTheme(){
	settingsVars.buttonTheme.classList.add("settingItemInactive");
}

function removeHighContrast(){
	settingsVars.buttonHighContrast.classList.add("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		if(elm.dataset.accesibilityborder=="true"){
			elm.classList.remove("accesibilityBorder")
		}
	})
}

function removeSpanish(){
	settingsVars.buttonBilingual.classList.add("settingItemInactive");
}

function removeBigFont(){
	settingsVars.buttonBigFont.classList.add("settingItemInactive");
	let arrayTodos=Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach(elm=>{
		elm.style.fontSize=elm.dataset.initialfont
	})
}





/* eliminar loader */
document.body.removeChild(document.querySelector(".loader"))