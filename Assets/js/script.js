'use strict';



/**
 * navbar
 */

function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 80) {
        navbar.classList.remove('bgchange-color');
    } else {
        navbar.classList.add('bgchange-color');
    }
}

window.addEventListener('scroll', scrollValue);