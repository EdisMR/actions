var carouseles:any[]= new Array;

class Carousel {

	container :HTMLElement
	body :HTMLElement
	itemsContainer :HTMLElement
	items :HTMLElement[];
	btnContainer :HTMLElement
	buttons :HTMLButtonElement[]
	actual :HTMLElement
	total :HTMLElement
	videos :HTMLVideoElement[]
	loopIterator: any
	observer:IntersectionObserver

	cuantosItems :number
	itemActual :number
	loopValid :boolean
	intervalTime :number
	scrollBodyItems :number
	tamItem :number

	constructor(elm:HTMLElement) {
		/* VALORES DE ELEMENTOS HTML */
		this.container = <HTMLElement>elm;
		this.body = <HTMLElement>this.container.querySelector(".carousel-body");
		this.itemsContainer = <HTMLElement>this.body.querySelector(".carousel-items");
		this.items = Array.from(this.itemsContainer.querySelectorAll(".carousel-item"));
		this.btnContainer = <HTMLElement>this.container.querySelector(".carousel-controls");
		this.buttons = Array.from(this.btnContainer.querySelectorAll("button"))
		this.actual = <HTMLElement>this.btnContainer.querySelector(".carousel-innerActual");
		this.total = <HTMLElement>this.btnContainer.querySelector(".carousel-innerTotal");
		this.videos=Array.from(this.body.querySelectorAll("video"));

		/* VALORES DE CALCULOS NECESARIOS */
		this.cuantosItems = this.items.length;
		this.itemActual = 0;
		this.loopValid = true; //True para un carrusel automatico, false para carrusel manual
		this.intervalTime = 5000;
		this.scrollBodyItems=this.itemsContainer.scrollWidth;
		this.tamItem=this.items[0].clientWidth;

		/* LISTENER DE BOTONES */
		this.buttons[0].addEventListener("click", this.prevItem.bind(this), false);//previous
		this.buttons[1].addEventListener("click", this.switchAuto.bind(this));//pause
		this.buttons[2].addEventListener("click", this.switchAuto.bind(this));//play
		this.buttons[3].addEventListener("click", this.nextItem.bind(this), false);//next
		
		/* Controlador de video */
		this.videos.forEach(elm=>{
			elm.controls=true;
			elm.addEventListener("play",this.multimediaSwitch.bind(this),false);
		})


		/* SECUENCIA DE INICIO */
		this.loopIterator;
		this.inicio();

		/* Intersectionobserver para detectar item actual */
		this.observer = new IntersectionObserver(this.actualizaActual.bind(this), 
			{
				root: this.itemsContainer,
				rootMargin: '0px',
				threshold: 0.8
			}
		);

		this.items.forEach(elm=>{
			this.observer.observe(elm);
		})

	}


	/* Inicio de controles y funcionalidades */
	inicio() {
		this.total.innerText = (this.cuantosItems).toString();
		this.itemsContainer.scrollTo(0, 0);
		this.switchAuto(null, this.loopValid);

		/* Añadir dataset para identificar item actial */
		this.items.forEach((elm, index) => {
			elm.dataset.carouselItem = index.toString();
		})

		if(this.container.clientWidth<600){
			this.items.forEach(elm=>{
				elm.style.flexDirection="column";
				elm.style.justifyContent="flex-start";
				elm.style.width="100%";

				elm.querySelectorAll(".carousel-itemPart").forEach(elemento=>{
					elemento.classList.add("itemPart-MinHeight")
				})
			})
		}
	}


	/* Ir al item anterior */
	prevItem() {
		if(this.itemActual==1){
			this.itemsContainer.scrollTo(this.scrollBodyItems,0)
		}else{
			this.itemsContainer.scrollTo(
				/* scrollactual - tamDeItem */
				(this.itemsContainer.scrollLeft-this.tamItem)
				,0)
		}
	}
	
	/* Ir al item siguiente */
	nextItem() {
		if(this.itemActual==this.cuantosItems){
			this.itemsContainer.scrollTo(0,0);
		}else{
			this.itemsContainer.scrollTo(
				/* scrollactual + tamDeItem */
				(this.itemsContainer.scrollLeft+this.tamItem)
				,0)
		}
	}


	/* iterruptor de carrusel automatico */
	switchAuto(e:any, cont:any = null) {

		let control = cont;

		/* Esto en caso de que se invoque esta funcion desde los botones de control */
		if (this.loopValid == true) {
			//pasar a false
			this.interval(false);
		} else {
			if (this.loopValid == false) {
				//pasar a true
				this.interval(true);
			}
		}

		/* Esto en caso de que se invoque esta funcion desde un evento fuera de los botones de control */
		if (control == true) {
			//Añadir contador de scroll
			this.interval(true);
		} else {
			if (control == false) {
				//quitar contador de scroll
				this.interval(false);
			}
		}
	}


	/* Modulo de activacion del intervalo y acciones relacionadas al intervalo */
	interval(param:boolean) {
		if (param == true) {
			this.loopValid = true;
			this.loopIterator = setInterval(this.nextItem.bind(this), this.intervalTime);
			this.buttons[1].disabled = false;
			this.buttons[2].disabled = true;
		} else {
			if (param == false) {
				this.loopValid = false;
				clearInterval(this.loopIterator);
				this.buttons[1].disabled = true;
				this.buttons[2].disabled = false;
			}
		}

	}


	/* Actualizar item actual, recibe datos del itersection observer */
	actualizaActual = (entries:any) => {
		entries.forEach((entry:any) => {
			if (entry.isIntersecting) {
				this.itemActual=(parseInt(entry.target.dataset.carouselItem))+1;
			}
		})
		/* Llenar info de item actual */
		this.actual.innerHTML=(this.itemActual).toString();
	}


	multimediaSwitch(evento:any) {
		console.log(evento);
		if(this.loopValid){
			this.switchAuto(null,false);
		}
	}
}


function carouselOrder() {
	let temp = Array.from(document.querySelectorAll(".carousel-container"));
	if (temp.length > 0) {
		temp.forEach((item, index) => {
			carouseles[index] = new Carousel(<HTMLElement>item);
		})
	}
}

carouselOrder();

window.addEventListener("load",afterLoad,false)

function afterLoad():void{
	window.removeEventListener("load",afterLoad,false)
	idiomHTMLInner({
		spa: window.location.origin+"/galeria/lang/spa.json",
		eng: window.location.origin+"/galeria/lang/eng.json",
	})
}


/* Animate Intro for Gallery */
/* Animate intro with Intersection Observer */
const imgQuery=".carousel-container,.portada-proyectos"
const imgForObserver:HTMLElement[]=Array.from(document.querySelectorAll(imgQuery))

const imgObserver=new IntersectionObserver((entries)=>{
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.style.opacity="1"
			entry.target.style.transform="scale(1)"
		}else{
			entry.target.style.opacity="0"
			entry.target.style.transform="scale(.95)"
		}
	});
},
{threshold:.1})

imgForObserver.forEach(elm=>{
	elm.style.transitionDuration="1s"
	imgObserver.observe(elm)
})