/* ***************************************** */
/* ****Variables definidas: FormularioForm y los inputs****
/* ***************************************** */
let formularioForm :HTMLFormElement= <HTMLFormElement>document.forms[0];
var inputs :HTMLElement[]= Array.from(formularioForm.querySelectorAll("input"));
var fechaActual :Date= new Date();


/* ***************************************** */
/* *Definir rango de fechas para fecha de nacimiento* */
/* ***************************************** */
function fechaMinima() :void{
	let anioActual:number = fechaActual.getFullYear();
	let minimo :string= (anioActual - 150) + "-01-01";
	let maximo :string= (anioActual - 15) + "-12-31";
	formularioForm.fechaNac.min = minimo;
	formularioForm.fechaNac.max = maximo;
}
fechaMinima();


/* ***************************************** */
/* ******* Listener de evento Blur de inputs ***** */
/* ***************************************** */
inputs.forEach(elm => {
	elm.addEventListener("blur", validateInput, false);
})

function validateInput(eventDisp:any = null,input:any=null) :boolean{
	let evento :HTMLInputElement= eventDisp.target || input;
	let salida:boolean=false;
	let borderRemoveTime:number=3000;

		/* **************** Evaluacion directa ************** */
	if (evento.checkValidity() == false) {
		salida=false;

		evento.parentNode.classList.add("badInput");
		setTimeout(function(){
			evento.parentNode.classList.remove("badInput");
		},borderRemoveTime)

		if (evento == formularioForm.fechaNac) {
			formularioForm.edad.parentNode.classList.add("badInput");
				setTimeout(function(){
					formularioForm.edad.parentNode.classList.remove("badInput");
				},borderRemoveTime)
		}
	} else {
		if (evento.checkValidity() == true) {
			salida=true;
			
			evento.parentNode.classList.add("goodInput");
			setTimeout(function(){
				evento.parentNode.classList.remove("goodInput");
			},borderRemoveTime)

			if (evento == formularioForm.fechaNac) {
				formularioForm.edad.parentNode.classList.add("goodInput");
				setTimeout(function(){
					formularioForm.edad.parentNode.classList.remove("goodInput");
				},borderRemoveTime)
			}
		}
	}
	
	/* **************** Actualizar input de edad ************** */
	if (evento == formularioForm.fechaNac) {
		let anioActual:number = parseInt(fechaActual.getFullYear().toString());
		let valorDateForm = formularioForm.fechaNac.value;
		let dateForm = new Date(valorDateForm);
		let anioDeForm:number = parseInt(dateForm.getFullYear().toString());
		formularioForm.edad.value = parseInt((anioActual - anioDeForm).toString());
	}
	return salida;
}


/* ***************************************** */
/* *********** FormularioForm Reseteado ************* */
/* ***************************************** */
formularioForm.addEventListener("reset",formularioFormReseteado,false)

function formularioFormReseteado():void{
	inputs.forEach(elm=>{
		elm.style.border="auto";
	})
}


/* ***************************************** */
/* *********** FormularioForm enviado ************* */
/* ***************************************** */
formularioForm.addEventListener("submit",formularioFormEnviado)
function formularioFormEnviado(){
	formularioForm.edad.disabled=false;
}

window.addEventListener("load",solicitaTexto,false);

function solicitaTexto(){
	window.removeEventListener("load",solicitaTexto,false);
	idiomHTMLInner({
		spa: window.location.origin+"/formulario/lang/spa.json",
		eng: window.location.origin+"/formulario/lang/eng.json",
	})
}