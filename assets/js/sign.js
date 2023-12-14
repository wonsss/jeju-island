const input_email = document.querySelector('#email');
const input_pw = document.querySelector('#password');
const input_pw_chk = document.querySelector('#password_chk');
const error_msgs = document.querySelectorAll('.error_msg');
const sign_form = document.querySelector('#sign_form');
const currentPage = window.location.pathname;

input_email.addEventListener('focusout', validateEmail);
input_pw.addEventListener('focusout', validatePassword);

// 로그인 페이지일 때
if (currentPage === '/signin.html') {
  sign_form.addEventListener('submit', validateLogin);
}

// 회원가입 페이지일 때
else if (currentPage === '/signup.html') {
  input_pw_chk.addEventListener('focusout', checkPasswordMatch);
  sign_form.addEventListener('submit', validateJoin);
}

function validateLogin() {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (emailValid && passwordValid && verifyUserLogin()) {
    sign_form.action = '/folder';
    sign_form.method = 'post';
    sign_form.submit();
  }
}

function validateJoin(e) {
  e.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const matchPassword = checkPasswordMatch();

  if (emailValid && passwordValid && matchPassword) {
    sign_form.action = '/folder';
    sign_form.method = 'post';
    sign_form.submit();
  }
}

// 각종 검증 구현
function validateEmail(e) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const errorMsg = error_msgs[0];
  const email = input_email.value;

  if (email.length === 0) {
    errorDisplay(e, errorMsg, '이메일을 입력해주세요');
    return false;
  } else if (!regex.test(email)) {
    errorDisplay(e, errorMsg, '올바른 이메일 주소가 아닙니다.');
    return false;
  } else if (email == 'test@codeit.com') {
    errorDisplay(e, errorMsg, '이미 사용 중인 이메일입니다.');
    return false;
  } else {
    clearDisplay(e, errorMsg);
    return true;
  }
}

function validatePassword(e) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const errorMsg = error_msgs[1];
  const password = input_pw.value;

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

function checkPasswordMatch(e) {
  const errorMsg = error_msgs[2];
  const password = input_pw.value;
  const passwordchk = input_pw_chk.value;

  if (passwordchk !== password) {
    errorDisplay(e, errorMsg, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    return false;
  } else {
    clearDisplay(e, errorMsg);
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

// 메시지 및 css 적용
function errorDisplay(e, errorMsg, message) {
  errorMsg.innerHTML = message;
  e.target.classList.add('input-error');
}
function clearDisplay(e, errorMsg) {
  errorMsg.innerHTML = '';
  e.target.classList.remove('input-error');
}

//
const eyes = document.querySelectorAll('.eye-button');

eyes.forEach(button => {
  button.addEventListener('click', function () {
    const img = this.querySelector('img');
    const input = this.previousElementSibling;

    if (img.src.includes('/assets/images/signin/eye-off.svg')) {
      img.src = '/assets/images/signin/eye-on.svg';
      input.type = 'text';
    } else if (img.src.includes('/assets/images/signin/eye-on.svg')) {
      img.src = '/assets/images/signin/eye-off.svg';
      input.type = 'password';
    }
  });
});
