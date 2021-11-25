window.addEventListener("contextmenu",(e)=>{e.preventDefault()},false)
window.addEventListener("load",afterLoadVisit,false)

const animateSpan:HTMLElement=<HTMLElement>document.querySelector("span")

let animationTimeline=gsap.timeline({paused:true})
.from("main",{
	opacity:0,
	duration:2,
	delay:1,
})
.from(".xitusContainer",{
	x:600,
	duration:1
})
.to(".box1,.box2",{
	duration:2,
	delay:2,
	y:0,
	onComplete:function(){
		window.location.href="/";
	}
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