"use strict";
const messages = {
    error: "ERROR"
};
const formulario = document.forms[0];
formulario.addEventListener("submit", calculatorMainProcess, false);
formulario.addEventListener("reset", resetResult, false);
const inputTag = formulario.operationInput;
var inputValue = "";
inputTag.addEventListener("input", resetResult, false);
const resultInnerTag = document.getElementById("resultInner");
var resultValue = "";
/* Funcion principal para manejar el calculo */
function calculatorMainProcess(e) {
    /* ETAPA INICIAL */
    e.preventDefault();
    setInputValue();
    /* Etapa de evaluacion: hacer logica para controlar flujo de calculo de los parentesis y casos */
    let strActual = inputValue;
    let contador = 100;
    do {
        let parentPeque = determinateLastParenthesis(strActual);
        let solve = division(parentPeque);
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
    let resultado = "";
    let exprEvaluar = removeParenthesis(operacion);
    let arrayEvaluar = exprEvaluar.split("/");
    switch (arrayEvaluar.length) {
        case 1:
            {
                /* Si NO es un numero, retornar la operacion que contiene */
                if (isNaN(Number(arrayEvaluar[0]))) {
                    resultado = resta(arrayEvaluar[0]);
                }
                /* Si es un numero, retornar el numero sin cambios */
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    resultado = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                if (arrayEvaluar[1] == "0") {
                    resultado = messages.error;
                }
                /* Si alguno es una expresion, resolverla */
                if (resultado == "" && arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = resta(arrayEvaluar[0]);
                    arrayEvaluar[1] = resta(arrayEvaluar[1]);
                }
                /* SI ambos son numeros, retornar solucion */
                if (resultado == "" && !isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))) {
                    let a = Number(arrayEvaluar[0]);
                    let b = Number(arrayEvaluar[1]);
                    resultado = (a / b).toString();
                }
            }
            break;
        default: resultado = messages.error;
    }
    if (resultado == "" || arrayEvaluar.length >= 3)
        resultado = messages.error;
    return resultado;
}
function resta(operacion) {
    let result = "";
    let exprEvaluar = removeParenthesis(operacion);
    let arrayEvaluar = exprEvaluar.split("-");
    switch (arrayEvaluar.length) {
        case 1:
            {
                /* Si NO es un numero, retornar la operacion que contiene */
                if (isNaN(Number(arrayEvaluar[0]))) {
                    result = suma(arrayEvaluar[0]);
                }
                /* Si es un numero, retornar el numero sin cambios */
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    result = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                /* Si alguno es una expresion, resolverla */
                if (arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = suma(arrayEvaluar[0]);
                    arrayEvaluar[1] = suma(arrayEvaluar[1]);
                }
                if (arrayEvaluar[0] == arrayEvaluar[1]) {
                    result = "0";
                }
                /* SI ambos son numeros, retornar solucion */
                if (result == "" && !isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))) {
                    let a = Number(arrayEvaluar[0]);
                    let b = Number(arrayEvaluar[1]);
                    result = (a - b).toString();
                }
            }
            break;
        default: result = "";
    }
    if (arrayEvaluar.length >= 3) {
        let tempArray = arrayEvaluar.map(elm => {
            return suma(elm);
        });
        if (tempArray.every(elmx => { return !isNaN(Number(elmx)); })) {
            let tempRes = Number(tempArray[0]);
            for (let x = 1; x <= tempArray.length; x++) {
                tempRes = tempRes - Number(tempArray[x]);
            }
            result = tempRes.toString();
        }
    }
    if (result == "") {
        result = messages.error;
    }
    return result;
}
function suma(operacion) {
    let result = "";
    let exprEvaluar = removeParenthesis(operacion);
    let arrayEvaluar = exprEvaluar.split("+");
    switch (arrayEvaluar.length) {
        case 1:
            {
                /* Si NO es un numero, retornar la operacion que contiene */
                if (isNaN(Number(arrayEvaluar[0]))) {
                    result = multiplicar(arrayEvaluar[0]);
                }
                /* Si es un numero, retornar el numero sin cambios */
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    result = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                /* Si alguno es una expresion, resolverla */
                if (arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = multiplicar(arrayEvaluar[0]);
                    arrayEvaluar[1] = multiplicar(arrayEvaluar[1]);
                }
                /* SI ambos son numeros, retornar solucion */
                if (result == "" && !isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))) {
                    let a = Number(arrayEvaluar[0]);
                    let b = Number(arrayEvaluar[1]);
                    result = (a + b).toString();
                }
            }
            break;
        default: result = "";
    }
    if (arrayEvaluar.length >= 3) {
        let tempArray = arrayEvaluar.map(elm => {
            return multiplicar(elm);
        });
        if (tempArray.every(elmx => { return !isNaN(Number(elmx)); })) {
            let tempRes = Number(tempArray[0]);
            for (let x = 1; x <= tempArray.length; x++) {
                tempRes = tempRes + Number(tempArray[x]);
            }
            result = tempRes.toString();
        }
    }
    if (result == "") {
        result = messages.error;
    }
    return result;
}
function multiplicar(evaluar) {
    let resultado = "";
    let exprEvaluar = removeParenthesis(evaluar);
    let arrayEvaluar = exprEvaluar.split("*");
    switch (arrayEvaluar.length) {
        case 1:
            {
                /* Si es un numero, retornar el numero sin cambios */
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    resultado = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                /* SI ambos son numeros, retornar solucion */
                if (!isNaN(Number(arrayEvaluar[0])) && !isNaN(Number(arrayEvaluar[1]))) {
                    let a = Number(arrayEvaluar[0]);
                    let b = Number(arrayEvaluar[1]);
                    resultado = (a * b).toString();
                }
            }
            break;
        default: resultado = "";
    }
    if (arrayEvaluar.length >= 3) {
        if (arrayEvaluar.every(elmx => { return !isNaN(Number(elmx)); })) {
            let tempRes = Number(arrayEvaluar[0]);
            for (let x = 1; x <= arrayEvaluar.length; x++) {
                tempRes = tempRes * Number(arrayEvaluar[x]);
            }
            resultado = tempRes.toString();
        }
    }
    if (resultado == "") {
        resultado = messages.error;
    }
    return resultado;
}
/* Capturar el input hacia inputValue */
function setInputValue() {
    inputValue = inputTag.value;
}
function resetResult() {
    resultValue = "";
    resultInnerTag.innerText = "";
}
/* Buscar el ultimo parentesis que no contiene otro parentesis dentro */
function determinateLastParenthesis(analize) {
    let result = "";
    let lastIndexParenthesis = analize.lastIndexOf("(");
    let almostDone = analize.indexOf(")", lastIndexParenthesis);
    result = analize.substring(lastIndexParenthesis, almostDone + 1);
    if (result == "") {
        result = analize;
    }
    return result;
}
function removeParenthesis(valor) {
    let resultado = valor.replace("(", "");
    resultado = resultado.replace(")", "");
    return resultado;
}
function innerFinalResult() {
    resultInnerTag.innerText = resultValue;
}
