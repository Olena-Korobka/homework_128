"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
var car = {
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
  showInfo: function showInfo() {
    var rez = "<ul>";

    for (var key in this) {
      if (typeof this[key] !== "function") {
        rez += "<li><b>".concat(key, ":</b> ").concat(this[key], "</li>");
      }
    }

    rez += "</ul>";
    document.getElementById('forCar').innerHTML = rez;
  },
  // імя водія
  userNameDriver: function userNameDriver() {
    var name = document.getElementById('nameDriver').value;
    this.Drivers.push(name);
    this.showInfo();
  },
  // чиста для заправок
  getFuelStop: function getFuelStop(roadSize) {
    var fuel = roadSize / 100 * this.Using;
    return Math.ceil(fuel / this.FuelCapacity);
  },
  getTime: function getTime() {
    var speed = parseInt(document.getElementById('spead').value);
    var roadSize = parseInt(document.getElementById('roadSize').value);
    var fuelStop = this.getFuelStop(roadSize);

    if (isNaN(roadSize) || isNaN(speed)) {
      document.getElementById('resultCar').innerHTML = "\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
      return;
    }

    var hours = this.getHours(speed, roadSize);
    document.getElementById('resultCar').innerHTML = "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0437\u0430\u043F\u0440\u0430\u0432\u043E\u043A ".concat(fuelStop, ", \u0447\u0430\u0441 \u0443 \u0434\u043E\u0440\u043E\u0437\u0456 \u0437 \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u043D\u043A\u043E\u043C ").concat(hours, " \u0433\u043E\u0434\u0438\u043D");
  },
  //час у дорозі
  getHours: function getHours(speed, roadSize) {
    var timeRoad = roadSize / speed;
    var timeStop = Math.floor(timeRoad / 4);
    return Math.floor(timeRoad) + timeStop;
  }
};
car.showInfo(); // Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  addSeconds: function addSeconds(seconds) {
    var totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + seconds;
    this.hours = Math.floor(totalSeconds / 3600) % 24;
    this.minutes = Math.floor(totalSeconds % 3600 / 60);
    this.seconds = totalSeconds % 60;
  },
  displayTime: function displayTime() {
    document.getElementById('displayTime').innerHTML = "\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u0438\u0439 \u0447\u0430\u0441  ".concat(this.hours, ":").concat(this.minutes, ":").concat(this.seconds);
  },
  userHours: function userHours() {
    var getUserHouse = parseInt(document.getElementById('hours').value);
    this.addSeconds(getUserHouse * 3600);
    this.displayTime();
  },
  userMinutes: function userMinutes() {
    var getUserMinutes = parseInt(document.getElementById('minutes').value);
    this.addSeconds(getUserMinutes * 60);
    this.displayTime();
  },
  userSeconds: function userSeconds() {
    var getUserSeconds = parseInt(document.getElementById('seconds').value);
    this.addSeconds(getUserSeconds);
    this.displayTime();
  }
};
time.displayTime();