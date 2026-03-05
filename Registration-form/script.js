const form = document.getElementById("registrationForm")

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const typeInput = document.getElementById("internshipType")
const passwordInput = document.getElementById("password")
const courseInput = document.getElementById("course")

const modal = document.getElementById("successModal")
const closeModal = document.getElementById("closeModal")
const userDetails = document.getElementById("userDetails")

function setError(input,message){
const error = input.parentElement.querySelector(".error")
error.innerText = message
}

function clearError(input){
const error = input.parentElement.querySelector(".error")
error.innerText = ""
}

function validateName(){
const regex=/^[A-Za-z ]+$/

if(nameInput.value.trim()===""){
setError(nameInput,"Name required")
return false
}

if(!regex.test(nameInput.value)){
setError(nameInput,"Only alphabets allowed")
return false
}

clearError(nameInput)
return true
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

function validatePhone(){
const regex=/^[0-9]{10}$/

if(phoneInput.value.trim()===""){
setError(phoneInput,"Phone required")
return false
}

if(!regex.test(phoneInput.value)){
setError(phoneInput,"Enter valid number")
return false
}

clearError(phoneInput)
return true
}

function validateType(){

if(typeInput.value===""){
setError(typeInput,"Select course")
return false
}

clearError(typeInput)
return true
}

function validatePassword(){
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/

if(passwordInput.value.trim()===""){
setError(passwordInput,"Password required")
return false
}

if(!regex.test(passwordInput.value)){
setError(passwordInput,"Min 8 chars, upper, lower, number, symbol")
return false
}

clearError(passwordInput)
return true
}

function validateCourse(){

if(courseInput.value===""){
setError(courseInput,"Select course")
return false
}

clearError(courseInput)
return true
}

form.addEventListener("submit",function(e){

e.preventDefault()

const v1=validateName()
const v2=validateEmail()
const v3=validatePhone()
const v4=validateType()
const v5=validatePassword()
const v6=validateCourse()

if(v1 && v2 && v3 && v4 && v5 && v6){

userDetails.innerHTML=`
<p><b>Name:</b> ${nameInput.value}</p>
<p><b>Email:</b> ${emailInput.value}</p>
<p><b>Phone:</b> ${phoneInput.value}</p>
<p><b>Internship Type:</b> ${typeInput.value}</p>
<p><b>Course:</b> ${courseInput.value}</p>
`

modal.style.display="flex"

form.reset()

}

})

closeModal.addEventListener("click",function(){
modal.style.display="none"
})