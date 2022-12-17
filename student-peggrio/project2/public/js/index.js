"use strict";

(function () {
    const menu_logo_El = document.querySelector(".menu_logo");
    const menuEl = document.querySelector(".menu_items_shrink");
    
    menu_logo_El.addEventListener("click", function () {
        menuEl.classList.toggle("menu_items_shrink_show");
    });
})();