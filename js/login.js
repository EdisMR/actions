/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
function eval(){
	let cookieEvaluar=new RegExp("access=432289");
	if(!(cookieEvaluar.test(document.cookie))){
		window.location.pathname="/html/login.html"
	}
}
eval();