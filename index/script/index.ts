window.addEventListener("load", afterLoad, false);

function afterLoad() {
	window.removeEventListener("load", afterLoad, false);
	idiomHTMLInner({
		spa: window.location.origin + "/index/lang/spa.json",
		eng: window.location.origin + "/index/lang/eng.json",
	});

	gsap
		.timeline()
		.from(".index-portada", {
			opacity: 0,
			duration: 1,
			delay: 2,
		})
		.from(".tituloPortada", {
			duration: 2,
			scale: 0.9,
			rotationX: 90,
		});
}

/* Animate intro with Intersection Observer */
const textsQuery="#index-paginas,.card-content,.tecno-item,#tecnologias,.card-header,.bio"
const texts:HTMLElement[]=Array.from(document.querySelectorAll(textsQuery))

const observer=new IntersectionObserver((entries)=>{
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
{rootMargin:"300px 0px"})

texts.forEach(elm=>{
	elm.style.transitionDuration="1s"
	observer.observe(elm)
})