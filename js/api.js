/* Datos para la API */
var api={
	apiKey:"b96ba3199b2f0a04e4eaec52229ff2b1",
	lat:"",
	lon:"",
	units:"metric",
}
/* Para guardar los datos del fetch */
var datosCapture;

/* Url para el fetch */
function defineUrlSolicitud(){
	return `https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${api.apiKey}&lang=sp&units=${api.units}`;
}

/* URL de la imagen */
function defineUrlImagen(){
	return `http://openweathermap.org/img/wn/${datosCapture.weather[0].icon}.png`;
}


/* Funcion principal del fetch */
function solicitarDatos(){
	fetch(
		defineUrlSolicitud(),
		{method:"get",}
	).then(
		function(response){
			return response.json();
		}
	).then(
		function(resp){
			afterFetch(resp);
			/* console.log("Datos Solicitados"); */
		}
	)
	.catch(error=>{
		/* console.log(error); */
		formulario.style.display="initial";
		document.getElementById("afterForm").style.display="none";
	})
}



/* Los elementos html que se llenaran con la info */
var htmlElements={
	country:document.querySelector(".cardHeader .titulo"),
	lat:document.querySelector(".subtitulo .lat"),
	long:document.querySelector(".subtitulo .long"),
	feelsLike:document.querySelector(".cardBody .feels span"),
	sunrise:document.querySelector(".cardBody .sunrise span"),
	sunset:document.querySelector(".cardBody .sunset span"),
	humidity:document.querySelector(".cardBody .humidity span"),
	temp:document.querySelector(".temperatureItem .temp span"),
	tempMax:document.querySelector(".temperatureItem .tempMax span"),
	tempMin:document.querySelector(".temperatureItem .tempMin span"),
	weatherImagen:document.querySelector(".cardImg img"),
	imgDescription:document.querySelector(".cardImg .descrip"),
}

/* Llenar el html con los datos */
function innerDatos(){
	htmlElements.country.innerHTML=datosCapture.sys.country+" - "+datosCapture.name;
	htmlElements.lat.innerHTML=api.lat;
	htmlElements.long.innerHTML=api.lon;
	htmlElements.feelsLike.innerHTML=datosCapture.main.feels_like;
	
	let sun1=new Date(datosCapture.sys.sunrise*1000);
	htmlElements.sunrise.innerHTML=sun1.getHours()+":"+sun1.getMinutes();
	
	let sun2=new Date(datosCapture.sys.sunset*1000);
	htmlElements.sunset.innerHTML=sun2.getHours()+":"+sun2.getMinutes();
	
	htmlElements.humidity.innerHTML=datosCapture.main.humidity;
	htmlElements.temp.innerHTML=datosCapture.main.temp;
	htmlElements.tempMax.innerHTML=datosCapture.main.temp_max;
	htmlElements.tempMin.innerHTML=datosCapture.main.temp_min;
	htmlElements.weatherImagen.src=defineUrlImagen();
	htmlElements.imgDescription.innerHTML=datosCapture.weather[0].description;
}


function afterFetch(respuesta){
	datosCapture=respuesta;
	innerDatos();
	
	let cardMostrar=document.querySelector(".mostrar");
	cardMostrar.style.display="grid";

	let cardSolicitar=document.querySelector(".solicitar");
	cardSolicitar.style.display="none";
}


/* FORMULARIO */
const formulario=document.forms[0];
formulario.addEventListener("submit",datosDeForm,true);

function datosDeForm(e){
	evento=e;e.preventDefault();

	formulario.style.display="none";
	document.getElementById("afterForm").style.display="initial";

	let valordeInput=formulario.inputL.value;
	let coordenadas=valordeInput.split(",");

	coordenadas[0]=parseFloat(coordenadas[0]);
	coordenadas[1]=parseFloat(coordenadas[1]);

	api.lat=coordenadas[0];
	api.lon=coordenadas[1];

	solicitarDatos();
}

const buttonActualizar=document.querySelector(".mostrarFooter button");
buttonActualizar.addEventListener("click",solicitarDatos,false);