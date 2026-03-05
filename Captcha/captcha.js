const captchaText = document.getElementById("captchaText")
const captchaInput = document.getElementById("captchaInput")
const verifyBtn = document.getElementById("verifyBtn")
const refreshCaptcha = document.getElementById("refreshCaptcha")
const resultMessage = document.getElementById("resultMessage")

let generatedCaptcha=""

function generateCaptcha(){

const characters="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

generatedCaptcha=""

for(let i=0;i<6;i++){

generatedCaptcha+=characters[Math.floor(Math.random()*characters.length)]

}

captchaText.innerText=generatedCaptcha

}

generateCaptcha()

refreshCaptcha.addEventListener("click",generateCaptcha)

verifyBtn.addEventListener("click",function(){

const userValue=captchaInput.value.trim()

if(userValue===""){

resultMessage.innerText="Please enter captcha"
resultMessage.style.color="red"

return

}

if(userValue===generatedCaptcha){

resultMessage.innerText="Captcha verified successfully"
resultMessage.style.color="green"

}else{

resultMessage.innerText="Incorrect captcha. Try again."
resultMessage.style.color="red"

}

})