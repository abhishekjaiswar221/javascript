"use strict";
let form = document.querySelector(".form-control");
console.log(form);

let user = document.getElementById("username");
let userRes;
user.addEventListener("input", (e) => {
  userRes = e.target.value;
});

let pass = document.getElementById("password");
let passRes;
pass.addEventListener("input", (e) => {
  passRes = e.target.value;
});

let email = document.getElementById("email");
let emailRes;
email.addEventListener("input", (e) => {
  emailRes = e.target.value;
});

let gender = document.getElementsByName("gender");
let genderRes;
[...gender].forEach((val) => {
  val.addEventListener("change", (e) => {
    if (val.checked) {
      genderRes = e.target.value;
    }
  });
});

let country = document.getElementById("country");
console.log(country);
let countryRes;
country.addEventListener("input", (e) => {
  countryRes = e.target.value;
});

let courses = document.getElementsByName("courses");
let courseRes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userRes);
  console.log(passRes);
  console.log(emailRes);
  console.log(genderRes);
  console.log(countryRes);

  courses.forEach((val) => {
    if (val.checked) {
      courseRes.push(val.value);
      console.log(courseRes);
    }
  });
});
