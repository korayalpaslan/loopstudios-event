
// Hero Slider

const carouselButtons = document.querySelectorAll('.arrow');
const slider = document.querySelector('#carousel-images');
const numberOfImages = document.querySelectorAll('.images').length;


let imageIndex = 1;
let translateX = 0;

// Manuel Slide Animation
carouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {

        if(event.target.id === 'next' && imageIndex !== numberOfImages) {
            imageIndex++;
            translateX -= 25.00;
        } else if (event.target.id === 'next' && numberOfImages + 1) {
          document.getElementById('carousel-images').style.transition = 'none';
          imageIndex = 1;
          translateX = 0;

          setTimeout(function(){
            document.getElementById('carousel-images').style.transition = 'transform 0.75s';
          })
        }
        else if (event.target.id === 'previous' && imageIndex !== 1) {
            imageIndex--;
            translateX += 25.00;
        }
        slider.style.transform = `translateX(${translateX}%)`;      
    })
});


// Automatic Slide Animation
setInterval(function(){ 

    imageIndex++;
    translateX -= 25.00;

    if (imageIndex === numberOfImages + 1 ) {
        document.getElementById('carousel-images').style.transition = 'none';
        imageIndex = 1;
        translateX = 0;

        setTimeout(function(){
          document.getElementById('carousel-images').style.transition = 'transform 0.75s';
        })
    }

    slider.style.transform = `translateX(${translateX}%)`;

},7000);