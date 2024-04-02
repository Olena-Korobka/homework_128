$(function(){
  var lazyLoadInstance = new LazyLoad();


})

function toggleMobileNav() {
document.body.classList.toggle('open_mobile_menu')
window.hamb_btn.classList.toggle('is-active')
}
window.hamb_btn.addEventListener('click', toggleMobileNav)
window.hamb_btn_mobile.addEventListener('click', toggleMobileNav)




    function initMap(link){
      link.remove();
      const map = L.map('map').setView([47.839185, 35.137477], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.839185, 35.137477]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup();
    }