
// Blur Event for Newsletter Form

const lastNameInput = document.querySelector('#lname');
const lastNameLabel = document.querySelector('#lname-label');
const nameInput = document.querySelector('#fname');
const nameLabel = document.querySelector('#fname-label')
const newsletterForm = document.querySelector('.newsletter__form');

lastNameInput.addEventListener('click', function(){
  lastNameInput.style.backgroundColor = '#FEA82F';

})

lastNameInput.onblur = function() {

  if(lastNameInput.value === ""){
    lastNameInput.style.backgroundColor = 'white';
    lastNameLabel.style.display = 'block';
  
    if(mediaQuery.matches){
      newsletterForm.style.alignItems = 'flex-start';
  
    }
  }

  }

  nameInput.addEventListener('click', function(){
    nameInput.style.backgroundColor = '#FEA82F';
  
  })
  
  nameInput.onblur = function() {

    if(nameInput.value === ""){
      nameInput.style.backgroundColor = 'white';
      nameLabel.style.display = 'block';
    
      if(mediaQuery.matches){
        newsletterForm.style.alignItems = 'flex-start';
    
      }
    }

  }