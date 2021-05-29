
// Intersection Numbers https://www.youtube.com/watch?v=huVJW23JHKQ&t=906s

const faders = document.querySelectorAll(".fade-in");
const description = document.querySelector(".intersection__description");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } 
      
      else {
        entry.target.classList.add("appear"); // Adding class to animate
        appearOnScroll.unobserve(entry.target);
        myFunctionOne();
        myFunctionTwo();
        myFunctionThree();
        myFunctionFour();

      }

    });
  },appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Number Animation
function myFunctionOne(){

  let i = 0;
  let value = setInterval(() => {
  i++;
  if (i === 104){
    clearInterval(value);
  }
  const figures = document.querySelectorAll('.appear');
  const elements = Array.from(figures);
  elements[0].firstElementChild.textContent = i;

  },8);

};

function myFunctionTwo(){

  let i = 32000;
  let value = setInterval(() => {
  i += 25;
  if (i === 34200){
    clearInterval(value);
  }
  const figures = document.querySelectorAll('.appear');
  const elements = Array.from(figures);
  elements[1].firstElementChild.textContent = `${i}+`;

  },10);

};

function myFunctionThree(){

  let i = 1;
  let value = setInterval(() => {
  i += 1;
  if (i === 23){
    clearInterval(value);
  }
  const figures = document.querySelectorAll('.appear');
  const elements = Array.from(figures);
  elements[2].firstElementChild.textContent = i;

  },40);

};

function myFunctionFour(){

  let i = 0;
  let value = setInterval(() => {
  i += 1;
  if (i === 8){
    clearInterval(value);
  }
  const figures = document.querySelectorAll('.appear');
  const elements = Array.from(figures);
  elements[3].firstElementChild.textContent = i;

  },100);
};



// Intersection Description Part https://www.youtube.com/watch?v=huVJW23JHKQ&t=906s

const appearOnScrollTwo = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } 
      
      else {
        entry.target.classList.add("appear-text"); // Adding class to animate
        appearOnScrollTwo.unobserve(entry.target);
      }

})
},appearOptions);

appearOnScrollTwo.observe(description);


