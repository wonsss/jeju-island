import SignInModel from './model.js';
import SignInView from './view.js';
import SignInController from './controller.js';

window.addEventListener('DOMContentLoaded', () => {
  // 인스턴스 생성 및 연결
  const signInModel = new SignInModel();
  const signInView = new SignInView();
  new SignInController(signInModel, signInView);
});
