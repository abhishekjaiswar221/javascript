"use strict";
console.log("Hii");
console.log("Hii");
console.log("Hii");
console.log("Hii");

setTimeout((a, ...b) => {
    console.log(a);
    console.log(b);
}, 0, "I am setTimeout function", 10, 20, 30, 40);

console.log("Hii");
console.log("Hii");
console.log("Hii");

let p = new Promise((res, rej) => {
    let result = true;
    if (result) {
        res("I am resolved");
    } else {
        rej("I am rejected");
    }
})
p.then(data => console.log(data), err => console.log(err));

console.log("Hii");
console.log("Hii");
console.log("Hii");
console.log("Hii");
console.log("Hii");