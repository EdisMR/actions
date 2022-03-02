window.addEventListener("contextmenu",(e)=>{e.preventDefault()},false)
window.addEventListener("load",afterLoadVisit,false)

const animateSpan:HTMLElement=<HTMLElement>document.querySelector("span")

let animationTimeline=gsap.timeline({paused:true})
.to("main",{
	opacity:1,
	duration:2,
	delay:2,
})
.from(".xitusContainer",{
	x:600,
	duration:2
})
.to(".box1,.box2",{
	duration:2,
	delay:3,
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
	try{
		let Xp =<HTMLElement>document.querySelector(".disclaimer");
		document.body.removeChild(Xp);
	}catch(e){
		
	}
}
w000s();