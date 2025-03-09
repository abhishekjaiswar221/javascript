"use strict";

let loginForm = document.querySelector("#form-control");
console.log(loginForm);
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
    let loginData = new FormData(loginForm);
    console.log(loginData);
    let finalData = Object.fromEntries(loginData);
    console.log(finalData);
    let { uName, uPass } = finalData;
    console.log(uName, uPass);
    let finalRes = JSON.parse(localStorage.getItem(uName));
    console.log(finalRes);
    if (finalRes === null)
        alert("Please Sign Up To Continue");
    else {
        let { username, password } = finalRes;
        console.log(username, password);
        if (username === uName && password === uPass)
            window.open("index.html");
        else
            alert("Invalid Credentials");
    }
})