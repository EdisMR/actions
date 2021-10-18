"use strict";
/* ************************************ */
/* ***** PROCEDIMIENTOS INICIALES ******/
/* ************************************ */
const formulario = document.forms[0];
const camposGrid = document.querySelectorAll(".grid-container div");
var innerTurnDiv = document.querySelector(".innerTurnUser span");
const innerTurnDivParent = document.querySelector(".innerTurnUser");
const buttonResetParent = document.querySelector(".buttonReset");
const buttonReset = document.querySelector(".buttonReset button");
/* Declarando matriz para guardar los divs que lo conforman */
const gameHorizontal = 7;
const gameVertical = 6;
var matrizGame = new Array(gameHorizontal);
for (let i = 0; i < gameHorizontal; i++) {
    matrizGame[i] = new Array(gameVertical);
}
/* Recorrer la matriz para añadir los div a esas casillas, y añadiendo el dataset a los div */
let contadorCamposGrid = 0;
for (let Y = 0; Y < gameVertical; Y++) {
    for (let X = 0; X < gameHorizontal; X++) {
        matrizGame[X][Y] = camposGrid[contadorCamposGrid];
        let n = "columna" + (X + 1);
        camposGrid[contadorCamposGrid].classList.add(n);
        camposGrid[contadorCamposGrid].dataset.posx = X;
        camposGrid[contadorCamposGrid].dataset.posy = Y;
        contadorCamposGrid++;
    }
}
var users = {
    user1: "",
    user2: "",
    winner: "",
    icon: "ms-Icon--CircleFill",
    turno: 1,
};
function retornaClaseUser() {
    let resultado;
    if (users.turno == 0) {
        resultado = "user1";
    }
    if (users.turno == 1) {
        resultado = "user2";
    }
    return resultado;
}
buttonReset.addEventListener("click", resetGame);
/* ************************************************ */
/* ********* FORMULARIO Y DESPUES DE ********* */
/* ************************************************ */
/* Formulario de usuarios del juego */
formulario.addEventListener("submit", defineUsers, false);
function defineUsers(ev) {
    e = ev;
    e.preventDefault();
    if (formulario.user1.value != formulario.user2.value) {
        formulario.removeEventListener("submit", defineUsers, false);
        users.user1 = formulario.user1.value;
        users.user2 = formulario.user2.value;
        afterDefineUsers();
    }
    return false;
}
function afterDefineUsers() {
    document.querySelector(".definirJugadores").classList.add("d-none");
    document.querySelector(".game-container").classList.remove("d-none");
    innerTurnDivParent.classList.remove("d-none");
    /* sobre los divs */
    camposGrid.forEach(elm => {
        elm.addEventListener("mouseover", addHoverGrid);
        elm.addEventListener("mouseleave", removeHoverGrid);
        elm.addEventListener("click", divCLicked);
    });
    innerTurnUser();
}
function removeListerDivs() {
    /* sobre los divs */
    camposGrid.forEach(elm => {
        elm.removeEventListener("mouseover", addHoverGrid);
        elm.removeEventListener("mouseleave", removeHoverGrid);
        elm.removeEventListener("click", divCLicked);
    });
}
/* El hover personalizado para las columnas */
function addHoverGrid(elem) {
    let claseColumna;
    try {
        claseColumna = this.classList[0];
    }
    catch (e) {
        claseColumna = elem.classList[0];
    }
    let elementos = document.querySelectorAll("." + claseColumna);
    elementos.forEach(elm => {
        elm.classList.add("divHover");
    });
}
function removeHoverGrid(elem) {
    let claseColumna;
    try {
        claseColumna = this.classList[0];
    }
    catch (e) {
        claseColumna = elem.classList[0];
    }
    let elementos = document.querySelectorAll("." + claseColumna);
    elementos.forEach(elm => {
        elm.classList.remove("divHover");
    });
}
/* ******************************************************** */
/* *************** CUANDO UN DIV ES CLICADO *************** */
/* ******************************************************** */
/* funcion del div cliqueado */
function divCLicked(evt) {
    let e = evt;
    let elemento = this;
    let elementoLlenar;
    let hayGanador;
    elementoLlenar = defineUltimoElementoVacio(elemento);
    llenarElemento(elementoLlenar);
    hayGanador = evaluarGanador(elementoLlenar);
    if (!hayGanador) {
        switchUser();
        innerTurnUser();
    }
    else {
        buttonResetParent.classList.remove("d-none");
        ganadorEncontrado();
        removeListerDivs();
        removeHoverGrid(elementoLlenar);
    }
}
function switchUser() {
    users.turno == 0 ? users.turno = 1 : users.turno = 0;
}
/* Llenar elemento desocupado */
function llenarElemento(divLlenar) {
    let divParaLlenar = divLlenar;
    divParaLlenar.children[0].classList.add(users.icon);
    divParaLlenar.classList.add(retornaClaseUser());
    divParaLlenar.children[0].dataset.occupied = "true";
}
/* Llenado del div para indicar de quien es el turno */
function innerTurnUser() {
    if (users.turno == 1) {
        innerTurnDiv.innerHTML = users.user1;
    }
    else {
        innerTurnDiv.innerHTML = users.user2;
    }
    animateInnerUser();
}
/* Animacion cuando llenamos el div con la info del turno */
function animateInnerUser() {
    innerTurnDivParent.classList.add("innerTurnUserAnimation");
}
innerTurnDivParent.addEventListener("animationend", afterAnimateInnerUser, false);
function afterAnimateInnerUser() {
    innerTurnDivParent.classList.remove("innerTurnUserAnimation");
}
/* ****************************************** */
/* ************ EVALUAR GANADOR ************ */
/* ****************************************** */
/*
    Definir el ultimo elemento que fue llenado, para evaluar grupos -
    Recibe el elemento clicado y define el elemento a llenar,
    recorriendo Y de abajo hacia arriba (con X estatico)
*/
function defineUltimoElementoVacio(elm) {
    let elemento = elm;
    let ultimo;
    var y = gameVertical - 1;
    for (y; y >= 0; y--) {
        if (matrizGame[elemento.dataset.posx][y].children[0].dataset.occupied == "false") {
            ultimo = matrizGame[elemento.dataset.posx][y];
            break;
        }
    }
    return ultimo;
}
function evaluarGanador(elem) {
    let hayGanador = false;
    let valorX = parseInt(elem.dataset.posx);
    let valorY = parseInt(elem.dataset.posy);
    /* Horizontal */
    /* caso1 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX + 1, valorY) == true &&
        buscarClaseEnReferencia(valorX + 2, valorY) == true &&
        buscarClaseEnReferencia(valorX + 3, valorY) == true) {
        hayGanador = true;
    }
    /* caso2 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY) == true &&
        buscarClaseEnReferencia(valorX + 1, valorY) == true &&
        buscarClaseEnReferencia(valorX + 2, valorY) == true) {
        hayGanador = true;
    }
    /* caso3 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 2, valorY) == true &&
        buscarClaseEnReferencia(valorX - 1, valorY) == true &&
        buscarClaseEnReferencia(valorX + 1, valorY) == true) {
        hayGanador = true;
    }
    /* caso4 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY) == true &&
        buscarClaseEnReferencia(valorX - 2, valorY) == true &&
        buscarClaseEnReferencia(valorX - 3, valorY) == true) {
        hayGanador = true;
    }
    /* Vertical */
    /* caso1 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX, valorY + 1) == true &&
        buscarClaseEnReferencia(valorX, valorY + 2) == true &&
        buscarClaseEnReferencia(valorX, valorY + 3) == true) {
        hayGanador = true;
    }
    /* caso2 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX, valorY - 1) == true &&
        buscarClaseEnReferencia(valorX, valorY + 1) == true &&
        buscarClaseEnReferencia(valorX, valorY + 2) == true) {
        hayGanador = true;
    }
    /* caso3 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX, valorY - 2) == true &&
        buscarClaseEnReferencia(valorX, valorY - 1) == true &&
        buscarClaseEnReferencia(valorX, valorY + 1) == true) {
        hayGanador = true;
    }
    /* caso4 */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX, valorY - 1) == true &&
        buscarClaseEnReferencia(valorX, valorY - 2) == true &&
        buscarClaseEnReferencia(valorX, valorY - 3) == true) {
        hayGanador = true;
    }
    /* Creciente */
    /* Primer grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX + 1, valorY - 1) &&
        buscarClaseEnReferencia(valorX + 2, valorY - 2) &&
        buscarClaseEnReferencia(valorX + 3, valorY - 3)) {
        hayGanador = true;
    }
    /* Segundo grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY + 1) &&
        buscarClaseEnReferencia(valorX + 1, valorY - 1) &&
        buscarClaseEnReferencia(valorX + 2, valorY - 2)) {
        hayGanador = true;
    }
    /* Tercer grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 2, valorY + 2) &&
        buscarClaseEnReferencia(valorX - 1, valorY + 1) &&
        buscarClaseEnReferencia(valorX + 1, valorY - 1)) {
        hayGanador = true;
    }
    /* Cuarto grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY + 1) &&
        buscarClaseEnReferencia(valorX - 2, valorY + 2) &&
        buscarClaseEnReferencia(valorX - 3, valorY + 3)) {
        hayGanador = true;
    }
    /* Decreciente */
    /* Primer grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX + 1, valorY + 1) &&
        buscarClaseEnReferencia(valorX + 2, valorY + 2) &&
        buscarClaseEnReferencia(valorX + 3, valorY + 3)) {
        hayGanador = true;
    }
    /* Segundo grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY - 1) &&
        buscarClaseEnReferencia(valorX + 1, valorY + 1) &&
        buscarClaseEnReferencia(valorX + 2, valorY + 2)) {
        hayGanador = true;
    }
    /* Tercer grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY - 1) &&
        buscarClaseEnReferencia(valorX - 2, valorY - 2) &&
        buscarClaseEnReferencia(valorX + 1, valorY + 1)) {
        hayGanador = true;
    }
    /* Cuarto grupo */
    if (hayGanador == false &&
        buscarClaseEnReferencia(valorX - 1, valorY - 1) &&
        buscarClaseEnReferencia(valorX - 2, valorY - 2) &&
        buscarClaseEnReferencia(valorX - 3, valorY - 3)) {
        hayGanador = true;
    }
    return hayGanador;
}
function buscarClaseEnReferencia(valX, valY) {
    let resultadoF = false;
    let contadorErrores = false; /* No hay errores */
    try {
        matrizGame[valX][valY].classList;
    }
    catch (error) {
        contadorErrores = true;
    }
    if (contadorErrores == false) {
        let clases = Array.from(matrizGame[valX][valY].classList);
        clases.forEach(elmx => {
            if (elmx == retornaClaseUser()) {
                resultadoF = true;
            }
        });
    }
    return resultadoF;
}
/* **************************************************** */
/* ******* CUANDO SE HA ENCONTRADO UN GANADOR ******* */
/* **************************************************** */
function ganadorEncontrado() {
    let name;
    let color;
    if (users.turno == 1) {
        name = users.user1;
        color = "hsl(60, 70%, 60%)";
    }
    if (users.turno == 0) {
        name = users.user2;
        color = "hsl(0, 60%, 50%)";
    }
    innerTurnDivParent.style.backgroundColor = color;
    innerTurnDivParent.innerHTML = `The winner is ${name}`;
}
function resetGame() {
    buttonResetParent.classList.add("d-none");
    camposGrid.forEach(elm => {
        elm.classList.remove("user1");
        elm.classList.remove("user2");
        elm.children[0].classList.remove(users.icon);
        elm.children[0].dataset.occupied = "false";
    });
    innerTurnDivParent.style.backgroundColor = "initial";
    innerTurnDivParent.innerHTML = `
		<div><span></span>'s shift</div>
	`;
    innerTurnDiv = document.querySelector(".innerTurnUser span");
    afterDefineUsers();
    innerTurnUser();
}
