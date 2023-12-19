// 메시지 및 css 적용
export function showErrorMessage(source, errorMessage) {
  const errorMessageElement = errorMessageElementFind(source);

  errorMessageElement.innerHTML = errorMessage;
  errorMessageElement.classList.add('input-error');

  return false;
}

export function clearErrorMessage(event) {
  const errorTag = event.target.parentElement.querySelector('.error_msg');

  errorTag.innerHTML = '';
  errorTag.classList.remove('input-error');

  return true;
}

// 비밀번호 눈 모양, input type 변경
export function eyeToggle(e) {
  const eyeButton = e.target;
  const input = eyeButton.parentElement.querySelector('input');

  input.type = input.type === 'password' ? 'text' : 'password';

  eyeButton.classList.toggle('eye-on');
  eyeButton.classList.toggle('eye-off');
}

function errorMessageElementFind(source) {
  return source instanceof Event
    ? source.target.parentElement.querySelector('.error_msg')
    : source.parentElement.querySelector('.error_msg');
}
