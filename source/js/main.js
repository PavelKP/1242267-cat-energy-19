let beforeButton = document.querySelector('.slider-block__button-before');
let afterButton = document.querySelector('.slider-block__button-after');
let scale = document.querySelector('.slider-block__scale');
let imageBox = document.querySelector('.slider-block__image-box');
let mainNav = document.querySelector('.main-nav');
let openMenuButton = document.querySelector('.page-header__open-button');
let pageHeader = document.querySelector('.page-header__logo-panel');

mainNav.style.height = "0px";
pageHeader.classList.remove("page-header__logo-panel--opened");
pageHeader.classList.add("page-header__logo-panel--closed");

openMenuButton.addEventListener('click', function(evt) {
  let mainNavItemAmount = document.querySelectorAll('.site-list__item').length;
  if (mainNav.style.height === "0px") {
    mainNav.style.height = (mainNavItemAmount * 65) + 1  + "px";
    pageHeader.classList.remove("page-header__logo-panel--closed");
    pageHeader.classList.add("page-header__logo-panel--opened");
  } else {
    mainNav.style.height = "0px";
    pageHeader.classList.remove("page-header__logo-panel--opened");
    pageHeader.classList.add("page-header__logo-panel--closed");
  }
})

beforeButton.addEventListener('click', function (evt) {
  scale.classList.remove('js-is-right');
  imageBox.classList.remove('js-is-after');
})

afterButton.addEventListener('click', function (evt) {
    scale.classList.add('js-is-right');
    imageBox.classList.add('js-is-after');
  });
