window.addEventListener("load",afterLoad,false)

function afterLoad(){
	window.removeEventListener("load",afterLoad,false)
	idiomHTMLInner({
		spa: window.location.origin+"/index/lang/spa.json",
		eng: window.location.origin+"/index/lang/eng.json",
	})

	anime({
		targets: '.header-enlaces li',
		scale: [.2,1],
		easing:"easeOutExpo",
		duration:2000
	});
}

