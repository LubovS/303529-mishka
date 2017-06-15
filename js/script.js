var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggler');
var popup = document.querySelector('.pop-up-order');
var btnpurchase = document.querySelector('.product-week__btn-purchase');
var overlay = document.querySelector('.overlay');
var products = document.querySelectorAll('.products__btn-purchase');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for (var i = 0; i < products.length; i++) {
  products[i].addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('pop-up-order--open');
    overlay.classList.add("overlay--show");
  });
}

overlay.addEventListener('click', function() {
  popup.classList.remove("pop-up-order--open"), overlay.classList.remove("overlay--show")
});

window.addEventListener("keydown", function() {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("pop-up-order--open")) {
      popup.classList.remove("pop-up-order--open"), overlay.classList.remove("overlay--show");
    }
  }
});

btnpurchase.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('pop-up-order--open');
  overlay.classList.add("overlay--show");
});

overlay.addEventListener('click', function() {
  popup.classList.remove("pop-up-order--open"), overlay.classList.remove("overlay--show")
});

window.addEventListener("keydown", function() {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("pop-up-order--open")) {
      popup.classList.remove("pop-up-order--open"), overlay.classList.remove("overlay--show");
    }
  }
});
