window.addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
window.addEventListener("load", afterLoadVisit, false);
var animateSpan = document.querySelector("span");
var animationTimeline = gsap.timeline({ paused: true })
    .to("main", {
    opacity: 1,
    duration: 2,
    delay: 2
})
    .from(".xitusContainer", {
    x: 600,
    duration: 2
})
    .to(".box1,.box2", {
    duration: 2,
    delay: 3,
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
        var Y = document.querySelector("body a[href*='000webhost']");
        var YY = Y.parentNode;
        document.body.removeChild(YY);
    }
    catch (e) {
        /* console.log(e); */
    }
}
w000s();
