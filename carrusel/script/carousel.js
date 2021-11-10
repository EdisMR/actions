"use strict";
var carouseles = new Array;
class Carousel {
    container;
    body;
    itemsContainer;
    items;
    btnContainer;
    buttons;
    actual;
    total;
    videos;
    cuantosItems;
    itemActual;
    loopValid;
    intervalTime;
    scrollBodyItems;
    tamItem;
    loopIterator;
    observer;
    constructor(elm) {
        /* VALORES DE ELEMENTOS HTML */
        this.container = elm;
        this.body = this.container.querySelector(".carousel-body");
        this.itemsContainer = this.body.querySelector(".carousel-items");
        this.items = Array.from(this.itemsContainer.querySelectorAll(".carousel-item"));
        this.btnContainer = this.container.querySelector(".carousel-controls");
        this.buttons = Array.from(this.btnContainer.querySelectorAll("button"));
        this.actual = this.btnContainer.querySelector(".carousel-innerActual");
        this.total = this.btnContainer.querySelector(".carousel-innerTotal");
        this.videos = Array.from(this.body.querySelectorAll("video"));
        /* VALORES DE CALCULOS NECESARIOS */
        this.cuantosItems = this.items.length;
        this.itemActual = 0;
        this.loopValid = true; //True para un carrusel automatico, false para carrusel manual
        this.intervalTime = 3000;
        this.scrollBodyItems = this.itemsContainer.scrollWidth;
        this.tamItem = this.items[0].clientWidth;
        /* LISTENER DE BOTONES */
        this.buttons[0].addEventListener("click", this.prevItem.bind(this), false); //previous
        this.buttons[1].addEventListener("click", this.switchAuto.bind(this)); //pause
        this.buttons[2].addEventListener("click", this.switchAuto.bind(this)); //play
        this.buttons[3].addEventListener("click", this.nextItem.bind(this), false); //next
        /* Controlador de video */
        this.videos.forEach(elm => {
            elm.controls = true;
            elm.addEventListener("play", this.multimediaSwitch.bind(this), false);
        });
        /* SECUENCIA DE INICIO */
        this.loopIterator;
        this.inicio();
        /* Intersectionobserver para detectar item actual */
        this.observer = new IntersectionObserver(this.actualizaActual.bind(this), {
            root: this.itemsContainer,
            rootMargin: '0px',
            threshold: 0.8
        });
        this.items.forEach(elm => {
            this.observer.observe(elm);
        });
    }
    /* Inicio de controles y funcionalidades */
    inicio() {
        this.total.innerText = (this.cuantosItems).toString();
        this.itemsContainer.scrollTo(0, 0);
        this.switchAuto(null, this.loopValid);
        /* Añadir dataset para identificar item actial */
        this.items.forEach((elm, index) => {
            elm.dataset.carouselItem = index.toString();
        });
        if (this.container.clientWidth < 600) {
            this.items.forEach(elm => {
                elm.style.flexDirection = "column";
                elm.style.justifyContent = "flex-start";
                elm.style.width = "100%";
                elm.querySelectorAll(".carousel-itemPart").forEach(elemento => {
                    elemento.classList.add("itemPart-MinHeight");
                });
            });
        }
    }
    /* Ir al item anterior */
    prevItem() {
        if (this.itemActual == 1) {
            this.itemsContainer.scrollTo(this.scrollBodyItems, 0);
        }
        else {
            this.itemsContainer.scrollTo(
            /* scrollactual - tamDeItem */
            (this.itemsContainer.scrollLeft - this.tamItem), 0);
        }
    }
    /* Ir al item siguiente */
    nextItem() {
        if (this.itemActual == this.cuantosItems) {
            this.itemsContainer.scrollTo(0, 0);
        }
        else {
            this.itemsContainer.scrollTo(
            /* scrollactual + tamDeItem */
            (this.itemsContainer.scrollLeft + this.tamItem), 0);
        }
    }
    /* iterruptor de carrusel automatico */
    switchAuto(e, cont = null) {
        let control = cont;
        /* Esto en caso de que se invoque esta funcion desde los botones de control */
        if (this.loopValid == true) {
            //pasar a false
            this.interval(false);
        }
        else {
            if (this.loopValid == false) {
                //pasar a true
                this.interval(true);
            }
        }
        /* Esto en caso de que se invoque esta funcion desde un evento fuera de los botones de control */
        if (control == true) {
            //Añadir contador de scroll
            this.interval(true);
        }
        else {
            if (control == false) {
                //quitar contador de scroll
                this.interval(false);
            }
        }
    }
    /* Modulo de activacion del intervalo y acciones relacionadas al intervalo */
    interval(param) {
        if (param == true) {
            this.loopValid = true;
            this.loopIterator = setInterval(this.nextItem.bind(this), this.intervalTime);
            this.buttons[1].disabled = false;
            this.buttons[2].disabled = true;
        }
        else {
            if (param == false) {
                this.loopValid = false;
                clearInterval(this.loopIterator);
                this.buttons[1].disabled = true;
                this.buttons[2].disabled = false;
            }
        }
    }
    /* Actualizar item actual, recibe datos del itersection observer */
    actualizaActual = (entries) => {
        entries.forEach((entry, quien) => {
            if (entry.isIntersecting) {
                this.itemActual = (parseInt(entry.target.dataset.carouselItem)) + 1;
            }
        });
        /* Llenar info de item actual */
        this.actual.innerHTML = (this.itemActual).toString();
    };
    multimediaSwitch(evento) {
        console.log(evento);
        if (this.loopValid) {
            this.switchAuto(null, false);
        }
    }
}
window.onload = () => {
    let temp = Array.from(document.querySelectorAll(".carousel-container"));
    if (temp.length > 0) {
        temp.forEach((item, index) => {
            carouseles[index] = new Carousel(item);
        });
    }
    idiomHTMLInner({
        spa: window.location.origin + "/carrusel/lang/spa.json",
        eng: window.location.origin + "/carrusel/lang/eng.json",
    });
};
