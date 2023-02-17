'use strict';
// menu
let menu=document.querySelector('.menu-icon');
let navbar=document.querySelector('.navbar');

document.querySelector('.menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
};

// cart
let cart=document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
};

// login form 
let login=document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
};
// on click on menu links removed menu
window.onscroll =() =>{
    navbar.classList.remove('active');
    menu.classList.remove('move');

};


// change header background color and shadow on scroll
let header=document.querySelector('header');

window.addEventListener('scroll-top',() => {
    header.classList.toggle('shadow',window.scrollY>0);
});

// scroll-top
let scrolltop=document.querySelector('.scroll-top');

window.addEventListener('scroll',() => {
    header.classList.toggle('active',window.scrollY>0);
});




// cookie
const cookieWrap = document.querySelector(".cookies"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("mycookie")) return;
  cookieWrap.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieWrap.classList.remove("show");

      if (button.id == "acceptBtn") {
        document.cookie = "cookieBy= mycookie; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};


window.addEventListener("load", executeCodes);



