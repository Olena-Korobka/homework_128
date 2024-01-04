
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

function task1(){
  const number1 = 0.1;
  const number2 = 0.2;
  const sum = number1 + number2;
    alert (`Сума  0,1 і 0,2 дорівнює ${ + sum.toFixed(2)}.`);
}

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.



function task2(){
   const row1 = parseInt('1');
   const num2 = 2;
   const sumRowAndNum = row1 + num2;
   alert (`Додавання рядка "1" і цифри 2 дорівнює ${sumRowAndNum}`)

}


// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.


function task3(){
    const fleshSizeGb = parseInt(prompt(`Вкажіть обсяг флешки в Гб.`));
    const  fleshSizeMb = fleshSizeGb * 1024;
    const numberOfFiles = Math.floor(fleshSizeMb / 820);
    alert(` ${numberOfFiles} файлів розміром в 820 Мб поміщається на флешку.`);
}

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.


function task4(){
    const sumMoney = parseFloat(prompt(`Вкажіть суму грошей в гаманці.`));  
    const priceChoco = parseFloat (prompt(`Вкажіть ціну однієї шоколадки`));
    const sizeChoco = Math.floor ( sumMoney / priceChoco)
    const change = sumMoney % priceChoco
    alert(`Ви можете купити ${sizeChoco} шоколадок, Ваша решта - ${change.toFixed(2)} грн.`);
}

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

function task5(){
    const userNumber = parseInt(prompt(`Вкажіть тризначне число`));  
    const userHundreds = parseInt(userNumber / 100);
    const userTens = parseInt (userNumber / 10) % 10;
    const userUnits = parseInt (userNumber % 10);
    const userNumberBack = String(userUnits) + String(userTens) + String(userHundreds);

    alert(`Ваше тризначне число задом наперед ${userNumberBack} `);
}

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

function task6(){
    const sumMoney  = parseFloat (prompt(`Вкажіть суму вкладу в банк на 2 місяці`));
    const percentFromTwoMonth = (5 * 2) / 12;
    const sumPercentFromTwoMonth = (sumMoney * percentFromTwoMonth) / 100

alert (`Cумa нарахованих відсотків зa 2 місяці ${sumPercentFromTwoMonth .toFixed(2)} грн.` )

}