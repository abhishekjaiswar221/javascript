"use strict";
let signUpForm = document.querySelector("form");

document.addEventListener("DOMContentLoaded", (e) => {
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(signUpForm);
    console.log(data);

    let finalData = Object.fromEntries(data);
    console.log(finalData);
  });
});
//Gender and Checkbox showing "on"-->Error
