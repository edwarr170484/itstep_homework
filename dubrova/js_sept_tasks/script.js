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

class Figure {
  constructor(aX, aY, bX, bY) {
    this.aX = aX;
    this.aY = aY;
    this.bX = bX;
    this.bY = bY;
  }
}

const rectangle = new Figure(1, 4, 5, 2);

function coords(obj) {
  return `Rectangle coordinates: A(${obj.aX}, ${obj.aY}) and B(${obj.bX}, ${obj.bY})`;
}

function width(obj) {
  let result = 0
  if (obj.aX <= 0 && obj.bX <= 0) {
    result = Math.abs(obj.bX - obj.aX);
  } else if (obj.aX < 0 && obj.bX >= 0) {
    result = Math.abs(obj.aX) + obj.bX;
  } else {
    result = obj.bX - obj.aX;
  }
  return result;
}

function height(obj) {
  let result = 0
  if (obj.aY <= 0 && obj.bY <= 0) {
    result = Math.abs(obj.aY - obj.bY);
  } else if (obj.bY < 0 && obj.aY >= 0) {
    result = Math.abs(obj.bY) + obj.aY;
  } else {
    result = obj.aY - obj.bY;
  }
  return result;
}

function square(obj) {
  let res = width(obj) * height(obj);
  return res;
}

function perimeter(obj) {    
  let res = (width(obj) + height(obj)) * 2;
  return res;
}

function changeWidth(obj, change) {
  let res = width(obj) + change;
  return res;
}

function changeHeight(obj, change) {
  let res = height(obj) + change;
  return res;
}

function changeWidthAndHeight(obj, changeX, changeY) {
  let res1 = changeWidth(obj, changeX);
  let res2 = changeHeight(obj, changeY);
  return `Width = ${res1}, height = ${res2}`;
}

function moveX(obj, move) {
  let res1 = obj.aX + move;
  let res2 = obj.bX + move;
  return `Moving X: new coordinates - A(${res1},${obj.aY}) and B(${res2},${obj.bY})`
}

function moveY(obj, move) {
  let res1 = obj.aY + move;
  let res2 = obj.bY + move;
  return `Moving Y: new coordinates - A(${obj.aX},${res1}) and B(${obj.bY},${res2})`;
}

function moveXY(obj, moveX, moveY) {
  let res1 = obj.aX + moveX;
  let res2 = obj.bX + moveX;
  let res3 = obj.aY + moveY;
  let res4 = obj.bY + moveY;
  return `Moving X and Y: new coordinates - A(${res1},${res3}) and B(${res2},${res4})`;
}

function dotInFigure(obj, x, y) {
  if (obj.bX - x > 0 && obj.aY - y > 0 && obj.aX < x && obj.bY < y) {
    return `Yes! Dot in rectangle`;
  } else {
    return `Noo!! Dot is not in rectangle`;
  }
}


console.log(coords(rectangle));
console.log(`Width = ${width(rectangle)}`);
console.log(`Height = ${height(rectangle)}`);
console.log(`Square = ${square(rectangle)}`);
console.log(`Perimeter = ${perimeter(rectangle)}`);
console.log(`Changing of width = ${changeWidth(rectangle, 4)}`);
console.log(`Changing of height = ${changeHeight(rectangle, -1)}`);
console.log(`Changing of width and height: ${changeWidthAndHeight(rectangle, -3, 2)}`)
console.log(moveX(rectangle, 5));
console.log(moveY(rectangle, -5));
console.log(moveXY(rectangle, 6, -1));
console.log(dotInFigure(rectangle, 3, 3));
console.log(dotInFigure(rectangle, 7, 3));
