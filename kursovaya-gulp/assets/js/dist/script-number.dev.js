"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var numberElement = document.querySelector('.number');

  function animateNumber(from, to, duration) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      var progress = Math.min(timeFraction, 1);
      var current = from + progress * (to - from);
      numberElement.textContent = Math.round(current);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  animateNumber(0, 330, 3000);
});