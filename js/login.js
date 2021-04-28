/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
window.evalResult="";

fetch("/php/cookieEval.php")
.then(
	function(response){return response.text();}
)
.then(
	function(resp){
		/* Resp tiene el booleano */
		eval(resp);
	}
)

function eval(res){
	let evaluar=Boolean(res=="true");

	if(!evaluar && window.location.pathname!="/html/login.html"){
		window.location.pathname="/html/login.html";
	}else{
		try{
			document.querySelector(".loader").style.display="none";
		}catch(e){
			//console.log(e);
		}
		window.evalResult=evaluar;
	}
	
} 