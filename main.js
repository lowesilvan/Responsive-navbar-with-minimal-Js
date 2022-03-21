const burger = document.querySelector('.burger');
const nav = document.querySelector('ul');
const checkbox = document.querySelector('input[type=checkbox]');
const navbar = document.querySelector('nav');

checkbox.addEventListener('change', (e) => {
    nav.classList.toggle('collapse')
})

burger.addEventListener ('click', (e) => {
    console.log("Span CLicked")
})

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 0) {
        navbar.classList.add('box');
    } else {
        navbar.classList.remove('box');
    }
});