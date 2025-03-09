"use strict";
//fetch():
const fetchJson = window.fetch("./empDetails.json");
// console.log(fetchJson);
fetchJson.then(data => {
    // console.log(data);//Response Object
    let finalData = data.json();//The json() method in JavaScript is used to parse JSON data into a JavaScript object. It can be used to convert a JSON string into a JavaScript object, or to convert a JSON file into a JavaScript object.
    finalData.then(res => {
        res.map(val => {
            let {name, id, designation, skills} = val;
            let div = document.createElement("div");
            div.innerHTML = `<h1>Name: ${name}</h1>
            <h2>Id: ${id}</h2>
            <h3>Designation: ${designation}</h3>
            <p><b>Skills: </b> ${skills.map(val => {
                return `<span>${val}</span>`
            })}</p>`;
            document.querySelector(".main").appendChild(div);
        })
    }, err => console.log(err));
}).catch(err => console.log(err));
