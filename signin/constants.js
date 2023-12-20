export const ERROR_MESSAGES = {
  EMPTY_EMAIL_FIELD: '이메일을 입력해주세요.',
  INVALID_EMAIL: '올바른 이메일 주소가 아닙니다.',
  EMAIL_NOT_FOUND: '이메일을 확인해주세요.',
  EMAIL_REGISTERED: '이미 사용 중인 이메일입니다.',
  EMPTY_PASSWORD_FIELD: '비밀번호를 입력해주세요.',
  INVALID_PASSWORD: '비밀번호를 확인해주세요.',
  PASSWORD_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  PASSWORD_TOO_SHORT: '비밀번호는 8자 이상 20자 이하여야 합니다.',
  INVALID_CREDENTIALS: '이메일 또는 비밀번호가 일치하지 않습니다.',
};

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
