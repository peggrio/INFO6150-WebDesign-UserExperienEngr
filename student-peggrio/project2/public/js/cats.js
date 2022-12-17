"use strict";

(function () {
    const subscribeEl = document.querySelectorAll('.subscribe');
    const modalEl = document.querySelector('.modal');
    const cancelEl = document.querySelector('.cancel');
    const submitEl = document.querySelector('.submit');
    const emailEl = document.querySelector('.register__email');
    const checkEmailEl = document.querySelector('.register__confirm');

    const errorEmailEl = document.querySelector('.register__email-error');
    const errorCheckedEmailEl = document.querySelector('.register__confirm-error');
    const formEl = document.querySelector('.register');
    const menu_logo_El = document.querySelector(".menu_logo");
    const menuEl = document.querySelector(".menu_items_shrink");

    menu_logo_El.addEventListener("click", function () {
        menuEl.classList.toggle("menu_items_shrink_show");
    });

    emailEl.addEventListener('change', () => {
        errorEmailEl.innerText = "";
        errorCheckedEmailEl.innerText = "";
        emailEl.classList.remove('input_error');

        if (!emailEl.value.includes("@")) {
            errorEmailEl.innerText = "This field be a valid email address including a @";
            emailEl.classList.add('input_error');
        }

    })

    formEl.addEventListener('submit', () => {
        errorEmailEl.innerText = "";
        errorCheckedEmailEl.innerText = "";
        checkEmailEl.classList.remove('input_error');

        let isInvalid = false;

        if (!emailEl.value.includes("@")) {
            errorEmailEl.innerText = "This field be a valid email address including a @";
            isInvalid = true;
            emailEl.classList.add('input_error');
        }

        if (!emailEl.value) {
            errorEmailEl.innerText = "This field is required";
            isInvalid = true;
            emailEl.classList.add('input_error');
        }

        if (emailEl.value != checkEmailEl.value) {
            errorCheckedEmailEl.innerText = "This field must match the provided email address";
            isInvalid = true;
            checkEmailEl.classList.add('input_error');
        }

        if (isInvalid) {
            event.preventDefault();
        }

    })

    for(let i = 0; i < subscribeEl.length; i++){
        subscribeEl[i].addEventListener('click', () => {
            modalEl.showModal();
        })
    }

    cancelEl.addEventListener('click', () => {
        modalEl.close();
    });



})();