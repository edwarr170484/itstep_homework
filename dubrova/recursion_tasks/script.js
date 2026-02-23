// 1

function sumTo(n) {
  if (n == 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

function sumToCycle(n) {
  let result = 0;
  for(let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

function sumToProgression(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(5));
console.log(sumToCycle(12));
console.log(sumToProgression(13));

// 2

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));

// 3

function fib(n) {
  let num = 1;
  let num2 = 1;
  for(let i = 3; i <= n; i++) {
    let num3 = num + num2;
    num = num2;
    num2 = num3;
  }
  return num2;
}

console.log(fib(7));

// 4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListCycle(list) {
  let res = list;

  while(res) {
    console.log(res.value);
    res = res.next;
  }
}

function printListRec(list) {
  console.log(list.value);

  if (list.next) {
    printListRec(list.next);
  }
}

printListCycle(list);
printListRec(list);

// 5

function printListRevCycle(list) {
  let arr = [];
  let res = list;

  while (res) {
    arr.push(res.value);
    res = res.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function printListRevRec(list) {  
  if (list.next) {
    printListRevRec(list.next);
  }
  console.log(list.value);
}
 
printListRevCycle(list);
printListRevRec(list);

