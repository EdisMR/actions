"use strict";
let buttons = {
    play: document.getElementById("play"),
    pause: document.getElementById("pause"),
    stop: document.getElementById("stop"),
};
const video = document.querySelector("video");
const restartState = () => {
    buttons.play.disabled = false;
    buttons.pause.disabled = true;
    buttons.stop.disabled = true;
};
const playVideo = () => {
    buttons.play.disabled = true;
    buttons.pause.disabled = false;
    buttons.stop.disabled = false;
    video.play();
};
const pauseVideo = () => {
    buttons.play.disabled = false;
    buttons.pause.disabled = true;
    buttons.stop.disabled = false;
    video.pause();
};
const stopVideo = () => {
    video.pause();
    video.currentTime = 0.0;
    restartState();
};
restartState();
window.addEventListener("load", solicitaTexto, false);
function solicitaTexto() {
    window.removeEventListener("load", solicitaTexto, false);
    idiomHTMLInner({
        spa: window.location.origin + "/videoIng/lang/spa.json",
        eng: window.location.origin + "/videoIng/lang/eng.json",
    });
}
buttons.play.addEventListener("click", playVideo, false);
buttons.pause.addEventListener("click", pauseVideo, false);
buttons.stop.addEventListener("click", stopVideo, false);
//# sourceMappingURL=controls.js.map