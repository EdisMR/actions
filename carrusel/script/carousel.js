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
        this.container = elm;
        this.body = this.container.querySelector(".carousel-body");
        this.itemsContainer = this.body.querySelector(".carousel-items");
        this.items = Array.from(this.itemsContainer.querySelectorAll(".carousel-item"));
        this.btnContainer = this.container.querySelector(".carousel-controls");
        this.buttons = Array.from(this.btnContainer.querySelectorAll("button"));
        this.actual = this.btnContainer.querySelector(".carousel-innerActual");
        this.total = this.btnContainer.querySelector(".carousel-innerTotal");
        this.videos = Array.from(this.body.querySelectorAll("video"));
        this.cuantosItems = this.items.length;
        this.itemActual = 0;
        this.loopValid = true;
        this.intervalTime = 3000;
        this.scrollBodyItems = this.itemsContainer.scrollWidth;
        this.tamItem = this.items[0].clientWidth;
        this.buttons[0].addEventListener("click", this.prevItem.bind(this), false);
        this.buttons[1].addEventListener("click", this.switchAuto.bind(this));
        this.buttons[2].addEventListener("click", this.switchAuto.bind(this));
        this.buttons[3].addEventListener("click", this.nextItem.bind(this), false);
        this.videos.forEach(elm => {
            elm.controls = true;
            elm.addEventListener("play", this.multimediaSwitch.bind(this), false);
        });
        this.loopIterator;
        this.inicio();
        this.observer = new IntersectionObserver(this.actualizaActual.bind(this), {
            root: this.itemsContainer,
            rootMargin: '0px',
            threshold: 0.8
        });
        this.items.forEach(elm => {
            this.observer.observe(elm);
        });
    }
    inicio() {
        this.total.innerText = (this.cuantosItems).toString();
        this.itemsContainer.scrollTo(0, 0);
        this.switchAuto(null, this.loopValid);
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
    prevItem() {
        if (this.itemActual == 1) {
            this.itemsContainer.scrollTo(this.scrollBodyItems, 0);
        }
        else {
            this.itemsContainer.scrollTo((this.itemsContainer.scrollLeft - this.tamItem), 0);
        }
    }
    nextItem() {
        if (this.itemActual == this.cuantosItems) {
            this.itemsContainer.scrollTo(0, 0);
        }
        else {
            this.itemsContainer.scrollTo((this.itemsContainer.scrollLeft + this.tamItem), 0);
        }
    }
    switchAuto(e, cont = null) {
        let control = cont;
        if (this.loopValid == true) {
            this.interval(false);
        }
        else {
            if (this.loopValid == false) {
                this.interval(true);
            }
        }
        if (control == true) {
            this.interval(true);
        }
        else {
            if (control == false) {
                this.interval(false);
            }
        }
    }
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
    actualizaActual = (entries) => {
        entries.forEach((entry, quien) => {
            if (entry.isIntersecting) {
                this.itemActual = (parseInt(entry.target.dataset.carouselItem)) + 1;
            }
        });
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
//# sourceMappingURL=carousel.js.map