/* ****************************************** */
/* *********** EVALUAR COOKIE *************** */
/* ***************************************** */
//! ARCHIVO DEPRECADO

window.evalResult = null;

fetch(window.location.origin + "/php/cookieEval.php")
	.then(
		function (response) {
			return response.text();
		}
	)
	//! ARCHIVO DEPRECADO
	.then(
		function (resp) {
			window.evalResult = JSON.parse(resp);
			let temp = window.evalResult[0];
			window.evalResult = temp;

			var promesa = new Promise((resolve, reject) => {
				if ((!window.evalResult) && window.location.pathname != "/html/login.php") {
					resolve(true);
				} else {
					resolve(false);
				}
				//! ARCHIVO DEPRECADO
			}).then(
				function (r) {
					if (r) {
						//console.log("ir a login");
						window.location.pathname = "/html/login.php";
					} else {
						//console.log("No vas a login");
						addScript();
					}
				}
			)
		}
	)
//! ARCHIVO DEPRECADO

function addScript() {
	let scriptSRC = document.createElement("script");
	let srcURL = window.location.origin + "/js/main.js";
	scriptSRC.setAttribute("src", srcURL);
	document.head.appendChild(scriptSRC);
}