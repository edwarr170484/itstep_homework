/* Task 1 */
console.log ('Task 1');
/** Создать объект, описывающий автомобиль (производитель,
модель, год выпуска, средняя скорость), и следующие функции
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для пре-
одоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необхо-
димо делать перерыв на 1 час */

let auto1 = {
    name: "Audi",
    model: "TT_2_8J",
    year: 2006,
    avSpeed: 60,  //например, по городу
    //maxSpeed: 240, 
};

let auto2 = {
    name: "Mazda",
    model: "626_2(GC)",
    year: 1987,
    avSpeed: 60,
    //maxSpeed: 171,
};

class Car {
    constructor(name, model, year, avSpeed) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.avSpeed = avSpeed;
    }

    /* Функция для вывода на экран информации об автомобиле. */
    showInfo() {
        console.log(`name: ${this.name}, model: ${this.model}, year: ${this.year}, avSpeed: ${this.avSpeed}`);
    }
}

auto1 = new Car("Audi", "TT_2_8J", "2006", 60);
auto2 = new Car("Mazda", "626_2(GC)", "1987", 70);

auto1.showInfo();
auto2.showInfo();

// /**
//  * Функция для подсчета необходимого времени для пре-
// одоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необхо-
// димо делать перерыв на 1 час.
//  * 
//  * @param numbers distance, avSpeed
//  * @return number resultTime of the trip
//  */
let distance = 4172;

function getTripTime(distance, avSpeed) {
    let tripTime = distance / avSpeed;

    let restHours = tripTime / 4;
    let resultTime = tripTime + restHours;

    return resultTime;
}

console.log({ tripTime: getTripTime(4172, 60) });
console.log({ tripTime: getTripTime(4172, 70) });

// on max speed:
console.log({ tripTime: getTripTime(4172, 171) });
console.log({ tripTime: getTripTime(4172, 240) });
/* ------------------------------------------------------------------------------------ */


/* Task 2 */
console.log ('Task 2');
/** Создать объект, хранящий в себе отдельно числитель и зна-
менатель дроби, и следующие функции для работы с этим объ-
ектом.
1. Функция сложения 2-х объектов-дробей.
2. Функция вычитания 2-х объектов-дробей.
3. Функция умножения 2-х объектов-дробей.
4. Функция деления 2-х объектов-дробей.
5. Функция сокращения объекта-дроби. */

let fractionalNumber1 = {
    numerator: 12,          // числитель
    denominator: 18,        // знаменатель
}
let fractionalNumber2 = {
    numerator: 1,          // числитель
    denominator: 4,        // знаменатель
}

// /**
//  * Функция сложения 2-х объектов-дробей.
//  * 
//  * @param fractionalNumber1 object with numerator, denominator 
//  * @param fractionalNumber2 object with numerator, denominator
//  * @return object resultNumerator, resultDenominator
//  */
function additionFractionalNumbers(fractionalNumber1, fractionalNumber2) {

    let resultNumerator = 0;
    let resultDenominator = 0;

    if (fractionalNumber1.denominator === fractionalNumber2.denominator) {
        resultNumerator = (fractionalNumber1.numerator + fractionalNumber2.numerator);
        resultDenominator = fractionalNumber1.denominator;
    } else {
        commonDenominator = fractionalNumber1.denominator * fractionalNumber2.denominator;
        let numerator1 = fractionalNumber1.numerator * fractionalNumber2.denominator;
        let numerator2 = fractionalNumber2.numerator * fractionalNumber1.denominator;
        resultNumerator = numerator1 + numerator2;
        resultDenominator = commonDenominator;
    }

    return { numerator: resultNumerator, denominator: resultDenominator };
}

console.log ('Результат сложения дробей:')
console.log(additionFractionalNumbers(fractionalNumber1, fractionalNumber2));
// /* ------------------------------------------------------------------------------------ */


// /**
//  * Функция вычитания 2-х объектов-дробей.
//  * 
//  * @param fractionalNumber1 object with numerator, denominator 
//  * @param fractionalNumber2 object with numerator, denominator
//  * @return object resultNumerator, resultDenominator
//  */
function subtractionFractionalNumbers(fractionalNumber1, fractionalNumber2) {

    let resultNumerator = 0;
    let resultDenominator = 0;

   if (fractionalNumber1.denominator === fractionalNumber2.denominator) {
        resultNumerator = fractionalNumber1.numerator - fractionalNumber2.numerator;
        resultDenominator = fractionalNumber1.denominator;
    } else {
        // берем наибольший общий знаменатель
        let commonMaxDenominator = Math.max(fractionalNumber1.denominator, fractionalNumber2.denominator);
        // приводим к общему знаменателю
        if (fractionalNumber1.denominator !== commonMaxDenominator) {
            for(let i = 2 ; i <= commonMaxDenominator ; i++) {
                if(fractionalNumber1.denominator * i === fractionalNumber2.denominator) {
                    fractionalNumber1.numerator = fractionalNumber1.numerator * i;
                    fractionalNumber1.denominator = fractionalNumber2.denominator;
                }
            }
        } else {
            for(let i = 2 ; i <= commonMaxDenominator ; i++) {
                if(fractionalNumber2.denominator * i === fractionalNumber1.denominator) {
                    fractionalNumber2.numerator = fractionalNumber2.numerator * i;
                    fractionalNumber2.denominator = fractionalNumber1.denominator;
                }
            }
        }
        resultNumerator = fractionalNumber1.numerator - fractionalNumber2.numerator;
        resultDenominator = fractionalNumber1.denominator;
    }

    return { numerator: resultNumerator, denominator: resultDenominator };
}
console.log ('Результат вычитания дробей:')
fractionalNumber1 = {
    numerator: 10,          // числитель
    denominator: 11,        // знаменатель
}
fractionalNumber2 = {
    numerator: 7,          // числитель
    denominator: 11,        // знаменатель
}
fractionalNumber3 = {
    numerator: 4,          // числитель
    denominator: 5,        // знаменатель
}
fractionalNumber4 = {
    numerator: 1,          // числитель
    denominator: 10,        // знаменатель
}
console.log({fractionalNumber1, fractionalNumber2});
console.log(subtractionFractionalNumbers(fractionalNumber1, fractionalNumber2));
console.log(subtractionFractionalNumbers(fractionalNumber3, fractionalNumber4));
// /* ------------------------------------------------------------------------------------ */

// /**
//  * Функция умножения 2-х объектов-дробей.
//  * 
//  * @param fractionalNumber1 object with numerator, denominator 
//  * @param fractionalNumber2 object with numerator, denominator
//  * @return object resultNumerator, resultDenominator
//  */
function multiplicationFractionalNumbers(fractionalNumber1, fractionalNumber2) {

    let resultNumerator = 0;
    let resultDenominator = 0;

    resultNumerator = fractionalNumber1.numerator * fractionalNumber2.numerator;
    resultDenominator = fractionalNumber1.denominator * fractionalNumber2.numerator;

    return { numerator: resultNumerator, denominator: resultDenominator };
}

console.log('Результат умножения дробей:');
console.log(multiplicationFractionalNumbers(fractionalNumber1, fractionalNumber2));
// /* ------------------------------------------------------------------------------------ */


// /**
//  * Функция деления 2-х объектов-дробей.
//  * 
//  * @param fractionalNumber1 object with numerator, denominator 
//  * @param fractionalNumber2 object with numerator, denominator
//  * @return object resultNumerator, resultDenominator
//  */
function divisionFractionalNumbers(fractionalNumber1, fractionalNumber2) {

    let resultNumerator = 0;
    let resultDenominator = 0;

    resultNumerator = fractionalNumber1.numerator * fractionalNumber2.denominator;
    resultDenominator = fractionalNumber1.denominator * fractionalNumber2.numerator;

    return { numerator: resultNumerator, denominator: resultDenominator };
}

console.log ('Результат деления дробей:')
console.log(divisionFractionalNumbers(fractionalNumber1, fractionalNumber2));
// /* ------------------------------------------------------------------------------------ */


// /**
//  * Функция сокращения объекта-дроби.
//  * 
//  * @param fractionalNumber1 object with numerator, denominator 
//  * @param fractionalNumber2 object with numerator, denominator
//  * @return object resultNumerator, resultDenominator
//  */
function reductionFractionalNumbers({ numerator, denominator }) {

    let resultNumerator = numerator;
    let resultDenominator = denominator;

    let maxCommonDivisor = 0;
    let maxNumber = Math.max(numerator, denominator);

    for(let i = 2 ; i <= maxNumber ; i++) {
        if(numerator % i === 0 && denominator % i === 0) {
            maxCommonDivisor = i;
        }
    }

    // console.log({numerator, denominator, maxCommonDivisor})

   if (maxCommonDivisor) {
        resultNumerator = numerator / maxCommonDivisor;
        resultDenominator = denominator / maxCommonDivisor;
    } else {
       console.log(` Дробь ${fractionalNumber1} является несократимой`)
    }

    return { numerator: resultNumerator, denominator: resultDenominator };
    // return { numerator2: resultNumerator, denominator2: resultDenominator };
}

console.log ('Результат сокращения дробей:')
console.log(reductionFractionalNumbers(fractionalNumber1));
console.log(reductionFractionalNumbers(fractionalNumber2));
console.log(reductionFractionalNumbers({ numerator: 81, denominator: 108 }));
/* ------------------------------------------------------------------------------------ */


/* Task 3 */
console.log ('Task 3');
/** Создать объект, описывающий время (часы, минуты, секун-
ды), и следующие функции для работы с этим объектом.
1. Функция вывода времени на экран.
2. Функция изменения времени на переданное количество
секунд.
3. Функция изменения времени на переданное количество
минут.
4. Функция изменения времени на переданное количество
часов.
Учтите, что в последних 3-х функциях, при изменении одной
части времени, может измениться и другая. Например: если ко
времени «20:30:45» добавить 30 секунд, то должно получиться
«20:31:15», а не «20:30:75». */

let sleepOnSofaTime1 = {
    hours: 22,
    minutes: 30,
    seconds: 12,
};

let sleepOnSofaTime2 = {
    hours: 23,
    minutes: 40,
    seconds: 0,
};

class sleepOnSofaTime {
    constructor(hours, minutes, seconds) {
        this.years = 0;
        this.months = 0;
        this.days = 0;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    /* Функция для вывода на экран информации о времени сна на диване. */
    showInfo() {
        console.log(`years: ${this.years}, months: ${this.months}, days: ${this.days}, hours: ${this.hours}, minutes: ${this.minutes}, seconds: ${this.seconds}`);
    }

    // Функция изменения времени на переданное количество секунд.
    addTime(hours, minutes, seconds) {
        this.hours += hours;
        this.minutes += minutes;
        this.seconds += seconds;

        if (this.seconds > 60) {
            let newMinutes = Math.floor(this.seconds / 60);
            let secondsLeft = this.seconds % 60;
            this.minutes += newMinutes;
            this.seconds = secondsLeft;
        }

        if (this.minutes > 60) {
            let newHours = Math.floor(this.minutes / 60);
            let minutesLeft = this.minutes % 60;
            this.hours += newHours;
            this.minutes = minutesLeft;
        }
        
        if (this.hours > 24) {
            let newDays = Math.floor(this.hours / 24);
            let hoursLeft = this.hours % 24;
            this.days += newDays;
            this.hours = hoursLeft;
        }

        if (this.days > 31) {
            let newMonths = Math.floor(this.days / 31);
            let daysLeft = this.days % 31;
            this.months += newMonths;
            this.days = daysLeft;
        }

        if (this.months > 12) {
            let newYears = Math.floor(this.months / 12);
            let monthsLeft = this.months % 12;
            this.years += newYears;
            this.months = monthsLeft;
        }
    }
}

sleepOnSofaTime1 = new sleepOnSofaTime(2, 30, 15);
sleepOnSofaTime1.showInfo();
sleepOnSofaTime1.addTime(24, 45, 65);
sleepOnSofaTime1.showInfo();

sleepOnSofaTime2 = new sleepOnSofaTime(3, 50, 15);
sleepOnSofaTime2.showInfo();
sleepOnSofaTime2.addTime(13084, 45, 65);
sleepOnSofaTime2.showInfo();