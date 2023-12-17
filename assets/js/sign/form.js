import { validateEmail, validatePassword, checkPasswordMatch, verifyUserLogin } from './validation.js';
// signin.html
export function validateLogin(e, sign) {
  e.preventDefault();
  const emailValid = validateEmail(e, sign);
  const passwordValid = validatePassword(e, sign);
  const userVerified = verifyUserLogin(sign);

  if (emailValid && passwordValid && userVerified) {
    sign_form.action = '/folder.html';
    sign_form.method = 'GET';
    sign_form.submit();
  }
}

// signup.html
export function validateJoin(e, sign) {
  e.preventDefault();
  const emailValid = validateEmail(e, sign);
  const passwordValid = validatePassword(e, sign);
  const matchPassword = checkPasswordMatch(e, sign);

  if (emailValid && passwordValid && matchPassword) {
    sign_form.action = '/folder';
    sign_form.method = 'post';
    sign_form.submit();
  }
}
