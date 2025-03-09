"use strict";

let signUpForm = document.querySelector(".form-control");
console.log(signUpForm);
signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    let signUpData = new FormData(signUpForm);
    let uname = document.getElementById("username").value;
    localStorage.setItem(uname, JSON.stringify(Object.fromEntries(signUpData)));
    window.open("login.html");
})