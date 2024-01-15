// Напиши всі можливі варіанти створення функцій.
let sayHello1 = function () {
  const userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = (`Привіт: ${userName}`);
}

function sayHello2() {
  const userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = (`Привіт: ${userName}`);
}

const sayHello3 = () => {
  const userName = document.getElementById('name').value;
  document.getElementById('helloUser').innerHTML = (`Привіт: ${userName}`);
}

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function sizeArguments() {
  const total = arguments.length;
  console.log(`Кількість аргументів:  ${total}`);
}

// Напиши функцію, яка приймає 2 числа і повертає :
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
  const first = document.getElementById('first').value;
  const second = document.getElementById('second').value;

  if (isNaN(first) || isNaN(second)) {
    document.getElementById('firstSecond').innerHTML = (`Ви ввели некоректні дані`)
    return;
  }
  const result = twoNumber(first, second);

  document.getElementById('firstSecond').innerHTML = (`Результат: ${result}`)
}

//  Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function forFactorial() {
  const factorialN = parseInt(document.getElementById('factorialN').value);

  if (isNaN(factorialN)) {
    document.getElementById('resultFactorial').innerHTML = (`Ви ввели некоректні дані`);
    return;
  }
  const result = factorial(factorialN);
  document.getElementById('resultFactorial').innerHTML = (`Факторіал: ${result}`);
}

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function threeNumbers(a, b, c) {
  return a * 100 + b * 10 + c;
}

function forThreeNumbers() {
  const one = parseInt(document.getElementById('one').value);
  const two = parseInt(document.getElementById('two').value);
  const three = parseInt(document.getElementById('three').value);

  if (isNaN(one) || isNaN(two) || isNaN(three) || one < 0 || one > 9 || two < 0 || two > 9 || three < 0 || three > 9) {
    document.getElementById('oneTwoThree').innerHTML = (`Ви ввели некоректні дані`);
    return;
  }
  const resultthreeNumbers = threeNumbers(one, two, three)
  document.getElementById('oneTwoThree').innerHTML = (`Ваше число: ${resultthreeNumbers}`);
}

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function square(a, b = a) {
  return a * b;
}

function forSquare() {
  const one = parseInt(document.getElementById('firstA').value);
  const two = parseInt(document.getElementById('secondB').value);
  let result;

  if (isNaN(one) & isNaN(two)) {
    document.getElementById('square').innerHTML = (`Ви ввели некоректні дані`);
    return;
  }

  if (!isNaN(one) && !isNaN(two)) {
    result = square(one, two);
  } else if (!isNaN(one) && isNaN(two)) {
    result = square(one);
  }

  document.getElementById('square').innerHTML = (`Площа фігури дорівнює: ${result}`);
}

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function numberPerfect(n) {
  let sum = 0;
  let remiander;
  for (let i = 1; i < n; i++) {
    remiander = n % i;
    if (remiander === 0) {
      sum += i;
    }
  }
  return n === sum
}

function forNumberPerfect() {
  const number = parseInt(document.getElementById('numberPerfect').value);
  if (isNaN(number)) {
    document.getElementById('perfect').innerHTML = (`Ви ввели некоректні дані`);
    return;
  }

  if (numberPerfect(number)) {
    document.getElementById('perfect').innerHTML = (`Ваше число досконале.`)
  } else {
    document.getElementById('perfect').innerHTML = (`Ваше число не досконале.`)
  }
}


// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function diapason(a, b) {
  let result = ' ';
  for (let i = a; i <= b; i++) {
    if (numberPerfect(i)) {
      result += ' ' + i
    }
  }
  return result
}

function forDiapason() {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);
  
  if (isNaN(min) || isNaN(max) || min > max) {
    document.getElementById('diapason').innerHTML = (`Ви ввели некоректні дані`);
    return;
  }
  let output = diapason(min, max)
  document.getElementById('diapason').innerHTML = (`числа з діапазону, які є досконалими  ${output}.`)
}