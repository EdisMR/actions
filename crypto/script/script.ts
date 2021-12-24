/* Declare elements to be used */
const cryptoElements:{
	encodeInput:HTMLTextAreaElement
	encodeOutput:HTMLElement
	decodeInput:HTMLTextAreaElement
	decodeOutput:HTMLElement
	copyEncoded:HTMLButtonElement
	copyDecoded:HTMLButtonElement
	resetEncoded:HTMLButtonElement
	resetDecoded:HTMLButtonElement
}={
	encodeInput:<HTMLTextAreaElement>document.getElementById("encodeInput"),
	encodeOutput:<HTMLElement>document.getElementById("encodeOutput"),
	decodeInput:<HTMLTextAreaElement>document.getElementById("decodeInput"),
	decodeOutput:<HTMLElement>document.getElementById("decodeOutput"),
	copyEncoded:<HTMLButtonElement>document.getElementById("copyEncoded"),
	copyDecoded:<HTMLButtonElement>document.getElementById("copyDecoded"),
	resetEncoded:<HTMLButtonElement>document.getElementById("resetEncoded"),
	resetDecoded:<HTMLButtonElement>document.getElementById("resetDecoded"),

}

/* Variables to use when inner an input */
var encodeInputValue:string,decodeInputValue:string

/* Encode the input */
const encodeString=(input:string):string=>{
	let result:string=btoa(encodeURI(input))
	return result
}

/* Decode the input */
const decodeString=(input:string):string=>{
	let result:string=decodeURI(atob(input))
	return result
}

/* Show encoded result */
const innerEncoded=():void=>{
	encodeInputValue=cryptoElements.encodeInput.value
	cryptoElements.encodeOutput.innerText=encodeString(encodeInputValue)
	cryptoElements.copyEncoded.disabled=false
}

/* Show Decoded result */
const innerDecoded=():void=>{
	decodeInputValue=cryptoElements.decodeInput.value
	let result:string
	try{
		result=decodeString(decodeInputValue)
		cryptoElements.decodeOutput.innerText=result
		cryptoElements.copyDecoded.disabled=false
	}catch(e){
		cryptoElements.copyDecoded.disabled=true
	}
}

/* Copy the input to the clipboard */
const copyResult=(what:string):void=>{
	navigator.clipboard.writeText(what)
	alertifyMessageBilingual({
		es:"Resultado copiado al portapapeles",
		eng:"Result copied to clipboard"
	})
}

/* Reset input */
const resetInput=(where:HTMLTextAreaElement):void=>{
	where.value=""
}


/* Listeners */
cryptoElements.encodeInput.addEventListener("input",innerEncoded,false)
cryptoElements.decodeInput.addEventListener("input",innerDecoded,false)

cryptoElements.copyEncoded.addEventListener("click",()=>{
	copyResult(cryptoElements.encodeOutput.innerText)
})

cryptoElements.copyDecoded.addEventListener("click",()=>{
	copyResult(cryptoElements.decodeOutput.innerText)
})

cryptoElements.resetDecoded.addEventListener("click",()=>{
	cryptoElements.decodeInput.value=""
	cryptoElements.decodeOutput.innerText=""
	cryptoElements.copyDecoded.disabled=true
})
cryptoElements.resetEncoded.addEventListener("click",()=>{
	cryptoElements.encodeInput.value=""
	cryptoElements.encodeOutput.innerText=""
	cryptoElements.copyEncoded.disabled=true
})



/* INNER TEXT */
window.addEventListener("load",()=>{
	idiomHTMLInner({
		spa: window.location.origin + "/crypto/lang/spa.json",
		eng: window.location.origin + "/crypto/lang/eng.json"
	});
})