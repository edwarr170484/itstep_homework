// const _ = require('lodash');
const $ = require('jquery');
// const alertModule = require('./alert');

import _ from 'lodash';
// import showAlert from './alert';
import '../scss/custom.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

$('body').css({ backgroundColor: 'red' });

let currentColor;
const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'navy', 'violet'];

// function changeBackground() {
//   const currentColorIndex = colors.indexOf(currentColor);
//   const nextColor = colors[currentColorIndex + 1] || colors[0];

//   document.body.style.background = nextColor;
//   console.log(`new color is ${nextColor}`);
//   currentColor = nextColor;
// }
// setInterval(changeBackground, 2000);
// changeBackground('red');

// get random color:
// console.log(colors.length);
// const randomElement = colors[Math.floor(Math.random() * colors.length)];
// console.log(randomElement); 

// get random color by function:
// function getRandomElement(colors) {
//   return colors[Math.floor(Math.random() * colors.length)];
// }
// const randomColor = getRandomElement(colors);
// console.log(randomColor);

// get random color with lodash:
// const randomElement = _.sample(colors);
// console.log(randomElement);

function changeRandomBackground() {
  const currentColorIndex = colors.indexOf(currentColor);
  let nextColor = colors[currentColorIndex + 1] || colors[0];
  // get random color with lodash:
  const randomColor1= _.sample(colors);
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  nextColor = randomColor2;

  document.body.style.background = nextColor;
  console.log(`new color is ${nextColor}`);
  currentColor = nextColor;
}
setInterval(changeRandomBackground, 2000);

// alertModule.myFunction('Это алерт!!');
// showAlert('Hello');