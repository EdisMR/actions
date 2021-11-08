interface buttonsControl{
	play:HTMLButtonElement;
	pause:HTMLButtonElement;
	stop:HTMLButtonElement;
}

let buttons:buttonsControl={
	play:<HTMLButtonElement>document.getElementById("play"),
	pause:<HTMLButtonElement>document.getElementById("pause"),
	stop:<HTMLButtonElement>document.getElementById("stop"),
}
const video=<HTMLVideoElement>document.querySelector("video")

buttons.play.addEventListener("click",playVideo,false);
buttons.pause.addEventListener("click",pauseVideo,false);
buttons.stop.addEventListener("click",stopVideo,false);

function restartState():void{
	buttons.play.disabled=false;
	buttons.pause.disabled=true;
	buttons.stop.disabled=true;
}

function playVideo():void{
	buttons.play.disabled=true;
	buttons.pause.disabled=false;
	buttons.stop.disabled=false;
	video.play();
}

function pauseVideo():void{
	buttons.play.disabled=false;
	buttons.pause.disabled=true;
	buttons.stop.disabled=false;
	video.pause();
}

function stopVideo():void{
	video.pause()
	video.currentTime=0.0;
	restartState();
}
restartState();


window.addEventListener("load",solicitaTexto,false);

function solicitaTexto(){
	window.removeEventListener("load",solicitaTexto,false);
	idiomHTMLInner({
		spa: window.location.origin+"/videoIng/lang/spa.json",
		eng: window.location.origin+"/videoIng/lang/eng.json",
	})
}