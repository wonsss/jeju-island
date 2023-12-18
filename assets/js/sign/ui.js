// 메시지 및 css 적용
export function errorDisplay(e, errorMsg, message) {
  errorMsg.innerHTML = message;
  e.target.classList.add('input-error');
}

export function clearDisplay(e, errorMsg) {
  errorMsg.innerHTML = '';
  e.target.classList.remove('input-error');
}

// 비밀번호 눈 모양, input type 변경
export function eye_toogle(sign) {
  const { eyes } = sign;

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
}
