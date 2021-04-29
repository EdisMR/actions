const apiKey="b96ba3199b2f0a04e4eaec52229ff2b1"
const urlSolicitud="https://api.openweathermap.org/data/2.5/weather?lat=9.935243&lon=-84.11944&appid="+apiKey+"&lang=sp";

var datosCapture;
var datos={
	weatherImagen:"",
};

fetch(
	urlSolicitud,
	{
		method:"get",
	}
	).then(
	function(response){
		return response.json();
	}
).then(
	function(resp){
		datosCapture=resp;
	}
)


function dataFilter(){
	datos.weatherImagen="http://openweathermap.org/img/wn/"+datosCapture.weather[0].icon+"@2x.png";
	document.querySelector("main").innerHTML=`
		<p>${datosCapture.weather[0].description}</p>
		<img width="90%" height="auto" src="${datos.weatherImagen}">
		</img>
	`
}
