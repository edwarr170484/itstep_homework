/*------------------------------------------------------*/
/* Task_Example */
//let n = +prompt("Введите число");
//let m = +prompt("Введите значение степени");

/*if ( n == 0 ){
    alert("Результат операции равен 0");
}
if ( n == 1) {
    alert("Результат операции равен 1");
}
// if (n > 1) {
// let result = n ** m;
// alert(`Результат операции равен ${result}`);
// }

//if (n == 0){
//    alert("Результат операции равен 0");
//}
//else if ( n == 1){
//    alert("Результат операции равен 1");
//} else if ( n == 2) {
//    alert ("Не могу вычислить результат");
//} else {
//    let result = n ** m;
//    alert(`Результат операции равен ${result}`);
//}

/*if (n >= 0) {
    let result = n ** m;
    alert(`Результат операции равен ${result}`);

} else {
    alert('Вы ввели отрицательное число');
}*/

/*------------------------------------------------------*/
/* theory */
//alert ('1' == 1); // == -оператор с приведением типов, нестрогое сравнение  //true
//alert ('11' == 1); //false
//alert ('1' === 1); //false // === - строгое равенство

//let a = null;
//alert (a == 0);  //false
//alert (a >= 0);  //true
//alert (a <= 0);  //true


//if ( n < 5) {
//    alert("Неверное число, число должно попадать в диапазон от 5 до 10");
//}
//if ( n > 10) {
//    alert("Неверное число, число должно попадать в диапазон от 5 до 10");
//}

//let a = true;
//let b = false;
//alert(!a); //false

//if (n >= 5 && n <= 10 && n != 4) {
//    if (m <= 2 || m >= 4) {
//        let result = n ** m;
//        alert(`Результат операции равен ${result}`);
//    }
//}


/*------------------------------------------------------*/
/* theory */
//let a;
//if (typeof a != 'underfined'){            // проверка на определенность значения или на null
//    alert("Ура! Неопределенности нет.");
//}

//let a;
//if (typeof a != null){            // проверка на определенность значения или на null
//    alert("Ура! Неопределенности нет.");
//}

/*------------------------------------------------------*/
/* theory */
//let b = !a;  //любое число конвертируется в true, даже отрицательное
//console.log(b);

//let companyName = prompt('Какое "официальное" название JavaScript?');
//if (companyName == 'EcmaScript'){
//    console.log('Верно!')
//} else {
//    console.log("Не знаете? 'EcmaScript'!");
//}

//let userNumber = prompt('Введите число');
//if (userNumber  == 0) {
//    console.log (0);
//} else if (userNumber > 0){
//    console.log(1);
//} else {
//    console.log(-1);
//}

//let mm = 5;
//if (mm > 0){
//    console.log("Число положительное");
//} else {
//    console.log('Число отрицательное');
//}

/*------------------------------------------------------*/
/* Task 1 */
// console.log('Task 1');
//let userNumber = prompt('Введите число');
//if (userNumber  == 0) {
//    console.log ('Число равно 0');
//} else if (userNumber > 0){
//    console.log("Число положительное");
//} else {
//    console.log("Число отрицательное");
//}

/*------------------------------------------------------*/
/* Task 2 */
//let age = 34;
// if (age > 0 && age <= 120) {
//    console.log('Возраст верный');
//} else {
//    console.log ('Возраст неверный');
//}

//if (age <= 0 || age > 120) {
//    console.log('Возраст неверный');
//} else {
//    console.log('Ваш возраст нас устраивает');
//}

/*------------------------------------------------------*/
/* Task 3 */
//let nm = -56;
//if (nm < 0){
//    nm = - nm;
//}
//console.log(nm);

/*------------------------------------------------------*/
/* Task 4 */
//console.log ("Task 4");

//let a = 1;
//let b = ++a;
//console.log (b);

//a = 1;
//a = a+10;
//a = a-10;
//a +=10;
//a -=10;

//тернарный оператор
//let a = 10;
//b = ( a > 0 ) ? a : 0;

//let hours = 32;
//let minutes = 43;
//let seconds = 56;

//if((hours < 0 || hours > 24)
// || (minutes < 0 || minutes > 60 )
// || (seconds < 0 || seconds > 60)) {
//   console.log ('Данные введены неверно')
//}

/*------------------------------------------------------*/
/* Switch Case */
/* Task 5 */
//let month = 3;
// let month = "Январь";

// switch (month > '') {
//     case true:
//         console.log('Зима');
//         break;
//     case 2:
//         console.log('Февраль');
//         break;
//     case false:
//         console.log('Весна');
//         break;
//     case 4:
//         console.log('Апрель');
//         break;
//     case 5:
//         console.log('Май');
//         break;
//     case 6:
//         console.log('Июнь');
//         break;
//     case 7:
//         console.log('Июль');
//         break;
//     case 8:
//         console.log('Август');
//         break;
//     case 9:
//         console.log('Сентябрь');
//         break;
//     case 10:
//         console.log('Октябрь');
//         break;
//     case 11:
//         console.log('Ноябрь');
//         break;
//     case 12:
//         console.log('Декабрь');
//         break;
//     default:
//         console.log('Месяц не определен');
// }

/*------------------------------------------------------*/
/* Task 6 */
// let num1 = 2;
// let num2 = 3;
// let action = '*';

// switch (action){
//     case "+" :
//         console.log(num1 + num2);
//     break;
//     case "-":
//         console.log(num1 - num2);
//     break;
//     case "*" :
//         console.log(num1 * num2);
//     break;
//     case "/":
//         console.log(num1 / num2);
//     break;
//     default:
//         console.log ("Такая операция не поддерживается");
// }