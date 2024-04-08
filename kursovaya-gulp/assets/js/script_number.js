document.addEventListener("DOMContentLoaded", function() {
  var numberElement = document.getElementById('number');

  function animateNumber(element, from, to, duration) {
    var start = performance.now();

    function animate(time) {
      var timeFraction = (time - start) / duration;
      var progress = Math.min(timeFraction, 1);
      var current = from + progress * (to - from);

      element.textContent = Math.round(current);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  function handleScroll() {
    var elementPosition = numberElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      animateNumber(numberElement, 0, 332, 2000); // From 0 to 330 in 2 seconds
      numberElement.style.opacity = '1'; // Показать элемент
    }
  }

  window.addEventListener('scroll', handleScroll);
});
