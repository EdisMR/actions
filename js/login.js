/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
var urlDeValidacion=window.location.origin+"/php/cookieEval.php";

window.evalResult=null;

function evaluar(){
	if((!window.evalResult) && window.location.pathname != "/html/login.html"){
		window.location.pathname="/html/login.html";
		console.log("ir a login");
	}else{
		console.log("No vas a login");
	}
}


fetch(urlDeValidacion)
.then(
	function(response){
		return response.text();
	}
)
.then(
	function(resp){
		window.evalResult=JSON.parse(resp);
		let temp=window.evalResult[0];
		window.evalResult=temp;
		evaluar();
	}
)