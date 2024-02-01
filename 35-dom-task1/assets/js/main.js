// Створити сторінку, що показує нумерований список пісень
const playList = [

  'LED ZEPPELIN - STAIRWAY TO HEAVEN',
  'QUEEN - BOHEMIAN RHAPSODY',
  'LYNYRD SKYNYRD - FREE BIRD',
  'DEEP PURPLE - SMOKE ON THE WATER',
  'JIMI HENDRIX - ALL ALONG THE WATCHTOWER',
  'AC/DC - BACK IN BLACK',
  'QUEEN - WE WILL ROCK YOU',
  'METALLICA - ENTER SANDMAN'
];

const root = document.createElement('div');
root.id = 'root';
root.className = 'foo bar'

const ol = document.createElement('ol')

const liMaster = document.createElement('li')
liMaster.classList.add('playList-item')



playList.forEach((item) => {
  const li = liMaster.cloneNode()
  li.innerText = item;
  ol.append(li)
})


root.append(ol)

document.body.prepend(root)