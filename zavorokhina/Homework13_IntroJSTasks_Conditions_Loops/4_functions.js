
/* Task Example */
//let degree = 2;

//function summ(a = 4, b = 10){
//    let result = (a + b) ** degree;

//    return result;
//}

//let number1 = 34;
//let number2 = 45;

//let finalResult = summ(number1, number2);
//let finalResult2 = summ(65, 78);
//let finalResult2 = summ(65);
//console.log(finalResult);
//console.log(summ(number1, number2));
//console.log(summ(number1, number2) ** degree);
//console.log(summ());
/*------------------------------------------------------*/


/* Task1 */
/* Написать функцию, которая принимает 2 числа и возвра-
щает меньшее из них. */
// let number1 = 34;
// let number2 = 45;

// function minNumber (number1, number2){

//     return (number1 < number2) ? number1 : number2;

//     //if (number1 < number2) {
//     //    return  number1;
//     //} else {
//     //    return number2;
//     //}
// }
// console.log(minNumber(3,4));
/*------------------------------------------------------*/


/* Task2 */
/* Написать функцию, которая возводит переданное число
в указанную степень. */
// let degree = 2;
// let number1 = 34;

// function raising (number1, degree){
//     let result = number1 ** degree;
//     return result;
// }
/*------------------------------------------------------*/


/* Task3 */
/* Написать функцию, которая принимает 2 числа и знак
(+ - * /), считает пример и возвращает результат. */

// function actionWithTwoNumbers(num1, num2, action){
//     let result = 0;
//     switch (action) {
//         case "+" :
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*" :
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Такая операция не поддерживается");
//     }
//     return result;
// }

// let result = actionWithTwoNumbers(6, 2,'+');
// let result2 = actionWithTwoNumbers(6, 2,'-');
// let result3 = actionWithTwoNumbers(6, 2,'*');
// let result4 = actionWithTwoNumbers(6, 2,'/');
// console.log({ result, result2, result3, result4 });
/*------------------------------------------------------*/


/* Task4 */
/* Написать функцию, которая проверяет, является ли пере-
данное ей число простым. */

// function isPrimeNumber(userNumber) {
//     let result = true;

//     for (let i = 2; i <= Math.sqrt(userNumber); i++) {
//         if (userNumber % i === 0) {
//            result = false;
//         }
//     }

//     return result;
// }

// let userNumber = 2;
// let result = isPrimeNumber(userNumber);
// console.log({ userNumber, result });

// userNumber = 6;
// let result2 = isPrimeNumber(userNumber);
// console.log({ userNumber, result2 });

// userNumber = 12;
// let result3 = isPrimeNumber(userNumber);
// console.log({ userNumber, result3 });

// userNumber = 7;
// let result4 = isPrimeNumber(userNumber);
// console.log({ userNumber, result4 });
/*------------------------------------------------------*/


/* Task5 */
/* Написать функцию, которая принимает число и выводит
таблицу умножения для этого числа. Вызовите функцию
для всех чисел от 2 до 9. */

// function getTable(num) {
//     let result = [];

//     for (let i = 1 ; i <= 9 ; i++) {
//         result.push(`${num} * ${i} = ${num * i}`);
//     }

//     return result;
// }

// for (let n = 2 ; n <= 9 ; n++) {
//     console.log({ num: n, result: getTable(n) });
// }
/*------------------------------------------------------*/


/* Task6 */
/* Написать функцию, которая реализует работу оператора %.
Функция принимает 2 параметра и возвращает остаток от
деления первого параметра на второй. В функции исполь-
зовать только + - * /, оператор % не использовать. */

// function divide(num1, num2) {
//     const main = Math.trunc(Math.abs(num1) / Math.abs(num2));
//     const multiplication = main * Math.abs(num2);
//     let remainder = Math.abs(num1) - multiplication;

//     return remainder;
// }
// console.log({ res1: 7 % 2, res2: divide(7, 2) });
// console.log({ res1: 9 % 3, res2: divide(9, 3) });
// console.log({ res1: 12 % 7, res2: divide(12, 7) });
// console.log({ res1: 12 % -7, res2: divide(12, -7) });
// console.log({ res1: 12 % 5, res2: divide(12, 5) });
/*------------------------------------------------------*/


/* Task7 */
/* Написать функцию, которая принимает от 1 до 5 чисел и
возвращает их сумму. */

// function summ(num1, num2, num3, num4, num5) {
//     let result = 0;
//     let input = [num1, num2, num3, num4, num5];

//     for (let num of input) {
//         if (num) {
//             result += num;
//         }
//     }

//     // if (num1) {
//     //     result += num1;
//     //     // result = result + num1;
//     // }
//     // if (num2) {
//     //     result += num2;
//     //     // console.log(`Сумма равна: ${result}`)
//     // }
//     // if (num3) {
//     //     result += num3;
//     //     // console.log(`Сумма равна: ${result}`)
//     // }
//     // if (num4) {
//     //     result += num4;
//     //     // console.log(`Сумма равна: ${result}`)
//     // }
//     // if (num5) {
//     //     result += num5;
//     //     // console.log(`Сумма равна: ${result}`)
//     // }

//     return result;
// }

// console.log({ result1: summ(3, 2) });
// console.log({ result2: summ(3, null) });

// console.log({ result3: summ(3, null, 4) });
// console.log({ result5: summ(3, null, 4, null, 2) });
/*------------------------------------------------------*/

/* Task8 */
/* Написать функцию, которая принимает от 1 до 5 чисел и
возвращает большее из них. */

// function maxNumber(num1, num2, num3, num4, num5) {
//     let result = 0;
//     let input = [num1, num2, num3, num4, num5];

//     for (let num of input) {
//         if (num && num > result) {
//             result = num;
//         }
//     }

//     return result;
// }

// console.log({ result1: maxNumber(1, 2) });
// console.log({ result2: maxNumber(2, 3) });

// console.log({ result3: maxNumber(3, 4, 5) });
// console.log({ result5: maxNumber(5, 6, 7) });

// let num = 2;

// if (num) {
//     console.log({ result: "num"});
// }

// if (num === false) {
//     console.log({ result: "false"});
// }

// if (num === undefined) {
//     console.log({ result: "undefined"});
// }

// if (num === 0) {
//     console.log({ result: "0"});
// }

// if (num === null) {
//     console.log({ result: "null"});
// }

// if (num === NaN) {
//     console.log({ result: "NaN"});
// }

// if (num === "") {
//     console.log({ result: "empty"});
// }
/*------------------------------------------------------*/

/* Task9 */
/* Написать функцию, которая выводит все четные или не-
четные числа, в указанном пользователем диапазоне. Какие
числа выводить, определяется третьим параметром типа
bool (true – четные, false – нечетные). */

// function isEven(min, max, even = true) {
//     let result = [];
//     for (let i = min ; i <= max ; i++) {
//         if ((i % 2 === 0 && even === true) || (i % 2 !== 0 && even === false)) {
//             result.push(i);
//         }
//     }
//     // let num = min;
//     // while (num < max) {
//     //     if (num % 2 === 0 && even === true) {
//     //         result.push(num);
//     //     } else if (num % 2 !== 0 && even === false) {
//     //         result.push(num);
//     //     }
//     //     num++;
//     //     console.log({ num, min, max, result: result.toString() });
//     // }
//     return result;
// }

// console.log({ result1: isEven(1, 6).toString() });
// console.log({ result2: isEven(2, 9).toString() });
// console.log({ result3: isEven(1, 6, false).toString() });
// console.log({ result4: isEven(2, 9, false).toString() });
/*------------------------------------------------------*/

/* Task10 */
/* Написать функцию, которая принимает дату (день, месяц,
год) и возвращает дату следующего дня в виде строки
«дд.мм.гггг». Проверку на високосный год желательно
написать отдельной функцией. */
/* TODO Как сделать без объекта date (не понятно пока) */

// function nextDay(day, month, year) {
//     let today = new Date(year, month - 1, day);
//     today.setDate(today.getDate() + 1);

//     var dd = today.getDate();
//     if (dd < 10) dd = '0' + dd;

//     var mm = today.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;

//     var yy = today.getFullYear();

//     return dd + '.' + mm + '.' + yy;
// }

// console.log({ result1: nextDay(22, 9, 2025) });
// console.log({ result1: nextDay(28, 2, 2011) });
// console.log({ result1: nextDay(28, 2, 2012) });

// function isLeapYear(year) {
//     return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
// }

// let year = 2011;
// if (isLeapYear(year)) {
//     console.log(year + " год - високосный");
// } else {
//     console.log(year + " год - не високосный");
// }
/*------------------------------------------------------*/