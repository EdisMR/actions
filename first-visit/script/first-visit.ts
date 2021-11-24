window.addEventListener("contextmenu",(e)=>{e.preventDefault()},false)
window.addEventListener("load",afterLoadVisit,false)

const animateSpan:HTMLElement=<HTMLElement>document.querySelector("span")

let animationTimeline=gsap.timeline({paused:true})
.from("main",{
	opacity:0,
	duration:2,
	delay:1,
})
.from(".box1,.box2",{
	y:-2000,
	delay:2,
})

function afterLoadVisit():void{
	animationTimeline.play()
}

function w000s():void {
	try {
		let Y=<HTMLElement>document.querySelector("body a[href*='000webhost']")
		let YY=<Node>Y.parentNode;
		document.body.removeChild(YY);
	} catch (e) {
		/* console.log(e); */
	}
}
w000s();