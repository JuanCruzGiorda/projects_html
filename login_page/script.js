const logregbox = document.querySelector('.logreg-box');
const logingLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregbox.classList.add('active');
});

logingLink.addEventListener('click', () => {
    logregbox.classList.remove('active');
});