// 메시지 및 css 적용
export function showErrorMessage(source, errorMessage) {
  const errorBorderElement = errorMessageElementFind(source);
  const errorMessageElement = errorBorderElement.parentElement.querySelector('.error_msg');

  errorBorderElement.classList.add('input-error');
  errorMessageElement.innerHTML = errorMessage;

  return false;
}

export function clearErrorMessage(source) {
  const errorBorderElement = errorMessageElementFind(source);
  const errorMessageElement = errorBorderElement.parentElement.querySelector('.error_msg');

  errorBorderElement.classList.remove('input-error');
  errorMessageElement.innerHTML = '';

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
  return source instanceof Event ? source.target.parentElement.querySelector('input') : source.parentElement.querySelector('input');
}
