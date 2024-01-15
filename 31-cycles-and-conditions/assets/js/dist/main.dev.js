"use strict";

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function task1() {
  var year = prompt('Вкажіть Ваш вік - і я скажу, хто Ви)');
  var res;

  if (year < 12) {
    res = 'Ви дитина.';
  } else if (year >= 12 && year < 18) {
    res = 'Ви підліток.';
  } else if (year >= 18 && year < 60) {
    res = 'Ви дорослий.';
  } else if (year >= 60 && year < 110) {
    res = 'Ви пенсіонер.';
  } else {
    res = 'Ви ввели некоректні дані.';
  }

  alert("".concat(res));
} // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


function task2() {
  var numberSymbol = prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 9, \u0430 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0412\u0430\u043C \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B, \u044F\u043A\u0438\u0439 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u0446\u0456\u0439 \u043A\u043B\u0430\u0432\u0456\u0448\u0456.");
  var res;

  switch (numberSymbol) {
    case "1":
      res = '!';
      break;

    case "2":
      res = '@';
      break;

    case "3":
      res = '#';
      break;

    case "4":
      res = '$';
      break;

    case "5":
      res = '%';
      break;

    case "6":
      res = '^';
      break;

    case "7":
      res = '&';
      break;

    case "8":
      res = '*';
      break;

    case "9":
      res = '(';
      break;

    case "0":
      res = ')';
      break;

    default:
      res = 'Ви ввели некоректні дані.';
  }

  alert("".concat(res));
} // Підрахуй суму всіх чисел в заданому користувачем діапазоні.


function task3() {
  var n1 = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E."));
  var n2 = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E."));

  if (isNaN(n1) || isNaN(n2)) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456.");
    return;
  }

  var s = 0;
  var from = n1;
  var to = n2;

  if (n1 > n2) {
    from = n2, to = n1;
  }

  for (var i = from; i <= to; i++) {
    s += i;
  }

  alert("C\u0443\u043Ca \u0432\u0441\u0456\u0445 \u0447\u0438\u0441\u0435\u043B \u0432 \u0437\u0430\u0434\u0430\u043D\u043E\u043C\u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456 ".concat(s));
} // Запитай у користувача 2 числа і знайди найбільший спільний дільник.


function task4() {
  var number1 = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E."));
  var number2 = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E."));

  if (isNaN(number1) || isNaN(number2) || number1 == 0 || number2 == 0) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456.");
    return;
  }

  var min = number1 < number2 ? number1 : number2;
  var d = 0;

  for (var i = 1; i <= min; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      d = i;
    }
  }

  alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A ".concat(d));
} //Запитай у користувача число і виведи всі дільники цього числа.


function task5() {
  var userNumber = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E."));

  if (isNaN(userNumber) || userNumber == 0) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456.");
    return;
  }

  var result = '';

  for (var i = 1; i <= userNumber; i++) {
    if (userNumber % i == 0) {
      result += ' ' + i;
    }
  }

  alert("\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0446\u044C\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430: ".concat(result));
} //Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


function task6() {
  var numberSize5 = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u2019\u044F\u0442\u0438\u0440\u043E\u0437\u0440\u044F\u0434\u043D\u0435 \u0447\u0438\u0441\u043B\u043E."));

  if (isNaN(numberSize5) || numberSize5 <= 9999 || numberSize5 >= 100000) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456 \u0430\u0431\u043E \u043D\u0435 \u043F\u2019\u044F\u0442\u0438\u0440\u043E\u0437\u0440\u044F\u0434\u043D\u0435 \u0447\u0438\u0441\u043B\u043E.");
    return;
  }

  var number_1 = parseInt(numberSize5 / 10000);
  var number_2 = parseInt(numberSize5 / 1000) % 10;
  var number_4 = parseInt(numberSize5 / 10) % 10;
  var number_5 = parseInt(numberSize5 % 10);

  if (number_1 == number_5 || number_2 == number_4) {
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C.");
  } else {
    alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C.");
  }
} // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


function task7() {
  var shopSumm = parseFloat(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438."));
  var a = 0;

  if (isNaN(shopSumm) || shopSumm < 0) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456.");
    return;
  }

  if (shopSumm < 200) {
    res = "\u041D\u0430\u0436\u0430\u043B\u044C, \u0443 \u0412\u0430\u0441 \u043D\u0435\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438. \u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0443 \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0437\u043D\u0438\u0436\u043A\u0438 - 200 \u0433\u0440\u043D.";
  } else if (shopSumm >= 200 && shopSumm < 300) {
    a = shopSumm * 0.97;
    res = "C\u0443\u043Ca \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(a, " \u0433\u0440\u043D.");
  } else if (shopSumm >= 300 && shopSumm < 500) {
    a = shopSumm * 0.95;
    res = "C\u0443\u043Ca \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(a, " \u0433\u0440\u043D.");
  } else if (shopSumm >= 500) {
    a = shopSumm * 0.93;
    res = "C\u0443\u043Ca \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E: ".concat(a, " \u0433\u0440\u043D.");
  }

  alert("".concat(res));
} // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


function task8() {
  var positiv = 0;
  var negativ = 0;
  var zero = 0;
  var par = 0;
  var notPar = 0;
  var i = 1;

  do {
    var number = parseInt(prompt("\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C ".concat(i, " \u0447\u0438\u0441\u043Bo")));

    if (isNaN(number)) {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435 \u0447\u0438\u0441\u043Bo.");
      continue;
    }

    if (number === 0) {
      zero++;
    } else if (number > 0) {
      positiv++;
    } else {
      negativ++;
    }

    if (number !== 0) {
      if (number % 2 === 0) {
        par++;
      } else {
        notPar++;
      }
    }

    i++;
  } while (i <= 10);

  alert("\u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 - ".concat(positiv, ", \u0432\u0456\u0434\u2019\u0454\u043C\u043D\u0438\u0445 - ").concat(negativ, ", \u043D\u0443\u043B\u0456\u0432 - ").concat(zero, ", \u043F\u0430\u0440\u043D\u0438\u0445 - ").concat(par, ", \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 - ").concat(notPar, "."));
} // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


function task9() {
  var a = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Cyбота', 'Неділя'];
  var days = -1;
  var weekDays;

  do {
    days += 1;
    weekDays = days % 7;
  } while (confirm("\u0414\u0435\u043D\u044C \u0442\u0438\u0436\u043D\u044F ".concat(a[weekDays], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?")));
} // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").


function task10() {
  var min = 0;
  var max = 100;
  var midle = 0;
  var answer = 0;

  do {
    midle = parseInt((min + max) / 2);

    if (confirm("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435 ".concat(midle, "?"))) {
      min = midle;
      answer = midle + 1;
    } else {
      max = midle;
      answer = midle;
    }
  } while (max - min > 1);

  alert("\u0412\u0438 \u0437\u0430\u0433\u0430\u0434\u0430\u043B\u0438 ".concat(answer));
} // Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


var multy = '';

for (var i = 2; i <= 9; i++) {
  multy += '<ul>';

  for (var j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i*j}`)
    multy += "<li>".concat(i, " * ").concat(j, " = ").concat(i * j, " </li>");
  }

  multy += '</ul>';
}

document.getElementById('multy_table').innerHTML = multy; // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

function task12() {
  var day = parseInt(document.getElementById('day').value);
  var month = parseInt(document.getElementById('month').value);
  var year = parseInt(document.getElementById('year').value);

  if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1970) {
    alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456.");
    return;
  }

  var nDate = nextDay(day, month, year);
  document.getElementById('date_result').innerHTML = "Next date is: ".concat(nDate);
}

function leapYear(y) {
  return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : '' + n;
};

function nextDay() {
  var dayIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var monthIn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var yearIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1970;
  var dayOut = dayIn + 1,
      monthOut = monthIn,
      yearOut = yearIn;

  switch (monthIn) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (dayIn === 31) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (dayIn === 30) {
        dayOut = 1;
        monthOut = monthIn + 1;
      }

      break;

    case 2:
      if (leapYear(yearIn)) {
        if (dayIn === 29) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      } else {
        if (dayIn === 28) {
          dayOut = 1;
          monthOut = monthIn + 1;
        }
      }

      break;
  }

  if (monthOut === 13) {
    monthOut = 1;
    yearOut = yearIn + 1;
  }

  return "".concat(addZero(dayOut), " / ").concat(addZero(monthOut), " / ").concat(yearOut);
}