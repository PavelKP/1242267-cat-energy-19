let beforeButton = document.querySelector('.slider-block__button-before');
let afterButton = document.querySelector('.slider-block__button-after');
let scale = document.querySelector('.slider-block__scale');
let imageBox = document.querySelector('.slider-block__image-box');

beforeButton.addEventListener('click', function (evt) {
  scale.classList.remove('js-is-right');
  imageBox.classList.remove('js-is-after');
})

afterButton.addEventListener('click', function (evt) {
    scale.classList.add('js-is-right');
    imageBox.classList.add('js-is-after');
  });
