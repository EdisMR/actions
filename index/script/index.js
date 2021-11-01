"use strict";
window.addEventListener("load", solicitaTexto, false);
function solicitaTexto() {
    window.removeEventListener("load", solicitaTexto, false);
    idiomHTMLInner({
        spa: window.location.origin + "/index/lang/spa.json",
        eng: window.location.origin + "/index/lang/eng.json",
    });
}
