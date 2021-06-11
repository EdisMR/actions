/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
window.evalResult=null;

function evaluar(){
	if((!window.evalResult) && window.location.pathname != "/html/login.php"){
		window.location.pathname="/html/login.php";
		//console.log("ir a login");
	}else{
		//console.log("No vas a login");
	}
}


fetch(window.location.origin+"/php/cookieEval.php")
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
		addScript();
	}
	)


function addScript(){
	let scriptSRC=document.createElement("script");
	let srcURL=window.location.origin+ "/js/main.js";
	scriptSRC.setAttribute("src",srcURL);
	document.head.appendChild(scriptSRC);
}