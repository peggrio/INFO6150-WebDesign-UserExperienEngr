"use strict"

const buttonEl = document.querySelector(".menu_button");
const demoEl = document.querySelector(".menu");

buttonEl.addEventListener("click", function() {
    demoEl.classList.toggle("active");
});