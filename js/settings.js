/* ********************************************** */
/* ******************** CONFIGURACIONES ************ */
/* ********************************************** */
var settingsVars={
	parentDisplay:document.getElementById("modalSettings"),
	buttonOpen:document.getElementById("settingsButton"),
	closeButton:document.getElementById("settingsClose"),

	buttonTheme:document.getElementById("buttonTheme"),
	buttonHighContrast:document.getElementById("buttonHighContrast"),
	buttonBigFont:document.getElementById("buttonBigFont"),
	buttonBilingual:document.getElementById("buttonBilingual"),
}
/* SettingsDisplay */
settingsVars.buttonOpen.addEventListener("click",displaySettings,false);
settingsVars.closeButton.addEventListener("click",hideSettings,false);
function displaySettings(){
	settingsVars.parentDisplay.classList.remove("d-none")
}
function hideSettings(){
	settingsVars.parentDisplay.classList.add("d-none")
}
/* displaySettings() */
document.body.removeChild(document.querySelector(".loader"))