/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
var urlDeValidacion=window.location.origin+"/php/cookieEval.php";

window.evalResult=null;

function evaluar(item){
	if(item){
		document.querySelector(".loader").style.display="none";
	}
	if(item==false && window.location.pathname!="/html/login.html"){
		//window.location.pathname="/html/login.html";
		console.log("ir a login");
	}
}


fetch(urlDeValidacion)
.then(
	function(response){
		return response.text()
	}
)
.then(
	function(resp){
		window.evalResult=Boolean(resp=="true");
	}
)

evaluar(window.evalResult);