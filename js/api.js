const apiKey="b96ba3199b2f0a04e4eaec52229ff2b1"
const urlSolicitud="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid="+apiKey;
var datos;

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
		console.log(resp);
	}
)
