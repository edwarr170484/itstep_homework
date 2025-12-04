
/* Task 1 */
console.log('Task 1');
/** Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек),
*  и написать следующие функции для работы с таким объектом:
1. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
2. Функция принимает объект-прямоугольник и возвращает его ширину.
3. Функция принимает объект-прямоугольник и возвращает его высоту.
4. Функция принимает объект-прямоугольник и возвращает его площадь.
5. Функция принимает объект-прямоугольник и возвращает его периметр.
6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.
8. Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.
9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.
11. Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки. */
/* ----------------------------------------------------------------------------------------------------------------------------------------- */

let rectangle = {
    x1: 10,
    y1: 10,
    x2: 200,
    y2: 200,
    html: "My Rectangle",
};

// class OzonLayerWindow {
//     constructor(left, top, right, bottom) {
//         this.left = left;
//         this.top = top;
//         this.right = right;
//         this.bottom = bottom;
//     }

//     /* Функция для вывода на экран информации о координатах прямоугольника. */
//     showRectangle() {
//         console.log(`left: ${this.left}, top: ${this.top}, right: ${this.right}, bottom: ${this.bottom}`);
//     }
// }

// rectangle1 = new OzonLayerWindow(10, 20, 30, 60);
// rectangle2 = new OzonLayerWindow(10, 20, 40, 70);

// rectangle1.showRectangle();
// rectangle2.showRectangle();


/* Show Ozon Layer Window as rectangle */
function drawRectangle(rectangle) {
    let div = document.createElement("div");

    div.classList.add("rectangle");

    if (rectangle.className) {
        div.classList.add(rectangle.className);
    }

    div.style.top = rectangle.y1 + "px";
    div.style.width = rectangle.x2 + "px";
    div.style.height = rectangle.y2 + "px";
    div.style.left = rectangle.x1 + "px";

    div.innerText = rectangle.html;
    document.body.prepend(div);
}

// drawRectangle({
//     x1: 10,
//     y1: 10,
//     x2: 200,
//     y2: 200,

//     html: "Hello from Ozon Layer Window!", // HTML-уведомление  
// });
// drawRectangle(rectangle);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 1 */
console.log('Task 1 - 1');
// /**
//  * Функция принимает объект-прямоугольник и выводит
//    информацию о нем (где какая точка расположена).
//  *
//  * @param object rectangle with left top right bottom coordinates & html info
//  * @return void
function printRectangleInfo(rectangle) {
    console.log(`Left top corner - x:${rectangle.x1}, y:${rectangle.y1}`);
    console.log(`Right bottom corner - x:${rectangle.x2}, y:${rectangle.y2}`);
}

console.log("Function to output information about a rectangle");
printRectangleInfo(rectangle);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 2 */
console.log('Task 1 - 2');
// /**
//  * Функция принимает объект-прямоугольник и возвращает его ширину.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info
//  * @return number width of object rectangle
function getRectangleWidth(rectangle) {
    return rectangle.x2 - rectangle.x1;
}

console.log("Function that returns the width of a rectangle");
console.log({ width: getRectangleWidth(rectangle) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 3 */
console.log('Task 1 - 3');
// /**
//  * Функция принимает объект-прямоугольник и возвращает его высоту.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info
//  * @return number heigth of object rectangle
// /**
function getRectangleHight(rectangle) {
    return rectangle.y2 - rectangle.y1;
}

console.log("Function that returns the height of a rectangle");
console.log({ hight: getRectangleHight(rectangle) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 4 */
console.log('Task 1 - 4');
//  * Функция принимает объект-прямоугольник и возвращает его площадь.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info
//  * @return number area of object rectangle
function getRectangleArea(rectangle) {
    return (rectangle.x2 - rectangle.x1) * (rectangle.y2 - rectangle.y1);
}

console.log("Function that returns the area of ​​a rectangle");
console.log({ area: getRectangleArea(rectangle) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 5 */
console.log('Task 1 - 5');
//  * Функция принимает объект-прямоугольник и возвращает его периметр.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info
//  * @return number perimeter of object rectangle
function getRectanglePerimeter(rectangle) {
    return (2 * (rectangle.x2 - rectangle.x1)) + (2 * (rectangle.y2 - rectangle.y1));
}

console.log("Function that returns the perimeter of a rectangle");
console.log({ perimeter: getRectanglePerimeter(rectangle) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 6 */
console.log('Task 1 - 6');
//  * Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и
//  на сколько единиц изменить ширину.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           number delta width
//  * @return new object rectangle with new left top right bottom coordinates
function updateWidth(rectangle, width) {
    let rectangle2 = { ...rectangle };
    rectangle2.x2 += width;
    rectangle2.html = "Update Width";
    return rectangle2;
}

console.log("Function to change the width of a rectangle");
console.log({ updatedWidth: JSON.stringify(updateWidth(rectangle, 300)) });
// drawRectangle(rectangle, "Update Width")
// showRectangle(rectangle);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 7 */
console.log('Task 1 - 7');
//  * Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и 
//  на сколько единиц изменить высоту.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           number delta hight
//  * @return new object rectangle with new left top right bottom coordinates
function updateHight(rectangle, hight) {
    let rectangle2 = { ...rectangle };
    rectangle2.y2 += hight;
    rectangle2.html = "Update Hight";
    return rectangle2;
}

console.log("Function to change the height of a rectangle");
console.log({ updateHight: JSON.stringify(updateHight(rectangle, 30)) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 8 */
console.log('Task 1 - 8');
//* Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и
//  два значения для изменения ширины и высоты.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           numbers delta width, delta hight
//  * @return new object rectangle with new left top right bottom coordinates
function updateWidthAndHight(rectangle, width, hight) {
    let rectangle2 = { ...rectangle };
    rectangle2.x2 += width;
    rectangle2.y2 += hight;
    rectangle2.html = "Update Width And Hight";
    return rectangle2;
}

console.log("Function to change the width and height of a rectangle");
console.log({ updateHight: JSON.stringify(updateWidthAndHight(rectangle, 30, 40)) });
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 9 */
console.log('Task 1 - 9');
//  * Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник
// и на сколько единиц его сдвинуть.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           number delta X
//  * @return new object rectangle with new left top right bottom coordinates
function updateX(rectangle, moveX) {
    let rectangle2 = { ...rectangle };
    rectangle2.x1 += moveX;
    rectangle2.html = "Update X";
    return rectangle2;
}

console.log("Function to shift a rectangle along the X axis");
let result7 = updateX(rectangle, 30);
console.log({ updateX: JSON.stringify(result7) });
// drawRectangle(result7);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 10 */
console.log('Task 1 - 10');
//  * Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник
//  и на сколько единиц его сдвинуть.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           number delta Y
//  * @return new object rectangle with new left top right bottom coordinates
function updateY(rectangle, moveY) {
    let rectangle2 = { ...rectangle };
    rectangle2.y1 += moveY;
    rectangle2.html = "Update Y";
    return rectangle2;
}

console.log("Function to shift a rectangle along the Y axis");
let result8 = updateY(rectangle, 30);
console.log({ updateY: JSON.stringify(result8) });
// drawRectangle(result8);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 11 */
console.log('Task 1 - 11');
//  * Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник
//  и два значения: сдвиг по оси X и сдвиг по оси Y.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           numbers  delta X, delta Y
//  * @return object rectangle with new left top right bottom coordinates
function updateXY(rectangle, moveX, moveY) {
    let rectangle2 = { ...rectangle };
    rectangle2.x1 += moveX;
    rectangle2.y1 += moveY;
    rectangle2.html = "Update XY";
    return rectangle2;
}

console.log("Function to shift a rectangle along both the X and Y axis");
let result9 = updateXY(rectangle, 30, 30);
console.log({ updateXY: JSON.stringify(result9) });
drawRectangle(result9);
/* ------------------------------------------------------------------------------------ */


/* Task 1 - 12 */
console.log('Task 1 - 12');
//  * Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и
// координаты точки.
//  *
//  * @param object rectangle with left top right bottom coordinates & html info,
//           point with X, Y coordinates
//  * @return boolean
function ifDotInside(rectangle, x, y) {
    if ((x <= rectangle.x2 && x >= rectangle.x1) && (y <= rectangle.y2 && y >= rectangle.y1)) {
        return true;
    }
    return false;
}

console.log("Function to check if a point is inside a rectangle");
let result10 = ifDotInside(rectangle, 300, 500);
console.log({ rectangle: JSON.stringify(rectangle) });
console.log({ ifDotInside: JSON.stringify(result10) });
/* ------------------------------------------------------------------------------------ */