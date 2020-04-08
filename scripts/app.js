// Home Page Nav

// Mobile Menu
const menu = document.querySelector('#home-menu');
const nav = document.querySelector(".home-nav");

let menuOpen = false;

menu.addEventListener('click', () => {
    if(menuOpen === false){
        menuOpen = true;
        nav.style.opacity = "1";
        nav.style.pointerEvents = "all";
        menu.innerText = "Close";
    }else if(menuOpen === true){
        menuOpen = false;
        nav.style.opacity = "0";
        nav.style.pointerEvents = "none";
        menu.innerText = "Menu";
    }
})