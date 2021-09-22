var datosCapture,api={apiKey:"b96ba3199b2f0a04e4eaec52229ff2b1",lat:"",lon:"",units:"metric"};function defineUrlSolicitud(){return"https://api.openweathermap.org/data/2.5/weather?lat="+api.lat+"&lon="+api.lon+"&appid="+api.apiKey+"&lang=en&units="+api.units}function defineUrlImagen(){return"http://openweathermap.org/img/wn/"+datosCapture.weather[0].icon+".png"}function solicitarDatos(){fetch(defineUrlSolicitud(),{method:"get"}).then((function(e){return e.json()})).then((function(e){afterFetch(e)})).catch((function(e){formulario.style.display="initial",document.getElementById("afterForm").style.display="none"}))}var htmlElements={country:document.querySelector(".cardHeader .titulo"),lat:document.querySelector(".subtitulo .lat"),long:document.querySelector(".subtitulo .long"),feelsLike:document.querySelector(".cardBody .feels span"),sunrise:document.querySelector(".cardBody .sunrise span"),sunset:document.querySelector(".cardBody .sunset span"),humidity:document.querySelector(".cardBody .humidity span"),temp:document.querySelector(".temperatureItem .temp span"),tempMax:document.querySelector(".temperatureItem .tempMax span"),tempMin:document.querySelector(".temperatureItem .tempMin span"),weatherImagen:document.querySelector(".cardImg img"),imgDescription:document.querySelector(".cardImg .descrip")};function innerDatos(){htmlElements.country.innerHTML=datosCapture.sys.country+" - "+datosCapture.name,htmlElements.lat.innerHTML=api.lat,htmlElements.long.innerHTML=api.lon,htmlElements.feelsLike.innerHTML=datosCapture.main.feels_like;var e=new Date(1e3*datosCapture.sys.sunrise);htmlElements.sunrise.innerHTML=e.getHours()+":"+e.getMinutes();var t=new Date(1e3*datosCapture.sys.sunset);htmlElements.sunset.innerHTML=t.getHours()+":"+t.getMinutes(),htmlElements.humidity.innerHTML=datosCapture.main.humidity,htmlElements.temp.innerHTML=datosCapture.main.temp,htmlElements.tempMax.innerHTML=datosCapture.main.temp_max,htmlElements.tempMin.innerHTML=datosCapture.main.temp_min,htmlElements.weatherImagen.src=defineUrlImagen(),htmlElements.imgDescription.innerHTML=datosCapture.weather[0].description}function afterFetch(e){datosCapture=e,innerDatos(),document.querySelector(".mostrar").style.display="grid",document.querySelector(".solicitar").style.display="none"}var formulario=document.forms[0];function datosDeForm(e){evento=e,e.preventDefault(),formulario.style.display="none",document.getElementById("afterForm").style.display="initial";var t=formulario.inputL.value.split(",");t[0]=parseFloat(t[0]),t[1]=parseFloat(t[1]),api.lat=t[0],api.lon=t[1],solicitarDatos()}formulario.addEventListener("submit",datosDeForm,!0);var buttonActualizar=document.querySelector(".mostrarFooter button");function localizar(){try{"geolocation"in navigator&&(buttonMyLocation.disabled=!0,buttonMyLocation.innerText="Locating",navigator.geolocation.getCurrentPosition((function(e){afterLocalization(e.coords.latitude,e.coords.longitude)})))}catch(e){alert("No es posible realizar la operacion"),buttonMyLocation.removeEventListener("click",localizar,!1),buttonMyLocation.style.display="none"}}function afterLocalization(e,t){var n=e+", "+t;formulario.inputL.value=n,buttonMyLocation.removeEventListener("click",localizar,!1),buttonMyLocation.style.display="none"}buttonActualizar.addEventListener("click",solicitarDatos,!1),buttonMyLocation=document.getElementById("myLocation"),buttonMyLocation.addEventListener("click",localizar,!1);