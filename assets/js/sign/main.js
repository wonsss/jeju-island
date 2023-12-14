import sign from './sign.js';
import { validateEmail, validatePassword, checkPasswordMatch, validateLogin, validateJoin } from './validation.js';
import { eye_toogle } from './ui.js';

const currentPage = sign.currentPage;

sign.inputEmail.addEventListener('focusout', event => validateEmail(event, sign));
sign.inputPassword.addEventListener('focusout', event => validatePassword(event, sign));
eye_toogle(sign);

// 로그인 페이지일 때
if (currentPage.includes('signin')) {
  sign.signForm.addEventListener('submit', event => validateLogin(event, sign));
}

// 회원가입 페이지일 때
else if (currentPage.includes('signup')) {
  sign.inputPasswordCheck.addEventListener('focusout', event => checkPasswordMatch(event, sign));
  sign.signForm.addEventListener('submit', event => validateJoin(event, sign));
}
