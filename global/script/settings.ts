/* ********************************************** */
/* ******************** CONFIGURACIONES ************ */
/* ********************************************** */
var settingsVars: {
	parentDisplay: HTMLElement;
	buttonOpen: HTMLButtonElement;
	closeButton: HTMLButtonElement;
	buttonHighContrast: HTMLButtonElement;
	buttonBigFont: HTMLButtonElement;
	buttonBilingual: HTMLButtonElement;
	settingsDisplayed: boolean;
} = {
	/* para mostrar la ventana */
	parentDisplay: <HTMLElement>document.getElementById("modalSettings"),
	buttonOpen: <HTMLButtonElement>document.getElementById("settingsButton"),
	closeButton: <HTMLButtonElement>document.getElementById("settingsClose"),

	/* Botones controladores de las configuraciones */
	buttonHighContrast: <HTMLButtonElement>(
		document.getElementById("buttonHighContrast")
	),
	buttonBigFont: <HTMLButtonElement>document.getElementById("buttonBigFont"),
	buttonBilingual: <HTMLButtonElement>(
		document.getElementById("buttonBilingual")
	),

	settingsDisplayed: false,
};

let animationSettings = gsap.from(".settingsContainer", {
	rotationY: 20,
	duration: 0.5,
	opacity: 0.5,
	paused: true,
	onStart: function () {
		settingsVars.parentDisplay.classList.remove("d-none");
	},
	onReverseComplete: function () {
		settingsVars.parentDisplay.classList.add("d-none");
	},
});

/* Settings to Display */
settingsVars.buttonOpen.addEventListener("click", displaySettings, false);
settingsVars.closeButton.addEventListener("click", hideSettings, false);
async function displaySettings() {
	animationSettings.play();
	settingsVars.settingsDisplayed = true;
}
async function hideSettings() {
	animationSettings.reverse();
	settingsVars.settingsDisplayed = false;
}

/* ******************************************* */
/* ********** LocalStorage para settings ********** */
/* ******************************************* */

if (!localStorage.highContrastBoolean) {
	localStorage.highContrastBoolean = "false";
} else {
	/* Si es true, aplicar esta configuracion */
	if (localStorage.highContrastBoolean == "true") {
		applyHighContrast();
	}
	/* Si es false, aplicar esta configuracion */
	if (localStorage.highContrastBoolean == "false") {
		removeHighContrast();
	}
}

if (!localStorage.bigFontBoolean) {
	localStorage.bigFontBoolean = "false";
} else {
	/* Si es true, aplicar esta configuracion */
	if (localStorage.bigFontBoolean == "true") {
		applyBigFont();
	}
	/* Si es false, aplicar esta configuracion */
	if (localStorage.bigFontBoolean == "false") {
		removeBigFont();
	}
}

/* ************************************* */
/* ******** LISTENERS de controles ******** */
/* ************************************* */
settingsVars.buttonHighContrast.addEventListener(
	"click",
	switchHighContrast,
	false
);
settingsVars.buttonBigFont.addEventListener("click", switchBigFont, false);
settingsVars.buttonBilingual.addEventListener("click", switchLang, false);

/* ******************************* */
/* ******** Funciones switch ******** */
/* ******************************* */

function switchHighContrast() {
	if (localStorage.highContrastBoolean == "true") {
		/* Pasar a false */
		removeHighContrast();
		localStorage.highContrastBoolean = "false";
	} else {
		if (localStorage.highContrastBoolean == "false") {
			/* Pasar a true */
			applyHighContrast();
			localStorage.highContrastBoolean = "true";
		}
	}
}

function switchLang() {
	if (localStorage.lang == "spa") {
		/* Pasar a eng */
		settingsVars.buttonBilingual.classList.remove("settingItemInactive");
		defineLang("eng");
	} else {
		if (localStorage.lang == "eng") {
			/* Pasar a spa */
			settingsVars.buttonBilingual.classList.add("settingItemInactive");
			defineLang("spa");
		}
	}

	window.location.reload();
}

function switchBigFont() {
	if (localStorage.bigFontBoolean == "true") {
		/* Pasar a false */
		removeBigFont();
		localStorage.bigFontBoolean = "false";
	} else {
		if (localStorage.bigFontBoolean == "false") {
			/* Pasar a true */
			applyBigFont();
			localStorage.bigFontBoolean = "true";
		}
	}
}

/* ************************** */
/* ****** Funciones apply ****** */
/* ************************** */

function applyHighContrast() {
	settingsVars.buttonHighContrast.classList.remove("settingItemInactive");
	let arrayTodos: HTMLElement[] = Array.from(
		document.querySelectorAll("[data-text]")
	);
	arrayTodos.forEach((elm) => {
		elm.classList.add("highContrast");
	});

	if (settingsVars.settingsDisplayed) {
		alertifyMessageBilingual({
			es: "Alto Contraste Aplicado",
			eng: "High Contrast Applied",
		});
	}
}

function applyBigFont() {
	settingsVars.buttonBigFont.classList.remove("settingItemInactive");
	let arrayTodos: HTMLElement[] = Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach((elm) => {
		elm.dataset.initialfont = getComputedStyle(elm).fontSize;
	});
	arrayTodos.forEach((elm) => {
		elm.style.fontSize = `calc(${elm.dataset.initialfont} + 5px)`;
	});

	if (settingsVars.settingsDisplayed) {
		alertifyMessageBilingual({
			es: "Tipografía grande Aplicada",
			eng: "Big Typography Applied",
		});
	}
}

/* ****************************** */
/* ******* Funciones remove ******* */
/* ****************************** */

function removeHighContrast() {
	settingsVars.buttonHighContrast.classList.add("settingItemInactive");
	let arrayTodos: HTMLElement[] = Array.from(
		document.querySelectorAll("[data-text]")
	);
	arrayTodos.forEach((elm) => {
		elm.classList.remove("highContrast");
	});

	if (settingsVars.settingsDisplayed) {
		alertifyMessageBilingual({
			es: "Alto Contraste Removido",
			eng: "High Contrast Removed",
		});
	}
}

function removeBigFont() {
	settingsVars.buttonBigFont.classList.add("settingItemInactive");
	let arrayTodos: HTMLElement[] = Array.from(document.querySelectorAll("*"));
	arrayTodos.forEach((elm: any) => {
		elm.style.fontSize = elm.dataset.initialfont;
		elm.removeAttribute("data-initialfont");
	});
	if (settingsVars.settingsDisplayed) {
		alertifyMessageBilingual({
			es: "Tipografía grande Removida",
			eng: "Big Typography Removed",
		});
	}
}

/* LANGUAGES */
//! SPA para español
//! ENG para ingles

/* Si no se define el lenguaje, se definira el idioma tomando el del navegador */

function defineLang(idiomText = "") {
	if (idiomText == "") {
		if (window.navigator.language.includes("es")) {
			localStorage.lang = "spa";
		}
		if (window.navigator.language.includes("eng")) {
			localStorage.lang = "eng";
		}
		alertifyMessageBilingual({
			es: "Puedes cambiarlo en Configuraciones.",
			eng: "You can change it on Settings.",
		});
		alertifyMessageBilingual({
			es: "Idioma configurado automáticamente.",
			eng: "Language was set automatically.",
		});
	} else {
		localStorage.lang = idiomText;
	}
}
/* La funcion idiomHTMLInner() recibe como parametro un objeto con las urls del fetch hacia el 
archivo json de cada lenguaje, con los items spa y eng como keys. Esta funcion sera llamada
para llenar los span correspondientes al idioma. el identificador en el html es un data-text="key" */

/* Funcion para llenar el texto */
function idiomHTMLInner(urls: { spa: string; eng: string }): void {
	var myHeaders = new Headers();
	myHeaders.append("pragma", "no-cache");
	myHeaders.append("cache-control", "no-cache");

	var myInit = {
		method: "GET",
		headers: myHeaders,
	};

	let urlParaFetch = "";
	let htmlLang = "";
	if (localStorage.lang == null || localStorage.lang == "") {
		defineLang();
	}
	if (localStorage.lang == "spa") {
		urlParaFetch = urls.spa;
		htmlLang = "es";
	}

	if (localStorage.lang == "eng") {
		urlParaFetch = urls.eng;
		htmlLang = "eng";
	}

	/* Traer json de esta url */
	fetch(urlParaFetch, myInit)
		.then(
			/* Retornar como un JSON */
			(fetchResult) => {
				return fetchResult.text();
			}
		)
		.then((textoResult) => {
			return JSON.parse(textoResult);
		})
		.then((jsonParseado) => {
			/* Configurar lang en html */
			let firstHTML: any = document.firstElementChild;
			firstHTML.setAttribute("lang", htmlLang);

			/* Llamar a todos los span */
			let todosSpan: any[] = Array.from(
				document.querySelectorAll("[data-text]")
			);
			for (let x in todosSpan) {
				if (jsonParseado[todosSpan[x].dataset.text] != null) {
					todosSpan[x].innerHTML = jsonParseado[todosSpan[x].dataset.text];
				}
			}
		});
}

idiomHTMLInner({
	spa: window.location.origin + "/global/lang/spa.json",
	eng: window.location.origin + "/global/lang/eng.json",
});

if (localStorage.lang == "eng") {
	settingsVars.buttonBilingual.classList.add("settingItemInactive");
}
if (localStorage.lang == "spa") {
	settingsVars.buttonBilingual.classList.remove("settingItemInactive");
}

function alertifyMessageBilingual(param: { es: string; eng: string }): void {
	if (localStorage.lang == "spa") {
		alertify.set("notifier", "delay", 5);
		alertify.set("notifier", "position", "top-center");
		alertify.message(param.es);
	}
	if (localStorage.lang == "eng") {
		alertify.set("notifier", "delay", 5);
		alertify.set("notifier", "position", "top-center");
		alertify.message(param.eng);
	}
}
