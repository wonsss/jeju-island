export default class SignInModel {
  #USER_EMAIL = 'test@codeit.com';
  #USER_PASSWORD = 'codeit101';

  verifyUserLogin(email, password) {
    return email === this.#USER_EMAIL && password === this.#USER_PASSWORD;
  }
}
