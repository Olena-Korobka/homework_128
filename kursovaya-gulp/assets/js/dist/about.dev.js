"use strict";

$(function () {
  new WOW().init();
  var lazyLoadInstance = new LazyLoad();
  $('#bxslider_top').bxSlider({
    controls: false,
    auto: true,
    pause: 3000
  });
});

function toggleMobileNav() {
  document.body.classList.toggle('open_mobile_menu');
  window.hamb_btn.classList.toggle('is-active');
}

window.hamb_btn.addEventListener('click', toggleMobileNav);
window.hamb_btn_mobile.addEventListener('click', toggleMobileNav);
$(function () {
  $(".accordion__title").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.accordion__arrow', this).toggleClass('accordion__rotate');
  });
});
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(function (response) {
  return response.json();
}).then(function (data) {
  // Находим нужную информацию о курсе USD к UAH
  var usdToUah = data.find(function (item) {
    return item.cc === 'USD' && item.r030 === 840;
  }); // Находим нужную информацию о курсе EUR к UAH

  var eurToUah = data.find(function (item) {
    return item.cc === 'EUR' && item.r030 === 978;
  }); // Выводим полученные курсы на странице

  var usdRateElement = document.getElementById('usdRate');
  usdRateElement.textContent = "USD - UAH: ".concat(usdToUah.rate);
  var eurRateElement = document.getElementById('eurRate');
  eurRateElement.textContent = " EUR - UAH: ".concat(eurToUah.rate);
})["catch"](function (error) {
  return console.error('Ошибка:', error);
});