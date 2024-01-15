"use strict";

// Напиши всі можливі варіанти створення функцій.
var sayHello1 = function sayHello1() {
  var userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = "\u041F\u0440\u0438\u0432\u0456\u0442: ".concat(userName);
};

function sayHello2() {
  var userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = "\u041F\u0440\u0438\u0432\u0456\u0442: ".concat(userName);
}

var sayHello3 = function sayHello3() {
  var userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = "\u041F\u0440\u0438\u0432\u0456\u0442: ".concat(userName);
}; // Створи функцію, яка буде виводити кількість переданих їй аргументів.


function sizeArguments() {
  var total = arguments.length;
  console.log("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0456\u0432:  ".concat(total));
} // Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.


function twoNumber(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

function forTwoNumber() {
  var first = document.getElementById('first').value;
  var second = document.getElementById('second').value;

  if (isNaN(first) || isNaN(second)) {
    document.getElementById('firstSecond').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  var result = twoNumber(first, second);
  document.getElementById('firstSecond').innerHTML = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result);
} //  Напиши функцію, яка обчислює факторіал переданого їй числа.


function factorial(n) {
  var result = 1;

  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function forFactorial() {
  var factorialN = parseInt(document.getElementById('factorialN').value);

  if (isNaN(factorialN)) {
    document.getElementById('resultFactorial').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  var result = factorial(factorialN);
  document.getElementById('resultFactorial').innerHTML = "\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B: ".concat(result);
} // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.


function threeNumbers(a, b, c) {
  return a * 100 + b * 10 + c;
}

function forThreeNumbers() {
  var one = parseInt(document.getElementById('one').value);
  var two = parseInt(document.getElementById('two').value);
  var three = parseInt(document.getElementById('three').value);

  if (isNaN(one) || isNaN(two) || isNaN(three) || one < 0 || one > 9 || two < 0 || two > 9 || three < 0 || three > 9) {
    document.getElementById('oneTwoThree').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  var resultthreeNumbers = threeNumbers(one, two, three);
  document.getElementById('oneTwoThree').innerHTML = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E: ".concat(resultthreeNumbers);
} // Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function square(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
}

function forSquare() {
  var one = parseInt(document.getElementById('firstA').value);
  var two = parseInt(document.getElementById('secondB').value);
  var result;

  if (isNaN(one) & isNaN(two)) {
    document.getElementById('square').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  if (!isNaN(one) && !isNaN(two)) {
    result = square(one, two);
  } else if (!isNaN(one) && isNaN(two)) {
    result = square(one);
  }

  document.getElementById('square').innerHTML = "\u041F\u043B\u043E\u0449\u0430 \u0444\u0456\u0433\u0443\u0440\u0438 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(result);
} // Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.


function numberPerfect(n) {
  var sum = 0;
  var remiander;

  for (var i = 1; i < n; i++) {
    remiander = n % i;

    if (remiander === 0) {
      sum += i;
    }
  }

  return n === sum;
}

function forNumberPerfect() {
  var number = parseInt(document.getElementById('numberPerfect').value);

  if (isNaN(number)) {
    document.getElementById('perfect').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  if (numberPerfect(number)) {
    document.getElementById('perfect').innerHTML = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435.";
  } else {
    document.getElementById('perfect').innerHTML = "\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u043D\u0435 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435.";
  }
} // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.


function diapason(a, b) {
  var result = ' ';

  for (var i = a; i <= b; i++) {
    if (numberPerfect(i)) {
      result += ' ' + i;
    }
  }

  return result;
}

function forDiapason() {
  var min = parseInt(document.getElementById('min').value);
  var max = parseInt(document.getElementById('max').value);

  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById('diapason').innerHTML = "\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456";
    return;
  }

  var output = diapason(min, max);
  document.getElementById('diapason').innerHTML = "\u0447\u0438\u0441\u043B\u0430 \u0437 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443, \u044F\u043A\u0456 \u0454 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0438\u043C\u0438  ".concat(output, ".");
}