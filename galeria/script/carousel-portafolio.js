var carouseles=new Array,carousel=function(){function t(t){var i=this;this.actualizaActual=function(t){t.forEach((function(t){t.isIntersecting&&(i.itemActual=parseInt(t.target.dataset.carouselItem)+1)})),i.actual.innerHTML=i.itemActual},this.container=t,this.body=this.container.querySelector(".carousel-body"),this.itemsContainer=this.body.querySelector(".carousel-items"),this.items=Array.from(this.itemsContainer.querySelectorAll(".carousel-item")),this.btnContainer=this.container.querySelector(".carousel-controls"),this.buttons=Array.from(this.btnContainer.querySelectorAll("button")),this.actual=this.btnContainer.querySelector(".carousel-innerActual"),this.total=this.btnContainer.querySelector(".carousel-innerTotal"),this.videos=Array.from(this.body.querySelectorAll("video")),this.cuantosItems=this.items.length,this.itemActual=0,this.loopValid=!0,this.intervalTime=5e3,this.scrollBodyItems=this.itemsContainer.scrollWidth,this.tamItem=this.items[0].clientWidth,this.buttons[0].addEventListener("click",this.prevItem.bind(this),!1),this.buttons[1].addEventListener("click",this.switchAuto.bind(this)),this.buttons[2].addEventListener("click",this.switchAuto.bind(this)),this.buttons[3].addEventListener("click",this.nextItem.bind(this),!1),this.videos.forEach((function(t){t.controls=!0,t.addEventListener("play",i.multimediaSwitch.bind(i),!1)})),this.loopIterator,this.inicio(),this.observer=new IntersectionObserver(this.actualizaActual.bind(this),{root:this.itemsContainer,rootMargin:"0px",threshold:.8}),this.items.forEach((function(t){i.observer.observe(t)}))}return t.prototype.inicio=function(){this.total.innerText=this.cuantosItems,this.itemsContainer.scrollTo(0,0),this.switchAuto(null,this.loopValid),this.items.forEach((function(t,i){t.dataset.carouselItem=i})),this.container.clientWidth<600&&this.items.forEach((function(t){t.style.flexDirection="column",t.style.justifyContent="flex-start",t.style.width="100%",t.querySelectorAll(".carousel-itemPart").forEach((function(t){t.classList.add("itemPart-MinHeight")}))}))},t.prototype.prevItem=function(){1==this.itemActual?this.itemsContainer.scrollTo(this.scrollBodyItems,0):this.itemsContainer.scrollTo(this.itemsContainer.scrollLeft-this.tamItem,0)},t.prototype.nextItem=function(){this.itemActual==this.cuantosItems?this.itemsContainer.scrollTo(0,0):this.itemsContainer.scrollTo(this.itemsContainer.scrollLeft+this.tamItem,0)},t.prototype.switchAuto=function(t,i){void 0===i&&(i=null);var e=i;1==this.loopValid?this.interval(!1):0==this.loopValid&&this.interval(!0),1==e?this.interval(!0):0==e&&this.interval(!1)},t.prototype.interval=function(t){1==t?(this.loopValid=!0,this.loopIterator=setInterval(this.nextItem.bind(this),this.intervalTime),this.buttons[1].disabled=!1,this.buttons[2].disabled=!0):0==t&&(this.loopValid=!1,clearInterval(this.loopIterator),this.buttons[1].disabled=!0,this.buttons[2].disabled=!1)},t.prototype.multimediaSwitch=function(t){this.loopValid&&this.switchAuto(null,!1)},t}();function carouselOrder(){var t=Array.from(document.querySelectorAll(".carousel-container"));t.length>0&&t.forEach((function(t,i){carouseles[i]=new carousel(t)}))}carouselOrder();