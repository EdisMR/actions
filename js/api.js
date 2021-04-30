/* Datos para la API */
var api={
	apiKey:"b96ba3199b2f0a04e4eaec52229ff2b1",
	lat:"",
	lon:"",
	units:"metric",
}

/* Url para el fetch */
var urlSolicitud;
function defineUrlSolicitud(){
	urlSolicitud=`https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${api.apiKey}&lang=sp&units=${api.units}`;
}

/* Para guardar los datos del fetch */
var datosCapture;

/* Datos que se van a necesitar para el html */
var datos={
	country:"",
	place:"",
	lat:"",
	long:"",
	temp:"",
	feelsLike:"",
	tempMax:"",
	tempMin:"",
	weatherImagen:"",
	imgDesc:"",
};

/* Los elementos html que se llenaran con la info */
var htmlElements={
	country:document.querySelector(".cardHeader .titulo"),
	lat:document.querySelector(".subtitulo .lat"),
	long:document.querySelector(".subtitulo .long"),
	temp:document.querySelector(".cardImg .temp span"),
	feelsLike:document.querySelector(".cardBody .feels span"),
	tempMax:document.querySelector(".cardBody .tempMax span"),
	tempMin:document.querySelector(".cardBody .tempMin span"),
	weatherImagen:document.querySelector(".cardImg img"),
	imgDesc:document.querySelector(".itemImg .descrip"),
}

/* Funcion principal del fetch */
function solicitarDatos(){
	fetch(
		urlSolicitud,
		{method:"get",}
	).then(
		function(response){
			return response.json();
		}
	).then(
		function(resp){
			afterFetch(resp);
		}
	)
}


function dataFilter(){
	datos.weatherImagen="http://openweathermap.org/img/wn/"+datosCapture.weather[0].icon+"@2x.png";
	datos.country=datosCapture.sys.country;
	datos.place=datosCapture.name;
	datos.lat=datosCapture.coord.lat;
	datos.long=datosCapture.coord.lon;
	datos.temp=datosCapture.main.temp;
	datos.feelsLike=datosCapture.main.feels_like;
	datos.tempMax=datosCapture.main.temp_max;
	datos.tempMin=datosCapture.main.temp_min;
	datos.imgDesc=datosCapture.weather[0].description;
}

function innerDatos(){
	htmlElements.country.innerHTML=datos.country+" - "+datos.place;
	htmlElements.lat.innerHTML=datos.lat;
	htmlElements.long.innerHTML=datos.long;
	htmlElements.temp.innerHTML=datos.temp;
	htmlElements.feelsLike.innerHTML=datos.feelsLike;
	htmlElements.tempMax.innerHTML=datos.tempMax;
	htmlElements.tempMin.innerHTML=datos.tempMin;
	htmlElements.weatherImagen.src=datos.weatherImagen;
	htmlElements.imgDesc.innerHTML=datos.imgDesc;
}


/* FORMULARIO */
const formulario=document.forms[0];
formulario.addEventListener("submit",datosDeForm,true);

function datosDeForm(e){
	evento=e;e.preventDefault();

	api.lat=formulario.latitud.value;
	api.lon=formulario.longitud.value;
	
	defineUrlSolicitud();	
	solicitarDatos();
}


function afterFetch(respuesta){
	datosCapture=respuesta;
	dataFilter();
	innerDatos();
	
	let card=document.querySelector(".mostrar");
	card.style.display="grid";
}