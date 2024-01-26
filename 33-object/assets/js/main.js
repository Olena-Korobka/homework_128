// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

const car = {
  Brand: 'Volkswagen',
  Model: 'Jetta',
  Year: '2019',
  Color: 'Gray',
  IsNew: false,
  Using: 8.5,
  Automat: true,
  FuelCapacity: 60,
  MaxSpeed: 280,

  Drivers: ["Igor"],

  showInfo: function () {
    let rez = "<ul>";
    for (let key in this) {
      if (typeof (this[key]) !== "function") {
        rez += `<li><b>${key}:</b> ${this[key]}</li>`;
      }
    }
    rez += "</ul>";
    document.getElementById('forCar').innerHTML = rez
  },
  // імя водія
  userNameDriver: function () {

    const name = document.getElementById('nameDriver').value;
    this.Drivers.push(name);
    this.showInfo();
  },

  // чиста для заправок
  getFuelStop: function (roadSize) {
    const fuel = roadSize / 100 * this.Using;
    return Math.ceil(fuel / this.FuelCapacity)
  },

  getTime: function () {
    const speed = parseInt(document.getElementById('spead').value);
    const roadSize = parseInt(document.getElementById('roadSize').value);
    const fuelStop = this.getFuelStop(roadSize);

    if (isNaN(roadSize) || isNaN(speed)) {
      document.getElementById('resultCar').innerHTML = (`Некоректні дані`)
      return
    }
    const hours = this.getHours(speed, roadSize)
    document.getElementById('resultCar').innerHTML = (`Кількість заправок ${fuelStop}, час у дорозі з відпочинком ${hours} годин`)
  },
  //час у дорозі
  getHours: function (speed, roadSize) {
    const timeRoad = roadSize / speed
    const timeStop = Math.floor(timeRoad / 4)
    return Math.floor(timeRoad) + timeStop
  },
}

car.showInfo();

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  addSeconds: function (seconds) {
    const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  },

  displayTime: function () {
    document.getElementById('displayTime').innerHTML = (`Отриманий час  ${this.hours}:${this.minutes}:${this.seconds}`)
  },

  userHours: function () {
    const getUserHouse = parseInt(document.getElementById('hours').value);
    this.addSeconds(getUserHouse * 3600)
    this.displayTime()
  },

  userMinutes: function () {
    const getUserMinutes = parseInt(document.getElementById('minutes').value);
    this.addSeconds(getUserMinutes * 60);
    this.displayTime();

     },
     userSeconds: function () {
      const getUserSeconds = parseInt(document.getElementById('seconds').value);
      this.addSeconds(getUserSeconds);
      this.displayTime();
  
       },
}
time.displayTime()