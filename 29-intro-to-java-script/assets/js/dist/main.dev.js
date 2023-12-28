"use strict";

var userName1 = 'Olena';
var userSerName1 = 'Korobka';
var userName2 = 'Igor';
var userSerName2 = 'Korobka';
var firstNumber = 1; //let class = Max;// коментарі  та неправильні назви змінних

/*let 12lesson = 45;
let lesson-one = 90;
let Lesson 10 = 100;
let user% = 1;*/

var usersName = prompt('Як Вас звати?');
alert('Привіт ' + usersName + '!');

function task1() {
  var userName = prompt('Як Вас звати?');
  alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(userName, "!"));
}

function task2() {
  var birdhtYear = parseInt(prompt('Введіть рік народження'));
  var currentYear = new Date().getFullYear();
  var age = currentYear - birdhtYear;
  alert("\u0412\u0430\u043C ".concat(age, "."));
}

function task3() {
  var lenghtSides = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430."));
  var sideSquare = 4;
  var perimetrSquare = lenghtSides * sideSquare;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 ".concat(perimetrSquare, "."));
}

function task4() {
  var circleSize = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0440\u0430\u0434\u0456\u0443\u0441 \u043A\u043E\u043B\u0430."));
  var areaCircle = Math.PI * Math.pow(circleSize, 2);
  var areaCircle00 = Math.round(areaCircle * 100) / 100;
  alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 ".concat(areaCircle00, "."));
}

function task5() {
  var distanceCity = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u044C \u043C\u0456\u0436 \u043C\u0456\u0441\u0442\u0430\u043C\u0438 (\u043A\u043C)."));
  var timeRoad = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0447\u0430\u0441, \u0437\u0430 \u044F\u043A\u0438\u0439 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0434\u043E\u0431\u0440\u0430\u0442\u0438\u0441\u044F (\u0433\u043E\u0434)."));
  var spead = distanceCity / timeRoad;
  alert("\u0428\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C \u0437 \u044F\u043A\u043E\u044E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0457\u0445\u0430\u0442\u0438, \u0449\u043E\u0431 \u0432\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0438 ".concat(spead, " \u043A\u043C/\u0433\u043E\u0434."));
}

function task6() {
  var moneyDollar = parseFloat(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0434\u043E\u043B\u0430\u0440\u0456\u0432, \u044F\u043A\u0456 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0443 \u0454\u0432\u0440\u043E."));
  var courseDollarToUah = 37.79;
  var courceyEuroToUah = 41.60;
  var moneyEuro = moneyDollar * courseDollarToUah / courceyEuroToUah;
  var courseMoney00 = Math.round(moneyEuro * 100) / 100;
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(courseMoney00, " \u0454\u0432\u0440\u043E."));
}