import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const messageArea = document.querySelector('textarea');
const emailArea = document.querySelector('input');
const formData = {};

onTextAreaInput();


form.addEventListener('submit', onFormSubmit);

form.addEventListener(
  'input',
  throttle(event => {
 
    formData[event.target.name] = event.target.value;

  
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));      
  }
      , 500)
);


function onFormSubmit(event) {
    event.preventDefault();
     const formElements = event.currentTarget.elements;
    //  console.log(formElements);

     const mail = formElements.email.value;
     const text = formElements.message.value;
   
   
    localStorage.removeItem(STORAGE_KEY);
   

     console.log(`"email" - ${mail}, "message" - ${text}`);
    form.reset();
   
}



function onTextAreaInput(event) {
    const savedText = localStorage.getItem(STORAGE_KEY);
    const parsedText = JSON.parse(savedText);
  if (parsedText) {

      emailArea.value = parsedText.email;
      messageArea.value = parsedText.message;
  }
}





