let button = document.querySelector('.button');
let nav = document.querySelector('nav');

button.addEventListener('click', function() {
  nav.classList.toggle('animated');
  nav.classList.toggle('transformed');
});

let link1 = document.querySelector('nav div:nth-child(1)');
let link2 = document.querySelector('nav div:nth-child(2)');
let link3 = document.querySelector('nav div:nth-child(3)');
let link4 = document.querySelector('nav div:nth-child(4)');
let link5 = document.querySelector('nav div:nth-child(5)');

let video1 = document.querySelector('main iframe:nth-child(1)');
let video2 = document.querySelector('main iframe:nth-child(2)');
let video3 = document.querySelector('main iframe:nth-child(3)');
let video4 = document.querySelector('main iframe:nth-child(4)');
let video5 = document.querySelector('main iframe:nth-child(5)');

link1.addEventListener('click', function(event) {
  event.preventDefault();
  video1.classList.add('d-block');
  nav.classList.remove('transformed');
});
link2.addEventListener('click', function(event) {
  event.preventDefault();
  video2.classList.add('d-block');
  nav.classList.remove('transformed');
});
link3.addEventListener('click', function(event) {
  event.preventDefault();
  video3.classList.add('d-block');
  nav.classList.remove('transformed');
});
link4.addEventListener('click', function(event) {
  event.preventDefault();
  video4.classList.add('d-block');
  nav.classList.remove('transformed');
});
link5.addEventListener('click', function(event) {
  event.preventDefault();
  video5.classList.add('d-block');
  nav.classList.remove('transformed');
});