// 1
function lessNum(a, b) {
  if(a < b) return a;
  else return b;
}
console.log(lessNum(13, 8));

console.log(' ');

// 2
function stepenB(a, b) {
  return a ** b;
}
console.log(stepenB(3, 4));

console.log(' ');

// 3
function calc(a, b, s) {
  if (s == '/') return a / b;
  if (s == '*') return a * b;
  if (s == '+') return a + b;
  if (s == '-') return a - b;
}
console.log(calc(5, 7, '*'));
console.log(calc(5, 8, '+'));
console.log(calc(9, 2, '/'));
console.log(calc(231, 219, '-'));

console.log(' ');

// 4
function isSimple(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
    return num > 1;
  }
}
console.log(isSimple(17));
console.log(isSimple(18));

console.log(' ');

// 5
function multTable(n) {
  return `${n} * 2 = ${n*2}\n${n} * 3 = ${n*3}\n${n} * 4 = ${n*4}\n${n} * 5 = ${n*5}\n${n} * 6 = ${n*6}\n${n} * 7 = ${n*7}\n${n} * 8 = ${n*8}\n${n} * 9 = ${n*9}`;
}
console.log(multTable(2));
console.log(multTable(3));
console.log(multTable(4));
console.log(multTable(5));
console.log(multTable(6));
console.log(multTable(7));
console.log(multTable(8));
console.log(multTable(9));

console.log(' ');

// 6
function remOfDivision(a, b) {
  return a - b * Math.trunc(a / b);
}
console.log(remOfDivision(4, 3));

console.log(' ');

// 7
function sum(a, b = 0, c = 0, d = 0, e = 0) {
  return a + b + c + d + e;
}
console.log(sum(2, 5));
console.log(sum(2));
console.log(sum(2, 5, 7, 8));

console.log(' ');

// 8
function biggerNum(a, b = 0, c = 0, d = 0, e = 0) {
  return Math.max(a, b, c, d, e);
}
console.log(biggerNum(1, 5));
console.log(biggerNum(7));
console.log(biggerNum(1, 5, 8, 54, 2));

console.log(' ');

// 9
function oddOrEven(start, end, bool) {
  if (bool == true) {
    for (let i = start + 1; i <= end; i += 2) {
      console.log(i);
    }
  }
  if (bool == false) {
    for (let i = start; i <= end; i += 2) {
      console.log(i);
    }
  }
}
oddOrEven(3, 10, false);
oddOrEven(9, 17, true);

console.log(' ');

// 10
function nextDay(day, month, year) {
  if(day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
    return `1.${month + 1}.${year}`;
  }
  if(day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
    return `1.${month + 1}.${year}`;
  }
  if((day == 28 && month == 2 && year % 4 != 0) || (day == 29 && month == 2 && year % 4 == 0)) {
    return `1.${month + 1}.${year}`;
  }
  if(day == 31 && month == 12) {
    return `1.1.${year + 1}`;
  }
}

console.log(nextDay(30, 4, 1999));
console.log(nextDay(31, 12, 1999));
console.log(nextDay(28, 2, 1999));
console.log(nextDay(29, 2, 2000));