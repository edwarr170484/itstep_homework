let images = document.querySelectorAll('.slider img');
let currentImageIndex = 0;
let h2 = document.createElement('h2');
let slider = document.querySelector('.slider');

slider.append(h2);

let titles = [];
for(let i = 0; i < images.length; i++) {
  titles.push(images[i].title);  
}



function changeSlide() {
  if (currentImageIndex < 3) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }

  for(let i = 0; i < images.length; i++) {
    if (i == currentImageIndex) {
      images[i].classList.add('active');
      h2.innerText = titles[i];
    } else {
      images[i].classList.remove('active');
    }
  }
}

setInterval(changeSlide, 2000);