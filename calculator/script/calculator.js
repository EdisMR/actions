"use strict";
const messages = {
    error: "ERROR"
};
let formularioCalc = document.forms[0];
formularioCalc.addEventListener("submit", calculatorMainProcess, false);
formularioCalc.addEventListener("reset", resetResult, false);
let inputTag = formularioCalc.operationInput;
let inputValue = "";
inputTag.addEventListener("input", resetResult, false);
const resultInnerTag = document.getElementById("resultInner");
var resultValue = "";
async function calculatorMainProcess(e) {
    e.preventDefault();
    setInputValue();
    let strActual = inputValue;
    console.log(math.evaluate(strActual));
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
    innerFinalResult();
}
function division(operacion) {
    let resultado = "";
    let exprEvaluar = removeParenthesis(operacion);
    let arrayEvaluar = exprEvaluar.split("/");
    switch (arrayEvaluar.length) {
        case 1:
            {
                if (isNaN(Number(arrayEvaluar[0]))) {
                    resultado = resta(arrayEvaluar[0]);
                }
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
                if (resultado == "" && arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = resta(arrayEvaluar[0]);
                    arrayEvaluar[1] = resta(arrayEvaluar[1]);
                }
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
                if (isNaN(Number(arrayEvaluar[0]))) {
                    result = suma(arrayEvaluar[0]);
                }
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    result = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                if (arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = suma(arrayEvaluar[0]);
                    arrayEvaluar[1] = suma(arrayEvaluar[1]);
                }
                if (arrayEvaluar[0] == arrayEvaluar[1]) {
                    result = "0";
                }
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
                if (isNaN(Number(arrayEvaluar[0]))) {
                    result = multiplicar(arrayEvaluar[0]);
                }
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    result = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
                if (arrayEvaluar.some(x => { return isNaN(Number(x)); })) {
                    arrayEvaluar[0] = multiplicar(arrayEvaluar[0]);
                    arrayEvaluar[1] = multiplicar(arrayEvaluar[1]);
                }
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
                if (!isNaN(Number(arrayEvaluar[0]))) {
                    resultado = arrayEvaluar[0];
                }
            }
            break;
        case 2:
            {
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
function setInputValue() {
    inputValue = inputTag.value;
}
function resetResult() {
    resultValue = "";
    resultInnerTag.innerText = "";
}
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
window.addEventListener("load", solicitaTexto, false);
function solicitaTexto() {
    window.removeEventListener("load", solicitaTexto, false);
    idiomHTMLInner({
        spa: window.location.origin + "/calculator/lang/spa.json",
        eng: window.location.origin + "/calculator/lang/eng.json",
    });
}
//# sourceMappingURL=calculator.js.map