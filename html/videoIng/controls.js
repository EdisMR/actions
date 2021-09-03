buttons={
	play:document.getElementById("play"),
	pause:document.getElementById("pause"),
	stop:document.getElementById("stop"),
}
video=document.querySelector("video")

buttons.play.addEventListener("click",playVideo,false);
buttons.pause.addEventListener("click",pauseVideo,false);
buttons.stop.addEventListener("click",stopVideo,false);

function restartState(){
	buttons.play.disabled=false;
	buttons.pause.disabled=true;
	buttons.stop.disabled=true;
}

function playVideo(){
	buttons.play.disabled=true;
	buttons.pause.disabled=false;
	buttons.stop.disabled=false;
	video.play();
}

function pauseVideo(){
	buttons.play.disabled=false;
	buttons.pause.disabled=true;
	buttons.stop.disabled=false;
	video.pause();
}

function stopVideo(){
	video.pause()
	video.currentTime=0.0;
	restartState();
}
restartState();