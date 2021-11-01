"use strict";
/* ***************************************** */
/* ****Variables definidas: Formulario y los inputs****
/* ***************************************** */
var formulario = document.forms[0];
var inputs = Array.from(formulario.querySelectorAll("input"));
var fechaActual = new Date();
/* ***************************************** */
/* *Definir rango de fechas para fecha de nacimiento* */
/* ***************************************** */
function fechaMinima() {
    let anioActual = fechaActual.getFullYear();
    let minimo = (anioActual - 150) + "-01-01";
    let maximo = (anioActual - 15) + "-12-31";
    formulario.fechaNac.min = minimo;
    formulario.fechaNac.max = maximo;
}
fechaMinima();
/* ***************************************** */
/* ******* Listener de evento Blur de inputs ***** */
/* ***************************************** */
inputs.forEach(elm => {
    elm.addEventListener("blur", validateInput, false);
});
function validateInput(eventDisp = null, input = null) {
    let evento = eventDisp.target || input;
    let salida = false;
    let borderRemoveTime = 3000;
    /* **************** Evaluacion directa ************** */
    if (evento.checkValidity() == false) {
        salida = false;
        evento.parentNode.classList.add("badInput");
        setTimeout(function () {
            evento.parentNode.classList.remove("badInput");
        }, borderRemoveTime);
        if (evento == formulario.fechaNac) {
            formulario.edad.parentNode.classList.add("badInput");
            setTimeout(function () {
                formulario.edad.parentNode.classList.remove("badInput");
            }, borderRemoveTime);
        }
    }
    else {
        if (evento.checkValidity() == true) {
            salida = true;
            evento.parentNode.classList.add("goodInput");
            setTimeout(function () {
                evento.parentNode.classList.remove("goodInput");
            }, borderRemoveTime);
            if (evento == formulario.fechaNac) {
                formulario.edad.parentNode.classList.add("goodInput");
                setTimeout(function () {
                    formulario.edad.parentNode.classList.remove("goodInput");
                }, borderRemoveTime);
            }
        }
    }
    /* **************** Actualizar input de edad ************** */
    if (evento == formulario.fechaNac) {
        let anioActual = parseInt(fechaActual.getFullYear());
        let valorDateForm = formulario.fechaNac.value;
        let dateForm = new Date(valorDateForm);
        let anioDeForm = parseInt(dateForm.getFullYear());
        formulario.edad.value = parseInt(anioActual - anioDeForm);
    }
    return salida;
}
/* ***************************************** */
/* *********** Formulario Reseteado ************* */
/* ***************************************** */
formulario.addEventListener("reset", formularioReseteado, false);
function formularioReseteado() {
    inputs.forEach(elm => {
        elm.style.border = "auto";
    });
}
/* ***************************************** */
/* *********** Formulario enviado ************* */
/* ***************************************** */
formulario.addEventListener("submit", formularioEnviado);
function formularioEnviado() {
    formulario.edad.disabled = false;
}
window.addEventListener("load", solicitaTexto, false);
function solicitaTexto() {
    window.removeEventListener("load", solicitaTexto, false);
    idiomHTMLInner({
        spa: window.location.origin + "/formulario/lang/spa.json",
        eng: window.location.origin + "/formulario/lang/eng.json",
    });
}
