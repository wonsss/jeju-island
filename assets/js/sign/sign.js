const sign = {
  inputEmail: document.querySelector('#email'),
  inputPassword: document.querySelector('#password'),
  inputPasswordCheck: document.querySelector('#password_chk'),
  errorMessages: document.querySelectorAll('.error_msg'),
  signForm: document.querySelector('#sign_form'),
  currentPage: window.location.pathname,
  eyes: document.querySelectorAll('.eye-button'),
};

export default sign;
