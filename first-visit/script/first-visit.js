"use strict";
window.addEventListener("contextmenu", (e) => { e.preventDefault(); }, false);
window.addEventListener("load", afterLoadVisit, false);
const animateSpan = document.querySelector("span");
let animationTimeline = gsap.timeline({ paused: true })
    .from("main", {
    opacity: 0,
    duration: 2,
    delay: 1,
})
    .from(".xitusContainer", {
    x: 600,
    duration: 1
})
    .to(".box1,.box2", {
    duration: 2,
    delay: 2,
    y: 0,
    onComplete: function () {
        window.location.href = "/";
    }
});
function afterLoadVisit() {
    animationTimeline.play();
}
function w000s() {
    try {
        let Y = document.querySelector("body a[href*='000webhost']");
        let YY = Y.parentNode;
        document.body.removeChild(YY);
    }
    catch (e) {
    }
}
w000s();
//# sourceMappingURL=first-visit.js.map