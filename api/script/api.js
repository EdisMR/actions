"use strict";
var api = {
    apiKey: "b96ba3199b2f0a04e4eaec52229ff2b1",
    lat: "",
    lon: "",
    units: "metric",
};
var datosCapture;
function defineUrlSolicitud() {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${api.lat}&lon=${api.lon}&appid=${api.apiKey}&lang=en&units=${api.units}`;
}
function defineUrlImagen() {
    return `https://openweathermap.org/img/wn/${datosCapture.weather[0].icon}.png`;
}
function solicitarDatos() {
    fetch(defineUrlSolicitud(), {
        method: "get",
    }).then(function (response) {
        return response.json();
    }).then(function (resp) {
        afterFetch(resp);
    })
        .catch(error => {
        let afterFormID = document.getElementById("afterForm");
        formularioAPI.style.display = "initial";
        afterFormID.style.display = "none";
    });
}
var htmlElements = {
    country: document.querySelector(".cardHeader .titulo"),
    lat: document.querySelector(".subtitulo .lat"),
    long: document.querySelector(".subtitulo .long"),
    feelsLike: document.querySelector(".cardBody .feels span"),
    sunrise: document.querySelector(".cardBody .sunrise span"),
    sunset: document.querySelector(".cardBody .sunset span"),
    humidity: document.querySelector(".cardBody .humidity span"),
    temp: document.querySelector(".temperatureItem .temp span"),
    tempMax: document.querySelector(".temperatureItem .tempMax span"),
    tempMin: document.querySelector(".temperatureItem .tempMin span"),
    weatherImagen: document.querySelector(".cardImg img"),
    imgDescription: document.querySelector(".cardImg .descrip"),
};
function innerDatos() {
    htmlElements.country.innerHTML = datosCapture.sys.country + " - " + datosCapture.name;
    htmlElements.lat.innerHTML = api.lat;
    htmlElements.long.innerHTML = api.lon;
    htmlElements.feelsLike.innerHTML = datosCapture.main.feels_like;
    let sun1 = new Date(datosCapture.sys.sunrise * 1000);
    htmlElements.sunrise.innerHTML = sun1.getHours() + ":" + sun1.getMinutes();
    let sun2 = new Date(datosCapture.sys.sunset * 1000);
    htmlElements.sunset.innerHTML = sun2.getHours() + ":" + sun2.getMinutes();
    htmlElements.humidity.innerHTML = datosCapture.main.humidity;
    htmlElements.temp.innerHTML = datosCapture.main.temp;
    htmlElements.tempMax.innerHTML = datosCapture.main.temp_max;
    htmlElements.tempMin.innerHTML = datosCapture.main.temp_min;
    htmlElements.weatherImagen.src = defineUrlImagen();
    htmlElements.imgDescription.innerHTML = datosCapture.weather[0].description;
}
function afterFetch(respuesta) {
    datosCapture = respuesta;
    innerDatos();
    let cardMostrar = document.querySelector(".mostrar");
    cardMostrar.style.display = "grid";
    let cardSolicitar = document.querySelector(".solicitar");
    cardSolicitar.style.display = "none";
}
let formularioAPI = document.forms[0];
formularioAPI.addEventListener("submit", datosDeForm, true);
function datosDeForm(e) {
    e.preventDefault();
    let afterFormElm = document.getElementById("afterForm");
    formularioAPI.style.display = "none";
    afterFormElm.style.display = "initial";
    solicitarDatos();
}
const buttonMyLocation = document.getElementById("myLocation");
buttonMyLocation.addEventListener("click", localizar, false);
function localizar() {
    buttonMyLocation.disabled = true;
    buttonMyLocation.innerText = "Locating";
    navigator.geolocation.getCurrentPosition(function (position) {
        api.lat = position.coords.latitude.toString();
        api.lon = position.coords.longitude.toString();
        let texto = api.lat + ", " + api.lon;
        formularioAPI.inputL.value = texto;
        buttonMyLocation.style.display = "none";
    }, function (error) {
        alert("No es posible realizar la operacion");
        buttonMyLocation.style.display = "none";
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
    });
    buttonMyLocation.removeEventListener("click", localizar, false);
}
let btncopiarLocalizacion = document.getElementById("copyLoc");
btncopiarLocalizacion.addEventListener("click", copiarLocalizacion, false);
function copiarLocalizacion() {
    navigator.clipboard.writeText(`${api.lat}, ${api.lon}`)
        .then(() => { btncopiarLocalizacion.disabled = true; })
        .catch(err => { console.log(err); });
}
const buttonActualizar = document.querySelector("#updateLoc");
buttonActualizar.addEventListener("click", () => { solicitarDatos(); btncopiarLocalizacion.disabled = false; }, false);
const btnToGmaps = document.getElementById("toGmaps");
btnToGmaps.addEventListener("click", () => { window.open(`https://www.google.com/maps/search/${api.lat},${api.lon}`); }, false);
window.addEventListener("load", solicitaTexto, false);
function solicitaTexto() {
    window.removeEventListener("load", solicitaTexto, false);
    idiomHTMLInner({
        spa: window.location.origin + "/api/lang/spa.json",
        eng: window.location.origin + "/api/lang/eng.json",
    });
}
//# sourceMappingURL=api.js.map