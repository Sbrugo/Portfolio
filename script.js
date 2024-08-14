//variables
const proyectosJavascript = document.querySelector('.details-container');

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

proyectosJavascript.addEventListener('click', function(){
    console.log("funciona onclick");
})