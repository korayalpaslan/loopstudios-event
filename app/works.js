// Works Slider https://www.youtube.com/watch?v=0YMntQg-WIk

const worksSlider = document.querySelector('.works__slider');

const buttonPrev = document.querySelector('#btn-previous');

const buttonNext = document.querySelector('#btn-next');

const mediaQuery = window.matchMedia('(min-width: 1024px)')

const ImageGallery = Array.from(document.querySelectorAll('.works__item'));

const worksContainer = document.querySelector('.works__container');


let direction;

// Moving to Next
buttonNext.addEventListener('click', function(){

  if(direction === 1 && mediaQuery.matches){
    direction = -1;
    worksContainer.style.justifyContent = 'flex-start';
    worksSlider.prepend(worksSlider.lastElementChild);
    worksSlider.prepend(worksSlider.lastElementChild);
    worksSlider.prepend(worksSlider.lastElementChild);
  } else if (direction !== 1 && mediaQuery.matches) {
    direction = -1;
    worksContainer.style.justifyContent = 'flex-start';
  }
  if(direction === 1){
    direction = -1;
    worksContainer.style.justifyContent = 'flex-start';
    worksSlider.prepend(worksSlider.lastElementChild);
  } else {
    direction = -1;
    worksContainer.style.justifyContent = 'flex-start';
  }

 
  if (mediaQuery.matches) {
    worksSlider.style.transform = 'translateX(-50.00%)';
  } else {
    worksSlider.style.transform = 'translateX(-16.66%)';
  }
  
});

// Moving to Previous
buttonPrev.addEventListener('click', function(){

  if(direction !== 1 && mediaQuery.matches){
    direction = 1;
    worksContainer.style.justifyContent = 'flex-end';
    worksSlider.appendChild(worksSlider.firstElementChild);
    worksSlider.appendChild(worksSlider.firstElementChild);
    worksSlider.appendChild(worksSlider.firstElementChild);
  } else if(mediaQuery.matches) {
    direction = 1;
    worksContainer.style.justifyContent = 'flex-end';
  } else if(direction !== 1) {
    direction = 1;
    worksContainer.style.justifyContent = 'flex-end';
    worksSlider.appendChild(worksSlider.firstElementChild);
  } else {
    direction = 1;
    worksContainer.style.justifyContent = 'flex-end';
  }

  if (mediaQuery.matches) {
    worksSlider.style.transform = 'translateX(50.00%)';
  } else {
    worksSlider.style.transform = 'translateX(16.66%)';
  }
});

worksSlider.addEventListener('transitionend', function(){

  if (mediaQuery.matches && direction === -1) {

    worksSlider.appendChild(worksSlider.firstElementChild);
    worksSlider.appendChild(worksSlider.firstElementChild);
    worksSlider.appendChild(worksSlider.firstElementChild);
  } else if (!mediaQuery.matches && direction === -1) {
    worksSlider.appendChild(worksSlider.firstElementChild);
  } else if (mediaQuery.matches && direction === 1){
    worksSlider.prepend(worksSlider.lastElementChild);
    worksSlider.prepend(worksSlider.lastElementChild);
    worksSlider.prepend(worksSlider.lastElementChild);
  } else if (!mediaQuery.matches && direction === 1){
    worksSlider.prepend(worksSlider.lastElementChild);
  }

  worksSlider.style.transition = 'none';
  worksSlider.style.transform = 'translateX(0%)';

  setTimeout(function(){

    worksSlider.style.transition = 'transform 0.75s';
  })
})













