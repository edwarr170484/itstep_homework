/*Task1*/
/*Запросите у пользователя число, возведите это число во
2-ю степень и выведите на экран.*/
// let userNumber = prompt('Введите какое-нибудь число');
// let result = userNumber ** 2; // *userNumber;
// alert(`Результат вычисления ${result}`);
/*---------------------------------------------*/

/*Task2*/
/*Запросите у пользователя 2 числа и выведите среднее ариф-
метическое этих чисел.*/
// let userNumber1 = +prompt('Введите первое число'); //+ преобразует строку в число
// let userNumber2 = Number(prompt('Введите второе число'));
// let result = (userNumber1 + userNumber2) / 2; //"4" + "4"/2 = 2 ->42
// //alert(`Результат вычисления ${result}`);
// alert((userNumber1 + userNumber2) / 2);
/*---------------------------------------------*/

/*Task3*/
/*Запросите у пользователя длину стороны квадрата и вы-
ведите площадь такого квадрата.*/
// let squareLength = +prompt('Введите длину стороны квадрата');
// let result = squareLength * squareLength;
// alert(`Результат вычисления ${result}`);
//console.log(result); // Вывод: 4 (вторая с конца)
/*---------------------------------------------*/

/*Task4*/
/*Реализуйте конвертор из километров в мили (пользователь
вводит километры, программа выводит мили). 1 км = 0,621371
миль. Это значение укажите в коде как константу.*/
// const MILESINKILOMETRS = 0.621371;
// let userKilometrsNumber = Number(prompt('Введите второе число'));
// let result = (userKilometrsNumber * MILESINKILOMETRS);
// alert(`Результат вычисления ${result}`);
/*---------------------------------------------*/

/*Task5*/
/*Реализуйте калькулятор. Пользователь вводит два числа,
а программа выводит результаты действий + - * / между
этими числами.*/
// let userNumber1 = +prompt('Введите первое число');
// let userNumber2 = Number(prompt('Введите второе число'));
// //let result = (userNumber1 + userNumber2);
// let result = (userNumber1 - userNumber2);
// //let result = (userNumber1 * userNumber2);
// //let result = (userNumber1 / userNumber2);
// alert(`Результат вычисления ${result}`);
/*---------------------------------------------*/

/*Task6*/
/*Пользователь вводит значения a и b для формулы a * x + b = 0,
а программа считает и выводит значение x.*/
// let a = +prompt('Введите первое число');
// let b = +prompt('Введите второе число');
// // a * x = - b;
// if ((a === 0 ) && (b !== 0 )) {
//   alert("Уровнение не имеет решений");
// } else if ( (a === 0) && (b === 0)) {
//   x = 1;   //always true
// } else {
//   x = -b / a;
// }
// console.log(x);
/*---------------------------------------------*/

/*Task7*/
/*Запросите у пользователя текущее время (часы и минуты)
и выведите, сколько часов и минут осталось до следующего
дня.*/
// let currentTimeHours = +prompt('Введите текущее время (часы)');
// let currentTimeMinutes = +prompt('Введите текущее время (минуты)');
// let timeInMinutes = currentTimeHours * 60 + currentTimeMinutes;
// let timeToNextDay = ( 1440 - timeInMinutes);
// let timeToNextDayByHours = timeToNextDay / 60;
// console.log(timeToNextDayByHours);
/*---------------------------------------------*/

/*Task8*/
/*Запросите у пользователя трехзначное число и выведите
вторую цифру этого числа. Для решения задачи используйте
оператор % (остаток от деления).*/
// function getSecondDigit(userNumber, n){
//    userNumber = Math.abs(userNumber);   //In mathematics, abs() is a function that returns the absolute value of a number.
//     let result = 0;
//     for (let i = 1; i <= n; i++){
//         result = userNumber % 10;
//         userNumber = Math.trunc(userNumber/10);   // Integer division
//         if (userNumber === 0 && i < n){
//             return 0;
//         }
//     }
//    return result;
// }
// let userNumber = +prompt('Введите трехзначное число');
// let result = getSecondDigit(userNumber, 2);
// alert(`Результат вычисления ${result}`);
//console.log(getSecondDigit(userNumber, 2)); // Вывод: 4 (вторая с конца)
/*---------------------------------------------*/

/*Task9*/
/*Запросите у пользователя пятизначное число и переме-
стите последнюю цифру в начало (из числа 12345 должно
получиться число 51234).*/
// let userNumber = +prompt('Введите пятизначное число');
// function moveLastDigitToFirstPlace(userNumber){
//     let stringNumber = String(userNumber);
//     let LastDigit = stringNumber.slice(-1);
//     let restOfDigits = stringNumber.slice(0, -1);
//     return LastDigit + restOfDigits;
// }
// let movedStringNumber = moveLastDigitToFirstPlace(userNumber);
// console.log(movedStringNumber);
/*---------------------------------------------*/

/*Task10*/
/*Зарплата работника составляет $250 + 10% от продаж.
Запросите общую сумму продаж за месяц и посчитайте
зарплату.*/
// let totalSales = +prompt('Введите общую сумму продаж за месяц');
// let salary = 250 + (0.1 * totalSales);
// console.log(salary); 
/*---------------------------------------------*/