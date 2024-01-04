"use strict";

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
function task1() {
  var number1 = 0.1;
  var number2 = 0.2;
  var sum = number1 + number2;
  alert("\u0421\u0443\u043C\u0430  0,1 \u0456 0,2 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(+sum.toFixed(2), "."));
} // Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.


function task2() {
  var row1 = parseInt('1');
  var num2 = 2;
  var sumRowAndNum = row1 + num2;
  alert("\u0414\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F \u0440\u044F\u0434\u043A\u0430 \"1\" \u0456 \u0446\u0438\u0444\u0440\u0438 2 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(sumRowAndNum));
} // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


function task3() {
  var fleshSizeGb = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043E\u0431\u0441\u044F\u0433 \u0444\u043B\u0435\u0448\u043A\u0438 \u0432 \u0413\u0431."));
  var fleshSizeMb = fleshSizeGb * 1024;
  var numberOfFiles = Math.floor(fleshSizeMb / 820);
  alert(" ".concat(numberOfFiles, " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0432 820 \u041C\u0431 \u043F\u043E\u043C\u0456\u0449\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443."));
} // Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


function task4() {
  var sumMoney = parseFloat(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435\u0439 \u0432 \u0433\u0430\u043C\u0430\u043D\u0446\u0456."));
  var priceChoco = parseFloat(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0446\u0456\u043D\u0443 \u043E\u0434\u043D\u0456\u0454\u0457 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0438"));
  var sizeChoco = Math.floor(sumMoney / priceChoco);
  var change = sumMoney % priceChoco;
  alert("\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ".concat(sizeChoco, " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u0412\u0430\u0448\u0430 \u0440\u0435\u0448\u0442\u0430 - ").concat(change.toFixed(2), " \u0433\u0440\u043D."));
} // Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).


function task5() {
  var userNumber = parseInt(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0442\u0440\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E"));
  var userHundreds = parseInt(userNumber / 100);
  var userTens = parseInt(userNumber / 10) % 10;
  var userUnits = parseInt(userNumber % 10);
  var userNumberBack = String(userUnits) + String(userTens) + String(userHundreds);
  alert("\u0412\u0430\u0448\u0435 \u0442\u0440\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434 ".concat(userNumberBack, " "));
} // Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.


function task6() {
  var sumMoney = parseFloat(prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0432\u043A\u043B\u0430\u0434\u0443 \u0432 \u0431\u0430\u043D\u043A \u043D\u0430 2 \u043C\u0456\u0441\u044F\u0446\u0456"));
  var percentFromTwoMonth = 5 * 2 / 12;
  var sumPercentFromTwoMonth = sumMoney * percentFromTwoMonth / 100;
  alert("C\u0443\u043Ca \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0437a 2 \u043C\u0456\u0441\u044F\u0446\u0456 ".concat(sumPercentFromTwoMonth.toFixed(2), " \u0433\u0440\u043D."));
}