const form = document.getElementById("loginForm")

const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const captchaText = document.getElementById("captchaText")
const captchaInput = document.getElementById("captchaInput")

const refreshCaptcha = document.getElementById("refreshCaptcha")

const modal = document.getElementById("successModal")
const closeModal = document.getElementById("closeModal")
const userDetails = document.getElementById("userDetails")

let generatedCaptcha = ""


function generateCaptcha(){

const chars="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

generatedCaptcha=""

for(let i=0;i<5;i++){
generatedCaptcha+=chars[Math.floor(Math.random()*chars.length)]
}

captchaText.innerText=generatedCaptcha

}

generateCaptcha()



function setError(input,message){

const error=input.parentElement.querySelector(".error")
error.innerText=message

}

function clearError(input){

const error=input.parentElement.querySelector(".error")
error.innerText=""

}


function validateEmail(){

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(emailInput.value.trim()===""){
setError(emailInput,"Email required")
return false
}

if(!regex.test(emailInput.value)){
setError(emailInput,"Invalid email")
return false
}

clearError(emailInput)
return true

}


function validatePassword(){

if(passwordInput.value.trim()===""){
setError(passwordInput,"Password required")
return false
}

clearError(passwordInput)
return true

}


function validateCaptcha(){

if(captchaInput.value.trim()===""){
setError(captchaInput,"Enter captcha")
return false
}

if(captchaInput.value!==generatedCaptcha){
setError(captchaInput,"Captcha incorrect")
return false
}

clearError(captchaInput)
return true

}


form.addEventListener("submit",function(e){

e.preventDefault()

const v1=validateEmail()
const v2=validatePassword()
const v3=validateCaptcha()

if(v1 && v2 && v3){

userDetails.innerHTML=`
<p><b>Email:</b> ${emailInput.value}</p>
`

modal.style.display="flex"

form.reset()

generateCaptcha()

}

})


refreshCaptcha.addEventListener("click",generateCaptcha)

closeModal.addEventListener("click",function(){
modal.style.display="none"
})