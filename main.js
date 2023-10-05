let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

// Cart toggle --> as we can toggle only one element at time hence we remove search toggle in cart and remove cart toggle in search
let cart = document.querySelector('.cart');
document.querySelector('#cart-icon').onclick = () => {
  cart.classList.toggle('active');
  search.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}

// NOTE :- When we want to toggle any element that time we have to remove the all other toggled elements
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () => {
  user.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

// to handle menu button
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
}

window.onscroll = () => {
  search.classList.remove('active');
  cart.classList.remove('active');
  user.classList.remove('active');
  navbar.classList.remove('active');
}


// navbar scroll
let header = document.querySelector('header'); 
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})

// taken this swiper JS code from google
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints : {
  //   0: {
  //     slidePerview: 0,
  //   },
  //   568: {
  //     slidePerview: 2,
  //   },
  //   768: {
  //     slidePerview: 2,
  //   },
  //   1020: {
  //     slidePerview: 3,
  //   },
  // },
});
