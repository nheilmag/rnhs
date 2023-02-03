const switchForm = document.querySelector('#switch-form');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');

switchForm.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

const switchBack = document.querySelector('#switch-back');

switchBack.addEventListener('click', function(e) {
  e.preventDefault();
  loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
});
