let beforeButton = document.querySelector('.slider-block__button-before');
let afterButton = document.querySelector('.slider-block__button-after');
let scale = document.querySelector('.slider-block__scale');
let imageBox = document.querySelector('.slider-block__image-box');
let mainNav = document.querySelector('.main-nav');
let openMenuButton = document.querySelector('.page-header__open-button');
let pageHeader = document.querySelector('.page-header__logo-panel');

let menuItemHeight = 66;

//On page loading show closed button and minimize menu
mainNav.classList.add("main-nav__minimize");
pageHeader.classList.add("page-header__logo-panel--closed");
openMenuButton.classList.add("page-header__open-button--show");
openMenuButton.setAttribute("aria-label", "Развернуть меню");

openMenuButton.addEventListener('click', function(evt) {
  // count menu items every time when click fires
  let mainNavItemAmount = document.querySelectorAll('.site-list__item').length;
  // on click expand menu
  if (mainNav.classList.contains("main-nav__minimize")) {
    // add transition property to mainNav
    mainNav.classList.add("main-nav__transition");

    mainNav.classList.remove("main-nav__minimize");
    mainNav.style.height = (mainNavItemAmount * menuItemHeight) + 1 + "px";
    pageHeader.classList.remove("page-header__logo-panel--closed");
    pageHeader.classList.add("page-header__logo-panel--opened");
    openMenuButton.setAttribute("aria-label", "Свернуть меню");
  } else {
    // minimize menu - 0px
    mainNav.classList.add("main-nav__minimize");
    // reset inline height
    mainNav.style.height = "";

    pageHeader.classList.remove("page-header__logo-panel--opened");
    pageHeader.classList.add("page-header__logo-panel--closed");
    openMenuButton.setAttribute("aria-label", "Развернуть меню");
  }
})

//On resize to tablet version reset inline height and remove transition
window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    mainNav.style.height = "";
    mainNav.classList.remove("main-nav__transition");
  }
});

// cat slider - mobile version
beforeButton.addEventListener('click', function (evt) {
  scale.classList.remove('js-is-right');
  imageBox.classList.remove('js-is-after');
})

afterButton.addEventListener('click', function (evt) {
    scale.classList.add('js-is-right');
    imageBox.classList.add('js-is-after');
  });
