"use strict";

$(function () {
  new WOW().init();
  var lazyLoadInstance = new LazyLoad();
  $('#bxslider').bxSlider({});
  $('#bxslider_top').bxSlider({
    controls: false,
    auto: true,
    pause: 3000,
    onSliderLoad: function onSliderLoad() {
      var $tgt = $('.bx-viewport');
      $tgt.css('height', '');
      $tgt.removeAttr('height');
    }
  });
});

function toggleMobileNav() {
  document.body.classList.toggle('open_mobile_menu');
  window.hamb_btn.classList.toggle('is-active');
}

window.hamb_btn.addEventListener('click', toggleMobileNav);
window.hamb_btn_mobile.addEventListener('click', toggleMobileNav);