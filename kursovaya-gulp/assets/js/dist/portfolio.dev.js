"use strict";

$(function () {
  new WOW().init();
  var lazyLoadInstance = new LazyLoad();
});

function toggleMobileNav() {
  document.body.classList.toggle('open_mobile_menu');
  window.hamb_btn.classList.toggle('is-active');
}

window.hamb_btn.addEventListener('click', toggleMobileNav);
window.hamb_btn_mobile.addEventListener('click', toggleMobileNav);