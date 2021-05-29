// Reference Automatic Slide to Next 
const referenceSlider = document.querySelector('.reference__slider');

const buttonClick = document.querySelector('#btn-click');

setInterval(() => {
  referenceSlider.style.transform = 'translate(-10%)';
}, 3000);

referenceSlider.addEventListener('transitionend', function(){
  
  referenceSlider.appendChild(referenceSlider.firstElementChild);
  referenceSlider.style.transition = 'none';
  referenceSlider.style.transform = 'translate(0)';

  setTimeout(function(){
    referenceSlider.style.transition = 'transform 0.75s';
  })

});