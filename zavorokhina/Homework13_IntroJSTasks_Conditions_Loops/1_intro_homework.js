//Task0 (Connection)
//let message = 'Я JavaScript!';
//alert(message);
/*-----------------------------------------------*/

//Task1 (Variables)
//let admin;
//let name;
//let admin, name;
//name = 'Джон';
//admin = name;
//alert(admin);
/*-----------------------------------------------*/

//Task2(Naming)
//let planetEarthName = 'Земля';
//let currentUserOnline = {};
/*-----------------------------------------------*/

//Task3(Сonstant's name)
//const BIRTHDAY ='18.04.1982'
//const age = someCode(birthday);
/*-----------------------------------------------*/

//Task4 (Variable types)
//let name = "Ilya";
//alert( `hello ${1}` );        // hello 1
//alert( `hello ${"name"}` );   // name
//alert( `hello ${name}` );     // Ilya
/*-----------------------------------------------*/

//Task5 (Prompt, confirm & alert)
//let name = prompt ('Введите ваше имя');
//let result = confirm('Ваше имя -' + name + '?');
//alert(result);
/*-----------------------------------------------*/

//Task6 (Basic operators)
//let a = 1, b = 1;
//let c = ++a; // 2, префиксная форма возвращает новое значение
//let d = b++; // 1, постфиксная форма возвращает старое значение
//alert( a ); // 2, значение увеличено один раз
//alert( b ); // 2, значение увеличено один раз

//let a = 2;
//let x = 1 + (a *= 2); //5
//a = 4 (умножено на 2)
//x = 5 (вычислено как 1 + 4)

//"" + 1 + 0     // 10    //Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.
//"" - 1 + 0     // -1    //Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0. 
//true + false   // 1  
//6 / "3"        // 2
//"2" * "3"      // 6
//4 + 5 + "px"   // 9px
//"$" + 4 + 5    // $45
//"4" - 2        // 2
//"4px" - 2      // 2
//"  -9  " + 5   // -9 5   //Сложение со строкой превращает число 5 в строку и добавляет к строке.
//"  -9  " - 5   // -14    //Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).
//null + 1       // 1      //null становится 0 после численного преобразования.
//undefined + 1  // NaN    //undefined становится NaN после численного преобразования.
//" \t \n" - 2   // -2     //Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n",
//аналогично пустой строке, становится 0 после численного преобразования.

//let a = prompt("Первое число?", 1);
//let b = prompt("Второе число?", 2);
//alert(+a + +b); // 3
/*-----------------------------------------------*/

//Task6 (Conditional branching)
//if ("0") {            // 0-false, "0"-true
//  alert( 'Привет' );  // Выведется 'Привет'
//}

//let companyName = prompt('Какое «официальное» название JavaScript?', '');

//if (companyName == 'ECMAScript') {
//    alert('Верно!');
//} else {
//    alert('Не знаете? ECMAScript!'); // любое значение, кроме ECMAScript
//}

//let userNumber = prompt('Введите число', 1);
//let message = (userNumber > 0) ? '1' :
//  (userNumber < 0) ? '-1' : '0';
//alert( message );

//или:
//let value = prompt('Введите число', 0);
//if (value > 0) {
//  alert( 1 );
//} else if (value < 0) {
//  alert( -1 );
//} else {
//  alert( 0 );
//}

//let result;
//if (a + b < 4) {
//  result = 'Мало';
//} else {
//  result = 'Много';
//}

//let result = (a + b < 4) ? 'Мало' : 'Много';

//let message;
//if (login == 'Сотрудник') {
// message = 'Привет';
//} else if (login == 'Директор') {
//  message = 'Здравствуйте';
//} else if (login == '') {
//  message = 'Нет логина';
//} else {
//  message = '';
//}

//let message = (login == 'Сотрудник') ? 'Привет' :
//            (login == 'Директор') ? 'Здравствуйте' :
//            (login == '') ? 'Нет логина' : 
//            '';
//alert( message );
/*-----------------------------------------------*/

//Task6 (Logical operators)

//alert( null || 2 || undefined );     // 2
//alert( alert(1) || 2 || alert(3) );  // сначала 1 - undefined, затем 2 -> undefined
//alert( 1 && null && 2 );             //  null
//alert( alert(1) && alert(2) );       // 1, а затем undefined
//alert( null || 2 && 3 || 4 );        // 3 

//let value = NaN;
//value &&= 10;
//value ||= 20;
//value &&= 30;           //30
//value ||= 40;
//alert(value);           //30

//let age = 1;
//if (age >= 14 && age <= 90) {
//  alert( 'Возраст из указанного диапазона.' );
//}

//if (!(age >= 14 && age <= 90));
//или:
//if (age < 14 || age > 90);
//if (-1 || 0) alert( 'first' );             // Выполнится. Результат -1 || 0 = -1, в логическом контексте true
//if (-1 && 0) alert( 'second' );            // Не выполнится. -1 && 0 = 0,  в логическом контексте false
//if (null || -1 && 1) alert( 'third' );     // Выполнится. Оператор && имеет больший приоритет, чем ||
                                           // так что -1 && 1 выполнится раньше вычисления: null || -1 && 1  -> 
                                           //                                               null || 1  ->  1
                                      
//let login = prompt('Кто там?', '');
//if (login === 'Admin') {
//   let password = prompt('Пароль?', '');
//    if (password === 'Я главный') {
//     alert('Здравствуйте!');
//    } else if (password === '' || password === null) {
//     alert('Отменено');
//    } else {
//     alert('Неверный пароль');
//    }
// } else if (login === '' || login === null) {
//     alert('Отменено'); 
// } else {
//     alert('Я вас не знаю');
// }
/*-----------------------------------------------*/

//Loops
//Task7 loop while

//let i = 3;
//while (i) {
//  alert( i-- );      
//}

//выведет 1:
//let i = 3;
//alert(i--); // выведет 3, затем уменьшит i до 2
//alert(i--) // выведет 2, затем уменьшит i до 1
//alert(i--) // выведет 1, затем уменьшит i до 0
// все, проверка while(i) не даст выполняться циклу дальше
//--------------//

//Префиксный вариант ++i:
//let i = 0;
//while (++i < 5) alert( i ); // 1 2 3 4 

//Постфиксный вариант i++
//let i = 0;
//while (i++ < 5) alert( i ); // 1 2 3 4 5
/*-----------------------------------------------*/

//Task8 loop for
//for (let i = 2; i <= 10; i++) {
//  if ((i % 2) !== 0) continue;
//  alert(i);  // 2 4 6 8 
//}
//for (let i = 2; i <= 10; i++) {
//  if (i % 2 == 0) {
//    alert( i );  // 2 4 6 8
//  }
//}
//------------//

//for (let i = 0; i < 3; i++) {
//  alert( `number ${i}!` );
//}
//let i = 0;
//while (i < 3){
//alert( `number ${i}!` );
//    i++;
//}
//------------//

// let num;
// do {
// num = +prompt("Введите число, больше 100", 0);
// } while ((num <= 100) && num);
// if (num >= 100 && num) {
//    alert('Число ' + num + ' больше ста');
// }
//------------//

//let n = 20;
//nextNumber:
//for (let i = 2; i <= n; i++) { // Для всех i...
//  for (let j = 2; j < i; j++) { // проверить, делится ли число..
//    if (i % j == 0) continue nextNumber; // не подходит, берём следующее
//  }
//  alert( 'Число ' + i + ' - простое'); // простое число
//}
/*-----------------------------------------------*/

//Task9 Switch
//let browser = prompt('Введите название браузера', '');
//if (browser == 'Edge') {
//  alert( "You've got the Edge!" );
//} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' ||  browser == 'Opera') {
//  alert( 'Okay we support these browsers too' );
//} else {
//  alert( 'We hope that this page looks ok!' );
//}
//------------//

//const number = +prompt('Введите число между 0 и 3', '');
//switch (number) {
//  case 0:
//    alert('Вы ввели число 0');
//    break;
//  case 1:
//    alert('Вы ввели число 1');
//    break;
//  case 2:
//  case 3:
//    alert('Вы ввели число 2, а может и 3');
//    break;
//}
/*-----------------------------------------------*/