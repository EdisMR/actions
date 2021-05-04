/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
window.evalResult=null;

function evaluar(){
	if((!window.evalResult) && window.location.pathname != "/html/login.html"){
		window.location.pathname="/html/login.html";
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
	}
)

window.addEventListener("DOMContentLoaded",()=>{
	headerCreator();
	footerCreator()
},false);


function headerCreator(){
	let data=new URLSearchParams("elm=header");
	fetch(window.location.origin+"/php/main.php",
		{
			method:"post",
			body:data,
		}
	)
	.then(function(response){
		return response.text();
	})
	.then(function(resp){
		document.body.insertAdjacentHTML("afterbegin",resp)
	})
}


function footerCreator(){
	let data=new URLSearchParams("elm=footer");
	fetch(window.location.origin+"/php/main.php",
		{
			method:"post",
			body:data,
		}
	)
	.then(function(response){
		return response.text();
	})
	.then(function(resp){
		document.body.insertAdjacentHTML("beforeend",resp)

		setTimeout(()=>{
			document.body.insertAdjacentHTML("beforeend",
				"<script src=' "+window.location.origin+ "/js/main.js '>"
			)
		})

	})
}
