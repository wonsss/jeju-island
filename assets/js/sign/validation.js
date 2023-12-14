import { errorDisplay, clearDisplay } from './ui.js';

export function validateEmail(e, sign) {
  const errorMsg = sign.errorMessages[0];
  const email = sign.inputEmail.value;
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (email.length === 0) {
    errorDisplay(e, errorMsg, '이메일을 입력해주세요');
    return false;
  } else if (!regex.test(email)) {
    errorDisplay(e, errorMsg, '올바른 이메일 주소가 아닙니다.');
    return false;
  } else if (email == 'test@codeit.com' && currentPage.includes('signup')) {
    errorDisplay(e, errorMsg, '이미 사용 중인 이메일입니다.');
    return false;
  } else {
    clearDisplay(e, errorMsg);
    return true;
  }
}

export function validatePassword(e, sign) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const errorMsg = sign.errorMessages[1];
  const password = sign.inputPassword.value;

  if (password.length === 0) {
    errorDisplay(e, errorMsg, '비밀번호를 입력해주세요.');
    return false;
  } else if (!regex.test(password)) {
    errorDisplay(e, errorMsg, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  } else {
    clearDisplay(e, errorMsg);
    return true;
  }
}

export function checkPasswordMatch(e, sign) {
  const errorMsg = sign.errorMessages[2];
  const password = sign.inputPassword.value;
  const passwordchk = sign.inputPasswordCheck.value;

  if (passwordchk !== password) {
    errorDisplay(e, errorMsg, '비밀번호가 일치하지 않아요.');
    return false;
  } else {
    clearDisplay(e, errorMsg);
    return true;
  }
}

function verifyUserLogin(sign) {
  const email = sign.inputEmail;
  const password = sign.inputPassword.value;

  if (email.value !== 'test@codeit.com') {
    sign.errorMessages[0].innerHTML = '이메일을 확인해주세요';
    email.classList.add('input-error');
    return false;
  }
  if (password.value !== 'codeit101') {
    sign.errorMessages[1].innerHTML = '비밀번호를 확인해주세요';
    password.classList.add('input-error');
    return false;
  }
  return true;
}

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
