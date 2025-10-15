const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');

registerLink.addEventListener("click", () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener("click", () => {
    wrapper.classList.remove('active');
});

btnPopUp.addEventListener("click", () => {
    wrapper.classList.add('active-popup');
});

btnClose.addEventListener("click", (e) => {
    if(e.target.classList.contains("icon-close") || e.target.closest(".icon-close")) {
        wrapper.classList.remove('active-popup');
    }
});

