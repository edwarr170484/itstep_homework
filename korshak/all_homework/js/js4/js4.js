// Объект, описывающий время
let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function displayTime() {
    console.log(`Текущее время: ${time.hours}:${time.minutes}:${time.seconds}`);
}

function addSeconds(secondsToAdd) {
    time.seconds += secondsToAdd;
    
    while (time.seconds >= 60) {
        time.seconds -= 60;
        time.minutes++;
    }
    
    while (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours++;
    }
    
    if (time.hours >= 24) {
        time.hours -= 24;
    }
}

function addMinutes(minutesToAdd) {
    time.minutes += minutesToAdd;
    
    while (time.minutes >= 60) {
        time.minutes -= 60;
        time.hours++;
    }
    
    if (time.hours >= 24) {
        time.hours -= 24; 
    }
}

function addHours(hoursToAdd) {
    time.hours += hoursToAdd;
    
    if (time.hours >= 24) {
        time.hours -= 24;
    }
}

displayTime();

addSeconds(30);
displayTime();

addMinutes(45);
displayTime();

addHours(5);
displayTime();