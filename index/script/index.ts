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
