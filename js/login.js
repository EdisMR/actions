/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
var urlDeValidacion=window.location.origin+"/php/cookieEval.php";

window.evalResult=null;

function evaluar(item){
	if((!item) && window.location.pathname!="/html/login.html"){
		window.location.pathname="/html/login.html";
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