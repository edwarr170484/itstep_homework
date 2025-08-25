/* Task_Example */
/* Task1 */
//let n = 5;
//let m = 10;
//console.log((m>n) ? m : n);

/* Task2 */
//let n = 5;
//console.log((n%5 == 0) ? "кратно 5-ти" : "не кратно 5-ти");

/* Task3 */
//let name = prompt("Напишите имя вашей планеты");
//let planetName = "Earth";
//console.log ((planetName == "Earth" || planetName == "earth")? "Привет, землянин!" : "Привет, инопланетянин!");

/* Task4 */
//let n = +prompt('Введите число больше 2');
//while(1)  - always true
//while(n < 2){
//    n = +prompt('Неверное число. Введите число больше 2');
//}
//let m = +prompt('Введите степень числа');
//console.log(`Результат равен ${n**m}`);


/*---------------------------------------------------------------------------*/
/* Задания, в которых необходимо использовать WHILE */
/*---------------------------------------------------------------------------*/
/* Task1 */
/* Вывести # столько раз, сколько указал пользователь. */
//let count = 10;
//while (count > 0){
//    console.log(`${count} - #`);
//    count--;
//}

/* Task2 */
/* Пользователь ввел число, а на экран вывелись все числа от введенного до 0. */
//let userNumber = 6;
//while (userNumber >= 0){
//    console.log (`Число - ${userNumber}`);
//    userNumber--;
//}

/* Task3 */
/* Запросить число и степень. Возвести число в указанную степень и вывести результат. */
//let n = 3; //число
//let m = 4; //степень
//let result = 1;
//let i = 1;
//while (i <= m){
//    result = result * n;
//    console.log(`Промежуточный - ${result}`)
//    i++;
//}
//console.log (`Результат - ${result}`);

/* Task4 */
/* Запросить 2 числа и найти все общие делители. */
// let firstNumber = +prompt('Введите первое число');
// let secondNumber = +prompt('Введите второе число');
// let divisors1 = [];
// let divisors2 = [];
// for (let i = 1; i <= firstNumber; i++) {
//     if (firstNumber % i === 0) {
//         divisors1.push(i);
//     }
// }
// for (let i = 1; i <= secondNumber; i++) {
//     if (secondNumber % i === 0) {
//         divisors2.push(i);
//     }
// }
// let commonDivisors = [];
// for (let divisor of divisors1) {
//     if (divisors2.includes(divisor)) {
//         commonDivisors.push(divisor);
//     }
// }
// console.log(divisors1);
// console.log(divisors2);
// console.log(`Общие делители: ${commonDivisors}`);

/* Task5 */
/* Посчитать факториал введенного пользователем числа. */
//let num = 5;
//let i = 1;
//let result = 1;
//while(i <= num){
//    result = result * i;
//    i++;
//}
//console.log(`Факториал числа ${num} равен ${result}`);

/*---------------------------------------------------------------------------*/
/* Задания, в которых необходимо использовать DO WHILE. */
/*---------------------------------------------------------------------------*/
/* Task_Example */
//выполнится минимум 1 раз
//num = 45;
//do{
//    result = +prompt("Я загадал число, отгадай его!")
//} while(result != num);
//console.log (`Вы угадали. Загаданное число - ${num}!`);

/* Цикл for для случаев, когда нужно повторить цикл определенное кол-во раз */
//for(j = 1; j <= 10; j+=2){
//    console.log(j);
//}

/* Task1 */
/* Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.*/
// var result = 2 + 2 * 2;
// varче userResult;
// var lastCheck;
// do {
//     var message = lastCheck === undefined ? "Решите задачку 2 + 2 * 2 = ?" : "Ответ неверный, попробуйте еще раз. 2 + 2 * 2 = ?";
//     console.log({lastCheck});
//     userResult = +prompt(message);
//     lastCheck = userResult === result;
// } while (userResult != result)
// alert(`Поздравляю! Ответ верный )`);

/* Task2 */
/* Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели. */
// let num = 1000;
// do {
//    num = num / 2;
//   }
// while
// (num >= 50);
// console.log (` Число - ${num}`);

/*---------------------------------------------------------------------------*/
//Задания, в которых необходимо использовать FOR.
/*---------------------------------------------------------------------------*/
/* Task1 */
/* Вывести все числа от 1 до 100, которые кратные указанному
пользователем числу. */
//  let start = 1;
//  let end = 100;
//  let divisibleNumber = 3;
// for (let i = start; i <= end; i++) {
//   if(i % divisibleNumber === 0) {
//    console.log(`Элемент - ${i} / ${divisibleNumber} = ${i / divisibleNumber}`);
//   }
// }

/* Task2 */
/* Вывести каждый 4-й элемент из указанного пользователем диапазона.
Пользователь указывает минимальное и максимальное значения диапазона. */
// let start = +prompt('Введите первое число');
// let end = +prompt('Введите второе число');
// for (let i = start; i <= end; i += 4) {
//   console.log(`Элемент - ${i}`);
// }
/*
/* используя while */
/*
while(start <= end){
    console.log(start);
    start +=4;
}
*/

/* Task3 */
/* Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу. */
// let userNumber = +prompt('Введите число');
// for (let i = 2; i <= Math.sqrt(userNumber); i++) {
//     if (userNumber % i === 0) {
//         alert(`Число ${userNumber} не является простым`)
//     }
// }
// alert(`Число ${userNumber} является простым`)