/* Datos para la API */
var api = {
	apiKey: "b96ba3199b2f0a04e4eaec52229ff2b1",
	lat: "",
	lon: "",
	units: "metric",
}
/* Para guardar los datos del fetch */
var datosCapture:any;

/* Url para el fetch */
function defineUrlSolicitud() {
	return `https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${api.apiKey}&lang=en&units=${api.units}`;
}

/* URL de la imagen */
function defineUrlImagen() {
	return `https://openweathermap.org/img/wn/${datosCapture.weather[0].icon}.png`;
}


/* Funcion principal del fetch */
function solicitarDatos() {
	fetch(
		defineUrlSolicitud(), {
		method: "get",
	}
	).then(
		function (response) {
			return response.json();
		}
	).then(
		function (resp) {
			afterFetch(resp);
			/* console.log(resp); */
		}
	)
		.catch(error => {
			/* console.log(error); */
			let afterFormID=<HTMLElement>document.getElementById("afterForm");
			formularioAPI.style.display = "initial";
			afterFormID.style.display = "none";
		})
}



/* Los elementos html que se llenaran con la info */
var htmlElements = {
	country: <HTMLElement>document.querySelector(".cardHeader .titulo"),
	lat: <HTMLElement>document.querySelector(".subtitulo .lat"),
	long: <HTMLElement>document.querySelector(".subtitulo .long"),
	feelsLike: <HTMLElement>document.querySelector(".cardBody .feels span"),
	sunrise: <HTMLElement>document.querySelector(".cardBody .sunrise span"),
	sunset: <HTMLElement>document.querySelector(".cardBody .sunset span"),
	humidity: <HTMLElement>document.querySelector(".cardBody .humidity span"),
	temp: <HTMLElement>document.querySelector(".temperatureItem .temp span"),
	tempMax: <HTMLElement>document.querySelector(".temperatureItem .tempMax span"),
	tempMin: <HTMLElement>document.querySelector(".temperatureItem .tempMin span"),
	weatherImagen: <HTMLImageElement>document.querySelector(".cardImg img"),
	imgDescription: <HTMLElement>document.querySelector(".cardImg .descrip"),
}

/* Llenar el html con los datos */
function innerDatos() {
	htmlElements.country.innerHTML = datosCapture.sys.country + " - " + datosCapture.name;
	htmlElements.lat.innerHTML = api.lat;
	htmlElements.long.innerHTML = api.lon;
	htmlElements.feelsLike.innerHTML = datosCapture.main.feels_like;

	let sun1:Date = new Date(datosCapture.sys.sunrise * 1000);
	htmlElements.sunrise.innerHTML = sun1.getHours() + ":" + sun1.getMinutes();

	let sun2:Date = new Date(datosCapture.sys.sunset * 1000);
	htmlElements.sunset.innerHTML = sun2.getHours() + ":" + sun2.getMinutes();

	htmlElements.humidity.innerHTML = datosCapture.main.humidity;
	htmlElements.temp.innerHTML = datosCapture.main.temp;
	htmlElements.tempMax.innerHTML = datosCapture.main.temp_max;
	htmlElements.tempMin.innerHTML = datosCapture.main.temp_min;
	htmlElements.weatherImagen.src = defineUrlImagen();
	htmlElements.imgDescription.innerHTML = datosCapture.weather[0].description;
}


function afterFetch(respuesta:any) {
	datosCapture = respuesta;
	innerDatos();

	let cardMostrar = <HTMLElement>document.querySelector(".mostrar");
	cardMostrar.style.display = "grid";

	let cardSolicitar = <HTMLElement>document.querySelector(".solicitar");
	cardSolicitar.style.display = "none";
}


/* FORMULARIOAPI */
let formularioAPI = <HTMLElement>document.forms[0];
formularioAPI.addEventListener("submit", datosDeForm, true);

function datosDeForm(e: Event) {
	e.preventDefault();

	let afterFormElm=<HTMLElement>document.getElementById("afterForm");
	formularioAPI.style.display = "none";
	afterFormElm.style.display = "initial";

	solicitarDatos();
}




/* ******************************************** */
/* ****** Funcion para localizar al usuario ********** */
/* ******************************************** */
const buttonMyLocation = <HTMLButtonElement>document.getElementById("myLocation");
buttonMyLocation.addEventListener("click", localizar, false);

function localizar() {
	/* aniadir loader */
	buttonMyLocation.disabled = true;
	buttonMyLocation.innerText = "Locating";
	navigator.geolocation.getCurrentPosition(
		function (position) {
			api.lat=position.coords.latitude.toString();
			api.lon=position.coords.longitude.toString();
			let texto = api.lat + ", " + api.lon;
			formularioAPI.inputL.value = texto;
			buttonMyLocation.style.display = "none";
		},
		function (error) {
			alert("No es posible realizar la operacion");
			buttonMyLocation.style.display = "none";
		},
		{
			enableHighAccuracy: true,
			timeout: 5000,
		}
	)
	buttonMyLocation.removeEventListener("click", localizar, false);
}

let btncopiarLocalizacion=<HTMLButtonElement>document.getElementById("copyLoc");
btncopiarLocalizacion.addEventListener("click",copiarLocalizacion,false);
function copiarLocalizacion(){
	navigator.clipboard.writeText(`${api.lat}, ${api.lon}`)
	.then(()=>{btncopiarLocalizacion.disabled=true;	})
	.catch(err=>{console.log(err);})
}

const buttonActualizar = <HTMLElement>document.querySelector("#updateLoc");
buttonActualizar.addEventListener(
		"click",
		()=>{solicitarDatos();btncopiarLocalizacion.disabled=false;},
		false
	);

const btnToGmaps=<HTMLButtonElement>document.getElementById("toGmaps")
btnToGmaps.addEventListener(
	"click",
	()=>{window.open(`https://www.google.com/maps/search/${api.lat},${api.lon}`)},
	false
)



window.addEventListener("load",solicitaTexto,false);

function solicitaTexto(){
	window.removeEventListener("load",solicitaTexto,false);
	idiomHTMLInner({
		spa: window.location.origin+"/api/lang/spa.json",
		eng: window.location.origin+"/api/lang/eng.json",
	})
}