export default class SignInView {
  constructor() {
    this.inputEmail = document.querySelector('#email');
    this.inputPassword = document.querySelector('#password');
    this.eyes = document.querySelectorAll('.eye-button');
    this.signForm = document.querySelector('#sign_form');
  }

  showErrorMessage(tag, errorMessage) {
    const target = tag.parentElement.querySelector('.error_msg');
    const inputBorder = target.parentElement.querySelector('input');

    inputBorder.classList.add('input-error');
    target.innerHTML = errorMessage;
  }

  clearErrorMessage(tag) {
    const target = tag.parentElement.querySelector('.error_msg');
    const inputBorder = target.parentElement.querySelector('input');

    inputBorder.classList.remove('input-error');
    target.innerHTML = '';
  }

  eyeToggle(e) {
    const eyeButton = e.target;
    const input = eyeButton.parentElement.querySelector('input');

    input.type = input.type === 'password' ? 'text' : 'password';

    eyeButton.classList.toggle('eye-on');
    eyeButton.classList.toggle('eye-off');
  }
}
