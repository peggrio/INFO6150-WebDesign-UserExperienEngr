"use strict"

// const nameEl = document.querySelector('.register__name');
// nameEl.addEventListener('input', () => { //fat arrow function
//     console.log("typing happened");
// });

const nameEl = document.querySelector('.register__name');
const errorNameEl = document.querySelector('.register__name-error')
const emailEl = document.querySelector('.register__email');
const formEl = document.querySelector('.register');
const errorEmailEl = document.querySelector('.register__email-error');
const checkEmailEl = document.querySelector('.register__confirm');
const errorEmailCheckEl = document.querySelector('.register__confirm-error');

nameEl.addEventListener('change', () => {
    // Can decide if value is okay as they type
    errorNameEl.classList.remove('register__name-invalid');

    if (!nameEl.value) {
        errorNameEl.classList.add('register__name-invalid');
    }

});

formEl.addEventListener('submit', (event) => {
    //init
    errorEmailEl.innerText = "";
    errorEmailCheckEl.innerText = "";
    let isInvalid = false;

    if (!nameEl.value) {
        errorNameEl.classList.add('register__name-invalid');
        isInvalid = true;
    }

    if (!emailEl.value) {
        errorEmailEl.innerText = "Email required";
        isInvalid = true;
    }

    if (emailEl.value != checkEmailEl.value) {
        errorEmailCheckEl.innerText = "Email doesn't match";
        isInvalid = true;
    }

    if (isInvalid) {
        event.preventDefault();
    }
})




