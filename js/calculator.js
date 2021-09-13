const formulario=document.forms[0];
const inputTag=formulario.operationInput;
var inputValue="";
const resultInnerTag=document.getElementById("resultInner")
var resultValue="";


formulario.addEventListener("submit",calculatorMainProcess,false)


/* Funcion principal para manejar el calculo */
function calculatorMainProcess(e){
	/* ETAPA INICIAL */
	e.preventDefault();
	setInputValue();

	

	/* ETAPA DE CALCULO */
	resultValue=":)"

	/* ETAPA DE CIERRE */
	innerFinalResult();
}


/* Capturar el input hacia inputValue */
function setInputValue(){
	inputValue=inputTag.value;
}


/* retormar el valor de inputValue guardado */
function getInputValue(){
	return inputValue;
}

/* Buscar el ultimo parentesis que no contiene otro parentesis dentro */
function determinateLastParenthesis(analize){
	let result="";
	let dato=analize;
	let lastIndexParenthesis=dato.lastIndexOf("(");
	let almostDone=analize.indexOf(")",lastIndexParenthesis);
	result=dato.substring(lastIndexParenthesis+1,almostDone);
	return result
}

function innerFinalResult(){
	resultInnerTag.innerText=resultValue;
}

function booleanIsNumber(expresion){
	let resultado;
	let evaluar=Number(expresion)
	if(isNaN(evaluar) || expresion==""){
		resultado=false;
	}else{
		resultado=true;
	}
	return resultado
}

/* NOTA
	Para validar si es un numero, probar Number(numero), este dará el numero, o NaN

*/