function getMaxNumber(...numbers) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    
    return maxNumber;
}

let input = prompt("Введите от 1 до 5 чисел, разделенных запятыми:");
let numbersArray = input.split(',').map(Number);

if (numbersArray.length >= 1 && numbersArray.length <= 5) {
   
    let result = getMaxNumber(...numbersArray);
    alert("Большее число: " + result);
} else {
    alert("Пожалуйста, введите от 1 до 5 чисел.");
}








function displayNumbersInRange(start, end, isEven) {
    let numbersToShow = [];

    for (let i = start; i <= end; i++) {
        
        if (isEven && i % 2 === 0) {
            numbersToShow.push(i);
        } else if (!isEven && i % 2 !== 0) {
            numbersToShow.push(i);
        }
    }

    alert("Числа в диапазоне: " + numbersToShow.join(', '));
}

let rangeStart = parseInt(prompt("Введите начало диапазона:"));
let rangeEnd = parseInt(prompt("Введите конец диапазона:"));
let showEven = confirm("Вы хотите показать четные числа?");

displayNumbersInRange(rangeStart, rangeEnd, showEven);