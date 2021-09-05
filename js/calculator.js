/* **************
	DECLARACIONES
	**************
*/

const formulario=document.forms[0];
formulario.addEventListener("submit",calcularString,false)
formulario.addEventListener("click",buttonsAction,false)

var valores={
	stringPrueba:"452+(32*(3+5))",
	string:"",
	resultInner:document.getElementById("resultInner"),
	input:formulario.querySelector("input"),
}

const controles={
	AC:document.getElementById("controlAC"),
	parenthesis1:document.getElementById("controlParenthesis1"),
	parenthesis2:document.getElementById("controlParenthesis2"),
	control7:document.getElementById("control7"),
	control8:document.getElementById("control8"),
	control9:document.getElementById("control9"),
	controlDivide:document.getElementById("controlDivide"),
	control4:document.getElementById("control4"),
	control5:document.getElementById("control5"),
	control6:document.getElementById("control6"),
	controlMultiplica:document.getElementById("controlMultiplica"),
	control1:document.getElementById("control1"),
	control2:document.getElementById("control2"),
	control3:document.getElementById("control3"),
	controlResta:document.getElementById("controlResta"),
	control0:document.getElementById("control0"),
	control00:document.getElementById("control00"),
	controlDot:document.getElementById("controlDot"),
	controlPlus:document.getElementById("controlPlus"),
}






/* *********************
	FUNCIONES DE RETORNO 
	*********************
*/

/* Retornar valor de string */
function stringDetail(){
	return valores.string=`${formulario.operationInput.value}`;
}

/* Cual digito tocamos */
function determinarDigito(elemento /* Es el HTMLelement */){
	let resultado;
	switch (elemento){
		case controles.parenthesis1: resultado="(";
		break
		case controles.parenthesis2:resultado=")";
		break
		case controles.control7:resultado="7";
		break
		case controles.control8:resultado="8";
		break
		case controles.control9:resultado="9";
		break
		case controles.controlDivide:resultado="/";
		break
		case controles.control4:resultado="4";
		break
		case controles.control5:resultado="5";
		break
		case controles.control6:resultado="6";
		break
		case controles.controlMultiplica:resultado="*";
		break
		case controles.control1:resultado="1";
		break
		case controles.control2:resultado="2";
		break
		case controles.control3:resultado="3";
		break
		case controles.controlResta:resultado="-";
		break
		case controles.control0:resultado="0";
		break
		case controles.control00:resultado="00";
		break
		case controles.controlDot:resultado=".";
		break
		case controles.controlPlus:resultado="+";
		break
		default: "";
	}
	return resultado
}

/* Retornar parentesis más pequeño */
function extraerParentesis(stringElm){
	let lastParenthesisIni=stringElm.lastIndexOf("(")
	let lastParenthesisIniFin=stringElm.indexOf(")",lastParenthesisIni);
	let cadenaSolucionar=stringElm.substring(lastParenthesisIni+1,lastParenthesisIniFin)
	
	return cadenaSolucionar;
}







/* ********************
	FUNCIONES DE ACCION
	********************
*/
function resetForm(){
	formulario.reset()
}

/* MANEJADOR DEL CALCULO PRINCIPAL */
function calcularString(evento){
	/* 
		-Determinar el string mas pequeño
		-Iniciar evaluacion del string mas pequeño
		-Llenar resultInner con el resultado
	 */
	var e=evento;
	e.preventDefault();

	/* determinar string mas peque */
	extraerParentesis(stringDetail());

}


/* Manejador de click en botones de calculadora */
function buttonsAction(evento){
	let e=evento;

	/* AC => reiniciar form */
	if(e.target==controles.AC){
		resetForm();
	}
	/* Sino, evaluar el digito */
	let digito=determinarDigito(e.target);

	//! Llenar input

}

/* Imprimir resutlados en html */
function mostrarResultado(valor){
	valores.resultInner.innerText(valor);
}

