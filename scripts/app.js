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

// Home page animations

//Hero Description Animation
const tl = new gsap.timeline(); 

tl.from(".hero-description", {
   y:100,
   opacity:0,
   delay: 0.25,
    stagger: {
        amount: 1,
        ease: "ease",
    },
});
tl.from(".hero-image", {
    duration:1,
    opacity: 0, 
    scale: 3
});

// Project Page Animations
// Start Animation 

const projectBtn = document.querySelector('.project-btn');
const heading = document.querySelector('.project-heading');

projectBtn.addEventListener('click', () => {
    heading.style.display = 'block';
    heading.style.color = "white";
    tl.to('.project-heading', {
        scale: 1,
    });
    heading.style.position = 'initial';
})



