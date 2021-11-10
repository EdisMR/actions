let whereInner=<HTMLElement>document.getElementById("userInfo");

whereInner.insertAdjacentHTML("beforeend",
"DocumentLastModified: "+document.lastModified
)

whereInner.insertAdjacentHTML("beforeend",
"<br><br>brandName0: "+navigator.userAgentData.brands[0].brand
)
whereInner.insertAdjacentHTML("beforeend",
"<br>brandVersion0: "+navigator.userAgentData.brands[0].version
)
whereInner.insertAdjacentHTML("beforeend",
"<br><br>brandName1: "+navigator.userAgentData.brands[1].brand
)
whereInner.insertAdjacentHTML("beforeend",
"<br>brandVersion1: "+navigator.userAgentData.brands[1].version
)
whereInner.insertAdjacentHTML("beforeend",
"<br><br>brandName2: "+navigator.userAgentData.brands[2].brand
)
whereInner.insertAdjacentHTML("beforeend",
"<br>brandVersion2: "+navigator.userAgentData.brands[2].version
)



whereInner.insertAdjacentHTML("beforeend",
"<br><br>screenWidth: "+screen.width
)
whereInner.insertAdjacentHTML("beforeend",
"<br>screenHeight: "+screen.height
)
whereInner.insertAdjacentHTML("beforeend",
"<br><br>screenAvailWidth: "+screen.availWidth
)
whereInner.insertAdjacentHTML("beforeend",
"<br>screenAvailHeight: "+screen.availHeight
)
whereInner.insertAdjacentHTML("beforeend",
"<br><br>visualViewportWidth: "+window.visualViewport.width
)
whereInner.insertAdjacentHTML("beforeend",
"<br>visualViewportHeight: "+window.visualViewport.height
)
whereInner.insertAdjacentHTML("beforeend",
"<br>visualViewportScale: "+window.visualViewport.scale
)



whereInner.insertAdjacentHTML("beforeend",
"<br><br>systemMobile: "+navigator.userAgentData.mobile
)
whereInner.insertAdjacentHTML("beforeend",
"<br>screenPixelDepth: "+screen.pixelDepth
)



whereInner.insertAdjacentHTML("beforeend",
"<br><br>Lang0: "+navigator.languages[0]
)
whereInner.insertAdjacentHTML("beforeend",
"<br>Lang1: "+navigator.languages[1]
)
whereInner.insertAdjacentHTML("beforeend",
"<br>Lang2: "+navigator.languages[2]
)