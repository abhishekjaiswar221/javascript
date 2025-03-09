"use strict";
let xhr = new XMLHttpRequest();

xhr.open("GET", "http://api.github.com/users");
xhr.onload = () => {
    const res = JSON.parse(xhr.response);
    console.log(res);
}
xhr.send();
//Another way to fetch the API is XMLHTTPRequest