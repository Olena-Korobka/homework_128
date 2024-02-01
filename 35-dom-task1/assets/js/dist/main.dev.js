"use strict";

// Створити сторінку, що показує нумерований список пісень
var playList = ['LED ZEPPELIN - STAIRWAY TO HEAVEN', 'QUEEN - BOHEMIAN RHAPSODY', 'LYNYRD SKYNYRD - FREE BIRD', 'DEEP PURPLE - SMOKE ON THE WATER', 'JIMI HENDRIX - ALL ALONG THE WATCHTOWER', 'AC/DC - BACK IN BLACK', 'QUEEN - WE WILL ROCK YOU', 'METALLICA - ENTER SANDMAN'];
var root = document.createElement('div');
root.id = 'root';
root.className = 'foo bar';
var ol = document.createElement('ol');
var liMaster = document.createElement('li');
liMaster.classList.add('playList-item');
playList.forEach(function (item) {
  var li = liMaster.cloneNode();
  li.innerText = item;
  ol.append(li);
});
root.append(ol);
document.body.prepend(root);