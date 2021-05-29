

// Menu Toggle Animation

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});


// Fixing header and changing its style

window.addEventListener('scroll', startFunction);

function startFunction(){

    const navBar = document.querySelector("header");

    if(window.scrollY > 10){

        navBar.style.position = "fixed";
        navBar.style.width = "100%";
        navBar.style.paddingTop = "1rem";
        navBar.style.paddingBottom = "1rem";
        navBar.style.backgroundColor = "#111111";
        
    } else { // Original style parameters

        navBar.style.position = "absolute";
        navBar.style.backgroundColor = "rgba(0,0,0,0.2)";
        navBar.style.paddingTop = "1.5rem";
        navBar.style.paddingBottom = "1.5rem";

    }
}

