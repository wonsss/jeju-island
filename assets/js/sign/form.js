import { validateEmail, validatePassword, checkPasswordMatch, verifyUserLogin } from './validation.js';

export function validateLogin(e) {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const userVerified = verifyUserLogin();

  if (emailValid && passwordValid && userVerified) {
    e.target.submit();
  }
}

// signup.html
export function validateJoin(e) {
  e.preventDefault();
  const emailValid = validateEmail(e);
  const passwordValid = validatePassword(e);
  const matchPassword = checkPasswordMatch(e);

  if (emailValid && passwordValid && matchPassword) {
    e.target.submit();
  }
}
