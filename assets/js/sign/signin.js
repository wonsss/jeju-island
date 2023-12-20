import handleError from './errorMessage.js';

export const USER_EMAIL = 'test@codeit.com';
export const USER_PASSWORD = 'codeit101';

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

class SignIn {
  constructor() {
    this.inputEmail = document.querySelector('#email');
    this.inputPassword = document.querySelector('#password');
    this.eyes = document.querySelectorAll('.eye-button');
    this.signForm = document.querySelector('#sign_form');
    this.email = document.querySelector('#email');

    this.inputEmail.addEventListener('focusout', e => this.validateEmail(e));
    this.inputPassword.addEventListener('focusout', e => this.validatePassword(e));
    this.eyes.forEach(button => {
      button.addEventListener('click', e => this.eyeToggle(e));
    });
    this.signForm.addEventListener('submit', e => this.validateLogin(e));
  }

  validateEmail() {
    const emailValue = this.email.value;

    if (emailValue.length === 0) {
      this.showErrorMessage(email, handleError('EMPTY_EMAIL_FIELD'));
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.showErrorMessage(email, handleError('INVALID_EMAIL'));
      return false;
    }

    this.clearErrorMessage(email);
    return true;
  }

  validatePassword() {
    const passwordValue = this.inputPassword.value;

    if (passwordValue.length === 0) {
      this.showErrorMessage(this.inputPassword, handleError('EMPTY_PASSWORD_FIELD'));
      return false;
    }

    if (!PASSWORD_REGEX.test(passwordValue)) {
      this.showErrorMessage(this.inputPassword, handleError('PASSWORD_TOO_SHORT'));
      return false;
    }

    this.clearErrorMessage(password);
    return true;
  }

  validatePasswordCheck() {
    const reEnteredPasswordValue = this.reEnteredPassword.value;
    const passwordValue = this.inputPassword.value;

    if (reEnteredPasswordValue.length === 0) {
      this.showErrorMessage(this.reEnteredPassword, handleError('EMPTY_PASSWORD_FIELD'));
      return false;
    }
    if (!PASSWORD_REGEX.test(reEnteredPasswordValue)) {
      this.showErrorMessage(this.reEnteredPassword, handleError('PASSWORD_TOO_SHORT'));
      return false;
    }
    if (reEnteredPasswordValue !== passwordValue) {
      this.showErrorMessage(this.reEnteredPassword, handleError('PASSWORD_NOT_MATCH'));
      return false;
    }

    this.clearErrorMessage(this.reEnteredPassword);
    return true;
  }

  validateLogin(e) {
    e.preventDefault();
    const emailValid = this.validateEmail();
    const passwordValid = this.validatePassword();
    const userVerified = this.verifyUserLogin();

    if (emailValid && passwordValid && userVerified) {
      e.target.submit();
    }
  }

  verifyUserLogin() {
    const emailValue = this.inputEmail.value;
    const passwordValue = this.inputPassword.value;

    if (emailValue !== USER_EMAIL) {
      this.showErrorMessage(email, handleError('EMAIL_NOT_FOUND'));
      return false;
    }

    if (passwordValue !== USER_PASSWORD) {
      this.showErrorMessage(password, handleError('PASSWORD_NOT_MATCH'));
      return false;
    }

    return true;
  }

  eyeToggle(e) {
    const eyeButton = e.target;
    const input = eyeButton.parentElement.querySelector('input');

    input.type = input.type === 'password' ? 'text' : 'password';

    eyeButton.classList.toggle('eye-on');
    eyeButton.classList.toggle('eye-off');
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
}

new SignIn();
