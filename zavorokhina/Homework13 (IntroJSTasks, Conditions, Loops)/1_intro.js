// Theory:
// Variables and constants:
//let message;
//let message = 'Это сообщение';
//let m1 = '123';
//let $ = '123drefe';
//let _ = '123dfrgr';
//message = 'Что-то другое';
//num = num + 10;
//alert(message);
/*-----------------------------------------------*/

//Сonstants
//значение известно сначала:
//const COLOR = '#ffffff';
//значение определяется позже:
//const color;
//color = 2+3;
/*-----------------------------------------------*/

//Naming:
//let firstSuperMessage = 'First message';
//устаревшее:
//var name = 'dhcdhsvbdh';
/*-----------------------------------------------*/

//Variable types:
//primitive:
//1 Number - числа отрицательные -Infinity, положительные -Infinity (макс. для 64 битн.компьютеров +-(2*53-1)) и NaN (вычислительная ошибка)
//let age = 40;
//alert("не число"/ 2-1) //любая мат.операция с NaN возвращает NaN, кроме NaN**0=1
//alert (1/0); //Infinity
//alert ('jfgirfjf'/2); //NaN - значение, а не тип
//alert ('363jfgirfjf4543'/2); //6.63453453

//2 BigInt
//let hugeNumber = 2243434545454n;

//3 String
//let name = 'Edgar';
//the same
//name = "Edgar";
//plus interpolation
//name =`My name is Edgar. I'm ${age} years old`;
//alert(name);

//4 Boolean
//булево значение / логическое
//let nam = true; //false

//5 null ("ничего","пусто","значение неизвестно")
//зарезервировать место для имени значение равно ничего
//let money = null;

//6 underfined ("значение не было присвоено") без значения
//let happyDay;

//7 symbol (для создания уникальных идентификаторов в объектах)
//let $;

//not primitive:
//8 object - комплексный не примитивный тип, содержит несколько разных типов, для более сложных структур данных
//let parameters = {};
//age = 'ghfuuvhdfu';
/*-----------------------------------------------*/

//Оператор typeof (возвращает тип аргумента):
// Обычный синтаксис
//typeof 5 // Выведет "number"
// Синтаксис, напоминающий вызов функции (встречается реже)
//typeof(5) // Также выведет "number"
//typeof 50 + " Квартир"; // Выведет "number Квартир"
//typeof (50 + " Квартир"); // Выведет "string"

//typeof undefined // "undefined"
//typeof 0 // "number"
//typeof 10n // "bigint"
//typeof true // "boolean"
//typeof "foo" // "string"
//typeof Symbol("id") // "symbol"
//typeof Math // "object"  (1)  //Math - special object
//typeof null // "object"  (2)  //null as object in js but it is not object
//typeof alert // "function"  (3) //all function - objects in js
/*-----------------------------------------------*/

//Alert, prompt, confirm (взаимодействие):
//alert(typeof money);
//promt - принимает два аргумента, один из поля ввода модального окна.
// Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.
//result = prompt(title, [default]-необязательный для всех браузеров кроме IE, он вставит в строку "underfined" в поле ввода);
//let test = prompt("Test", ''); // <-- для IE

// let age = promt ('Введите свой возраст', 100);
// alert(`Ваш возраст ${age} лет`);  // Ваш возраст 100 лет   //alert - вывод сообщения в модальном окне

//confirm - отображает модальное окно с вопросом и двумя кнопками Ok(true) и Отмена(false)
//let isBoss = confirm("Ты здесь главный?");
//alert( isBoss ); // true, если нажата OK

//let result = confirm('Вам уже есть 18 лет?');
//alert(result);
/*-----------------------------------------------*/