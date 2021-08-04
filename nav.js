

const navList = document.querySelector(".nav-links");
const navbtn=document.querySelector(".nav-button")
const HIDDEN=document.querySelector(".hidden")
function showNav(){
navList.classList.toggle("hidden");
}


navbtn.addEventListener('click',showNav)
