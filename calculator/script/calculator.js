var messages = {
    error: "ERROR"
};
var formulario = document.forms[0];
formulario.addEventListener("submit", /* calculatorMainProcess */ calculatorMainProcess, false);
var inputTag = formulario.operationInput;
var inputValue = "";
var resultInnerTag = document.getElementById("resultInner");
var resultValue = "";
/* Funcion principal para manejar el calculo */
function calculatorMainProcess(e) {
    /* ETAPA INICIAL */
    e.preventDefault();
    setInputValue();
    /* Etapa de evaluacion: hacer logica para controlar flujo de calculo de los parentesis y casos */
    var strActual = inputValue;
    var contador = 100;
    do {
        var parentPeque = determinateLastParenthesis(strActual);
        var solve = division(parentPeque);
        strActual = strActual.replace(parentPeque, solve);
        contador--;
    } while (contador > 0 && strActual != messages.error && isNaN(Number(strActual)));
    if (contador == 1) {
        console.log("Contador finalizado");
    }
    resultValue = strActual;
    /* ETAPA DE CIERRE */
    innerFinalResult();
}
/* NOTA: Para validar si es un numero, probar Number(numero), este dará el numero, 0, o NaN*/
function division(operacion) {
    var resultado = "";
    var exprEvaluar = removeParenthesis(operacion);
    var arrayEvaluar = exprEvaluar.split("/");
    switch (arrayEvaluar.length) {
        case 1:
            {
                /* Si es un numero, retornar el numero sin cambios */
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    resultado = arrayEvaluar[0];
                }
                /* Si NO es un numero, retornar la operacion que contiene */
                if (isNaN(Number(arrayEvaluar[0]))) {
                    resultado = resta(arrayEvaluar[0]);
                }
            }
            break;
        case 3:
            {
                resultado = messages.error;
            }
            break;
        case 2:
            {
                if (resultado == "" && arrayEvaluar[1] == "0") {
                    resultado = messages.error;
                }
                /* Si alguno es una expresion, resolverla */
                if (resultado == "" && arrayEvaluar.some(function (x) { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = resta(arrayEvaluar[0]);
                    arrayEvaluar[1] = resta(arrayEvaluar[1]);
                }
                /* SI ambos son numeros, retornar solucion */
                if (resultado == "" && !isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))) {
                    var a = Number(arrayEvaluar[0]);
                    var b = Number(arrayEvaluar[1]);
                    resultado = (a / b).toString();
                }
            }
            break;
        default: resultado = messages.error;
    }
    return resultado;
}
function resta(operacion) {
    var result = "2";
    return result;
}
function suma(operacion) {
    var result = "1";
    return result;
}
/* Capturar el input hacia inputValue */
function setInputValue() {
    inputValue = inputTag.value;
}
/* Buscar el ultimo parentesis que no contiene otro parentesis dentro */
function determinateLastParenthesis(analize) {
    var result = "";
    var lastIndexParenthesis = analize.lastIndexOf("(");
    var almostDone = analize.indexOf(")", lastIndexParenthesis);
    result = analize.substring(lastIndexParenthesis, almostDone + 1);
    if (result == "") {
        result = analize;
    }
    return result;
}
function removeParenthesis(valor) {
    var resultado = "";
    resultado = valor.replace("(", "");
    resultado = resultado.replace(")", "");
    return resultado;
}
function innerFinalResult() {
    resultInnerTag.innerText = resultValue;
}
