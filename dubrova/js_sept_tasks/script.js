// 1.1

class Car {
  constructor(company, model, year, speed) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }
}

const mercedes = new Car('Mercedes', 'YN-4000', 1985, 150);

function carInfo(obj) {
  console.log(`The company ${obj.company} released a model ${obj.model} in ${obj.year}, has a speed of ${obj.speed} km/h`);
}

function carsTime(obj, distance) {
  let time = distance / obj.speed;
  let relax = Math.floor(time / 4);
  console.log(`${(time + relax).toFixed(2)} hours`);
}

carInfo(mercedes);
carsTime(mercedes, 1500);

// 1.2

class Fraction {
  constructor(num, denom) {
    this.num = num;
    this.denom = denom;
  }
}

const fr1 = new Fraction(2, 6);
const fr2 = new Fraction(1, 5);

function add(obj1, obj2) {
  console.log((obj1.num / obj1.denom + obj2.num / obj2.denom).toFixed(2));
}

function sub(obj1, obj2) {
  console.log((obj1.num / obj1.denom - obj2.num / obj2.denom).toFixed(2));
}

function mult(obj1, obj2) {
  console.log(((obj1.num / obj1.denom) * (obj2.num / obj2.denom)).toFixed(2));
}

function div(obj1, obj2) {
  console.log(((obj1.num / obj1.denom) / (obj2.num / obj2.denom)).toFixed(2));
}

function reduction(obj) {
  if (obj.num < obj.denom) {
    for (let i = obj.denom; i > 1; i--) {
      if (obj.num % i == 0 && obj.denom % i == 0) {
        console.log(`${obj.num / i} / ${obj.denom / i}`);
      }
    }
  }

  if (obj.num > obj.denom) {
    for (let i = obj.num; i > 1; i--) {
      if (obj.num % i == 0 && obj.denom % i == 0) {
        console.log(`${obj.num / i} / ${obj.denom / i}`);
      }
    }
  }
}

add(fr1, fr2);
sub(fr1, fr2);
mult(fr1, fr2);
div(fr1, fr2);
reduction(fr1);

// 1.3

class Time {
  constructor(hour, min, sec) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
  }
}

const time = new Time(15, 25, 25);

function thisTime(obj) {
  console.log(`${obj.hour}:${obj.min}:${obj.sec}`);
}

function newTimeSec(obj, s) {
  let res = obj.sec + s;
  if (res > 59) {
    let rem = res % 60;
    let priv = Math.floor(res / 60);
    console.log(`${obj.hour}:${obj.min + priv}:${rem}`);
  }
  if (res <= 59) {
    console.log(`${obj.hour}:${obj.min}:${obj.sec + s}`);
  }
}

function newTimeMin(obj, m) {
  let res = obj.min + m;
  if (res > 59) {
    let rem = res % 60;
    let priv = Math.floor(res / 60);
    console.log(`${obj.hour + priv}:${rem}:${obj.sec}`);
  }
  if (res <= 59) {
    console.log(`${obj.hour}:${obj.min + m}:${obj.sec}`);
  }
}

function newTimeHour(obj, h) {
  let res = obj.hour + h;
  if (res > 23) {
    let rem = res % 24;
    console.log(`${rem}:${obj.min}:${obj.sec}`);
  }
  if (res <= 23) {
    console.log(`${obj.hour + h}:${obj.min}:${obj.sec}`);
  }
}

thisTime(time);
newTimeSec(time, 42);
newTimeMin(time, 135);
newTimeHour(time, 22);

// 2.1

