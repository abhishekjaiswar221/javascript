"use strict";
//Promise:It's used to make the code work asynchronously.

//Promise States:
//1.resolved(fulfilled)-->Yes
//2.pending-->Wait
//3.rejected-->No

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

let p1 = new Promise((res, rej) => {
    let isConfirmedTicket = true;
    if (isConfirmedTicket) res("Value: " + 10);
    else rej("Reason: " + "String");
})
console.log(p1);

//Promise Instance(Object) Methods:
//then(),catch() and finally():It takes one function as an argument.
p1.then((a) => {
    console.log(a);
    console.log("Train ticket is booked you can go by train");
}).catch((b) => {
    console.log(b);
    console.log("Train ticket is not booked.Please book Bus ticket");
}).finally(() => {
    console.log("I am finally method and I will execute everytime");
})

console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");


