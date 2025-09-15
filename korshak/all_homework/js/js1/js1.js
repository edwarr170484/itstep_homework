let number = prompt("Введите трехзначное число:");

if (number.length === 3) {
    let num = parseInt(number, 10); //cтрока преобразуется в число
    let secondDigit = Math.floor((num % 100) / 10);
    
    alert("Вторая цифра числа: " + secondDigit);
} else {
    alert("Пожалуйста, введите корректное трехзначное число.");
}




let userInput = prompt("Введите пятизначное число:");

if (userInput.length === 5 && parseInt(userInput) === Number(userInput)) {

    let lastDigit = userInput[userInput.length - 1];
    let remainingDigits = userInput.slice(0, userInput.length - 1);
    let newNumber = lastDigit + remainingDigits;
    
    alert("Измененное число: " + newNumber);
} else {
    alert("Пожалуйста, введите корректное пятизначное число.");
}





let totalSales = prompt("Введите общую сумму продаж за месяц:");

if (totalSales.length > 0 && totalSales.split('.').length <= 2) {

    totalSales = parseFloat(totalSales);

    if (totalSales >= 0) {
       
        let baseSalary = 250;
        let commissionRate = 0.10;
        let salary = baseSalary + (commissionRate * totalSales);
        
        alert("Зарплата работника: $" + salary.toFixed(2));
    } else {
        alert("Пожалуйста, введите корректную сумму продаж.");
    }
} else {
    alert("Пожалуйста, введите корректную сумму продаж.");
}