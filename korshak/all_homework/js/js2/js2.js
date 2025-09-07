let number = prompt("Введите целое неотрицательное число:");

if (number >= 0 && Number.isInteger(+number)) {
    
    number = parseInt(number);
    
    let factorial = 1;
    let i = 1;

    while (i <= number) {
        factorial *= i;
        i++;
    }

    alert("Факториал числа " + number + " равен " + factorial);
} else {
    alert("Пожалуйста, введите корректное неотрицательное целое число.");
}








let initialValue = 1000;
let divisionCount = 0;

do {
    initialValue /= 2;
    divisionCount++;
} while (initialValue >= 50);

alert("Полученное число: " + initialValue + "\nКоличество делений: " + divisionCount);









let number2 = prompt("Введите целое положительное число:");

if (number2 > 1 && Number.isInteger(+number2)) {
    number2 = parseInt(number2);
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number2); i++) {
        if (number2 % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(number2 + " является простым числом.");
    } else {
        alert(number2 + " не является простым числом.");
    }
} else {
    alert("Пожалуйста, введите корректное положительное целое число больше 1.");
}