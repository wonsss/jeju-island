import { ERROR_MESSAGES, PASSWORD_REGEX, EMAIL_REGEX } from './constants.js';

const getErrorMessage = errCode => ERROR_MESSAGES[errCode] ?? '알 수 없는 에러가 발생했습니다.';

export default class SignInController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.#initEventListeners();
  }

  #initEventListeners() {
    this.view.inputEmail.addEventListener('focusout', this.#validateEmail.bind(this));
    this.view.inputPassword.addEventListener('focusout', this.#validatePassword.bind(this));
    this.view.eyes.forEach(button => {
      button.addEventListener('click', this.view.eyeToggle);
    });
    this.view.signForm.addEventListener('submit', this.#validateLogin.bind(this));
  }

  #validateEmail() {
    const emailValue = this.view.inputEmail.value;

    if (emailValue.length === 0) {
      this.view.showErrorMessage(this.view.inputEmail, getErrorMessage('EMPTY_EMAIL_FIELD'));
      return false;
    }

    if (!EMAIL_REGEX.test(emailValue)) {
      this.view.showErrorMessage(this.view.inputEmail, getErrorMessage('INVALID_EMAIL'));
      return false;
    }

    this.view.clearErrorMessage(this.view.inputEmail);
    return true;
  }

  #validatePassword() {
    const passwordValue = this.view.inputPassword.value;

    if (passwordValue.length === 0) {
      this.view.showErrorMessage(this.view.inputPassword, getErrorMessage('EMPTY_PASSWORD_FIELD'));
      return false;
    }

    if (!PASSWORD_REGEX.test(passwordValue)) {
      this.view.showErrorMessage(this.view.inputPassword, getErrorMessage('PASSWORD_TOO_SHORT'));
      return false;
    }

    this.view.clearErrorMessage(this.view.inputPassword);
    return true;
  }

  #validateLogin(e) {
    e.preventDefault();
    const emailValid = this.#validateEmail();
    const passwordValid = this.#validatePassword();
    const emailValue = this.view.inputEmail.value;
    const passwordValue = this.view.inputPassword.value;
    const userVerified = this.model.verifyUserLogin(emailValue, passwordValue);

    if (!emailValid || !passwordValid) {
      return;
    }

    if (!userVerified) {
      this.view.showErrorMessage(this.view.inputPassword, getErrorMessage('INVALID_CREDENTIALS'));
      return;
    }

    this.view.signForm.submit();
  }
}
