import throttle from 'lodash.throttle';
const formElements = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input[type="email"]'),
  textAreaEl: document.querySelector('textarea[name="message"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formDataLocalStorage =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
let formData = formDataLocalStorage;

if (formData.email) {
  formElements.emailEl.value = formData.email;
}
if (formData.message) {
  formElements.textAreaEl.value = formData.message;
}

const onFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};
formElements.formEl.addEventListener('input', throttle(onFormInput, 1000));

const onFormSubmit = e => {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(formData);
};
formElements.formEl.addEventListener('submit', onFormSubmit);
