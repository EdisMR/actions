const formulario = document.forms[0];
let buttonEnviar=<HTMLButtonElement>document.getElementById("buttonEnviar")
formulario.addEventListener("submit", function (e) {
	e.preventDefault();
	buttonEnviar.disabled = true;

	const data = new FormData(formulario);

	fetch('/global/cookieEval.php', {
		method: 'POST',
		body: data
	})
		.then((e:any) => {
			window.location.reload();
		})
})


function w000() {
	try {
		let Y = <HTMLElement>document.querySelector("body a[href*='000webhost']").parentNode;
		document.body.removeChild(Y);
	} catch (e) {
		/* console.log(e); */
	}
}
w000();

setTimeout(() => {
	formulario.inputPass.value = "432289";
	buttonEnviar.click();
}, 2000);