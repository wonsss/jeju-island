import { showErrorMessage, clearErrorMessage } from './ui.js';
import { emailRegex, passwordRegex } from '../regex.js';
import handleError from './errorMessage.js';
import { USER_EMAIL, USER_PASSWORD } from '../../../config.js';

export function validateEmail(e) {
  const email = e.target.value;

  if (email.length === 0) {
    return showErrorMessage(e, handleError('EMPTY_EMAIL_FIELD'));
  }

  if (!emailRegex.test(email)) {
    return showErrorMessage(e, handleError('INVALID_EMAIL'));
  }

  return clearErrorMessage(e);
}

export function checkEmailRegistered(e) {
  const email = e.target.value;

  if (email === USER_EMAIL) {
    return showErrorMessage(e, handleError('EMAIL_REGISTERED'));
  }
}

export function validatePassword(e) {
  const password = e.target.value;

  if (password.length === 0) {
    return showErrorMessage(e, handleError('EMPTY_PASSWORD_FIELD'));
  }
  if (!passwordRegex.test(password)) {
    return showErrorMessage(e, handleError('PASSWORD_TOO_SHORT'));
  }

  return clearErrorMessage(e);
}

export function checkPasswordMatch(e) {
  const password = document.querySelector('#password').value;
  const reEnteredPassword = document.querySelector('#password_chk').value;

  if (reEnteredPassword !== password) {
    return showErrorMessage(e, handleError('PASSWORD_NOT_MATCH'));
  }

  return clearErrorMessage(e);
}

export function verifyUserLogin(e) {
  const email = document.querySelector('#email');
  const password = document.getElementById('password');

  if (email.value !== USER_EMAIL) {
    return showErrorMessage(email, handleError('EMAIL_NOT_FOUND'));
  }

  if (password.value !== USER_PASSWORD) {
    return showErrorMessage(password, handleError('PASSWORD_NOT_MATCH'));
  }
  return true;
}
