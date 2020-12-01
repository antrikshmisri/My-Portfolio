const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')
const loader = document.querySelector('.loader-wrapper')
window.addEventListener('load' , ()=>{
    navbar.classList.add("sticky-top")
    body.style.overflowY = "visible";
    loader.style.opacity = "0";
    setTimeout(()=>{loader.style.display = "none";} , 1000)
})