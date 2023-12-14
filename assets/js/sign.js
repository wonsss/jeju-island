const input_email = document.querySelector('#email');
const input_pw = document.querySelector('#password');
const input_pw_chk = document.querySelector('#password_chk');
const error_msgs = document.querySelectorAll('.error_msg');
const sign_form = document.querySelector('#sign_form');

input_email.addEventListener('focusout', validateEmail);
input_pw.addEventListener('focusout', validatePassword);
input_pw_chk.addEventListener('focusout', checkPasswordMatch);
sign_form.addEventListener('submit', validateLogin);

function validateLogin(e) {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (emailValid && passwordValid && verifyUserLogin()) {
    sign_form.action = '/folder';
    sign_form.method = 'post';
    sign_form.submit();
  }
}

function validateEmail() {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const errorMsg = error_msgs[0];
  const email = input_email.value;

  if (email.length === 0) {
    errorMsg.innerHTML = '이메일을 입력해주세요';
    input_email.classList.add('input-error');
    return false;
  } else if (!regex.test(email)) {
    errorMsg.innerHTML = '올바른 이메일 주소가 아닙니다.';
    input_email.classList.add('input-error');
    return false;
  } else if (email == 'test@codeit.com') {
    errorMsg.innerHTML = '이미 사용 중인 이메일입니다.';
    input_email.classList.add('input-error');
    return false;
  } else {
    errorMsg.innerHTML = '';
    input_email.classList.remove('input-error');
    return true;
  }
}

function validatePassword() {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const errorMsg = error_msgs[1];
  const password = input_pw.value;

  if (password.length === 0) {
    errorMsg.innerHTML = '비밀번호를 입력해주세요.';
    input_pw.classList.add('input-error');
    return false;
  } else if (!regex.test(password)) {
    errorMsg.innerHTML = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    input_pw.classList.add('input-error');
  } else {
    errorMsg.innerHTML = '';
    input_pw.classList.remove('input-error');
    return true;
  }
}

function checkPasswordMatch() {
  const errorMsg = error_msgs[2];
  const password = input_pw.value;
  const passwordchk = input_pw_chk.value;

  if (passwordchk !== password) {
    errorMsg.innerHTML = '비밀번호가 일치하지 않아요.';
    input_pw_chk.classList.add('input-error');
  } else {
    errorMsg.innerHTML = '';
    input_pw_chk.classList.remove('input-error');
    return true;
  }
}

function verifyUserLogin() {
  if (input_email.value !== 'test@codeit.com') {
    error_msgs[0].innerHTML = '이메일을 확인해주세요';
    return false;
  }
  if (input_pw.value !== 'codeit101') {
    error_msgs[1].innerHTML = '비밀번호를 확인해주세요';
    return false;
  }
  return true;
}
