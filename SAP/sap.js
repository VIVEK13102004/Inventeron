// NAVBAR ACTIVE LINK

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-item")
const btnnav = document.getElementById('ex-btn')
const aboutSection = document.getElementById('about')

btnnav.addEventListener('click', ()=>{
  aboutSection.scrollIntoView({
    behavior:"smooth"
  })
})

window.addEventListener("scroll",()=>{

let current=""

sections.forEach(section=>{

const sectionTop=section.offsetTop-120

if(pageYOffset>=sectionTop){
current=section.getAttribute("id")
}

})

navLinks.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href")==="#"+current){
link.classList.add("active")
}

})

})



/* Lazy Loading Animation */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

})

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el)
})