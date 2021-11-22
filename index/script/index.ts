window.addEventListener("load",afterLoad,false)

function afterLoad(){
	window.removeEventListener("load",afterLoad,false)
	idiomHTMLInner({
		spa: window.location.origin+"/index/lang/spa.json",
		eng: window.location.origin+"/index/lang/eng.json",
	})

}

gsap.from(".tituloPortada,.index-portada",{
	duration:2,
	scale:.9,
	rotationX:90,
	stagger:1,
	delay:1
})