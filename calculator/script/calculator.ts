const messages={
	error:"ERROR"
}
const formulario: HTMLFormElement = document.forms[0];
formulario.addEventListener("submit", /* calculatorMainProcess */ calculatorMainProcess, false)

const inputTag: HTMLInputElement = formulario.operationInput;
var inputValue: string = "";

const resultInnerTag: HTMLElement = document.getElementById("resultInner")
var resultValue: string = "";






/* Funcion principal para manejar el calculo */
function calculatorMainProcess(e: Event): void {
	/* ETAPA INICIAL */
	e.preventDefault();
	setInputValue();
	
	/* Etapa de evaluacion: hacer logica para controlar flujo de calculo de los parentesis y casos */
	let strActual:string=inputValue;
	let contador:number=100;
	do{
		let parentPeque:string=determinateLastParenthesis(strActual);
		let solve:string=division(parentPeque);
		strActual=strActual.replace(parentPeque,solve)
		contador--
	}while(contador>0 && strActual!=messages.error && isNaN(Number(strActual)));


	if(contador==1){console.log("Contador finalizado");}
	resultValue=strActual;


	/* ETAPA DE CIERRE */
	innerFinalResult();
}









/* NOTA: Para validar si es un numero, probar Number(numero), este dará el numero, 0, o NaN*/
function division(operacion: string): string {
	let resultado: string="";
	let exprEvaluar:string=removeParenthesis(operacion);

	let arrayEvaluar:string[]=exprEvaluar.split("/")

	switch(arrayEvaluar.length){

		case 1:{
			/* Si es un numero, retornar el numero sin cambios */
			if(!isNaN(Number(arrayEvaluar[0]))){resultado=arrayEvaluar[0]}

			/* Si NO es un numero, retornar la operacion que contiene */
			if(isNaN(Number(arrayEvaluar[0]))){resultado=resta(arrayEvaluar[0])}
		}break;

		case 3:{
			resultado=messages.error;
		}break;

		case 2:{
			if(resultado=="" && arrayEvaluar[1]=="0"){
				resultado=messages.error;
			}

			/* Si alguno es una expresion, resolverla */
			if(resultado=="" && arrayEvaluar.some(x=>{return isNaN(Number(x))})){
				arrayEvaluar[0]=resta(arrayEvaluar[0])
				arrayEvaluar[1]=resta(arrayEvaluar[1])
			}

			/* SI ambos son numeros, retornar solucion */
			if(resultado=="" && !isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))){
				let a=Number(arrayEvaluar[0]);
				let b=Number(arrayEvaluar[1]);

				resultado=(a/b).toString()
			}

		}break;
		
		default:resultado=messages.error;
	}
	return resultado
}






function resta(operacion: string): string {
	let result: string = "2";
	return result;
}






function suma(operacion:string):string {
	let result: string = "1";
	return result;
}








/* Capturar el input hacia inputValue */
function setInputValue(): void {
	inputValue = inputTag.value;
}




/* Buscar el ultimo parentesis que no contiene otro parentesis dentro */
function determinateLastParenthesis(analize: string): string {
	let result: string = "";
	let lastIndexParenthesis: number = analize.lastIndexOf("(");
	let almostDone: number = analize.indexOf(")", lastIndexParenthesis);
	result = analize.substring(lastIndexParenthesis, almostDone+1);

	if (result == "") {
		result = analize;
	}

	return result
}




function removeParenthesis(valor:string):string{
	let resultado="";

	resultado=valor.replace("(","")
	resultado=resultado.replace(")","")

	return resultado;
}




function innerFinalResult() {
	resultInnerTag.innerText = resultValue;
}