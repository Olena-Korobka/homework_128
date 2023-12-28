let userName1 = 'Olena';
let userSerName1 = 'Korobka';
let userName2 = 'Igor';
let userSerName2 = 'Korobka';
let firstNumber = 1;


//let class = Max;// коментарі  та неправильні назви змінних

/*let 12lesson = 45;
let lesson-one = 90;
let Lesson 10 = 100;
let user% = 1;*/

const usersName = prompt('Як Вас звати?') 
alert('Привіт ' +usersName  + '!')

function task1(){
    const userName = prompt('Як Вас звати?');
    alert (`Привіт, ${userName}!`)
}

function task2(){
    const birdhtYear = parseInt(prompt('Введіть рік народження'));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birdhtYear;
    alert(`Вам ${age}.`);
}

function task3(){
    const lenghtSides = parseInt(prompt(`Вкажіть довжину сторони квадрата.`));
    const sideSquare = 4;
    const perimetrSquare = lenghtSides * sideSquare;
    alert(`Периметр квадрату ${perimetrSquare}.`);
}

function task4(){
    const circleSize = parseInt(prompt(`Вкажіть радіус кола.`));  
    const areaCircle = Math.PI * Math.pow(circleSize, 2);
    const areaCircle00 = Math.round(areaCircle  * 100) / 100;
    alert(`Площа окружності ${areaCircle00}.`);
}

function task5(){
    const distanceCity = parseInt(prompt(`Вкажіть відстань між містами (км).`));  
    const timeRoad = parseInt(prompt(`Вкажіть час, за який потрібно добратися (год).`));  
    const spead = distanceCity / timeRoad;
    alert(`Швидкість з якою потрібно їхати, щоб встигнути ${spead} км/год.`)
}

function task6(){
    const moneyDollar = parseFloat(prompt(`Вкажіть суму доларів, які необхідно перевести у євро.`));
    const courseDollarToUah = 37.79;
    const courceyEuroToUah =  41.60;
    const moneyEuro = moneyDollar * courseDollarToUah / courceyEuroToUah ;
    const courseMoney00 = Math.round(moneyEuro  * 100) / 100;
    alert(`Ви можете купити ${courseMoney00} євро.`)
}