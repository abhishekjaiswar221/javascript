"use strict";
let p1 = new Promise((res, rej) => {
    let isConfirmedTicket = true;//true//false
    if (isConfirmedTicket) res("I am resolve from promise 1");
    else rej("I am rejected from promise 1");
});
let p2 = new Promise((res, rej) => {
    let isConfirmedTicket = false;//true//false
    if (isConfirmedTicket) res("I am resolve from promise 2");
    else rej("I am rejected from promise 2");
});
let p3 = new Promise((res, rej) => {
    let isConfirmedTicket = true;//true//false
    if (isConfirmedTicket) res("I am resolve from promise 3");
    else rej("I am rejected from promise 3");
});
let p4 = new Promise((res, rej) => {
    let isConfirmedTicket = false;//true//false
    if (isConfirmedTicket) res("I am resolve from promise 4");
    else rej("I am rejected from promise 4");
})

//Promise Methods:
//all():It returns an array of promises if all the promises are resolved or else if any 
//promise is rejected it returns the first rejected promise.
let allRes = Promise.all([p1, p2, p3, p4]);
allRes.then(data => console.log(data), err => console.log(err));

//any():It returns the first resolved promise if the promises are resolved or else if
//all the promise are rejected then it returns AggregateError.
// AggregateError -->When all the "promises" are rejected.
let anyRes = Promise.any([p1, p2, p3, p4]);
anyRes.then(data => console.log(data), err => console.log(err));

//allSettled():It returns an array of resolved and rejected promises.
let allSettled = Promise.allSettled([p1, p2, p3, p4]);
allSettled.then(data => console.log(data), err => console.log(err));

//race():It is based on the timing which promise has less time it is executed at first.
let p5 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved Promise 1");
    }, 3000);

    setTimeout(() => {
        rej("Rejected Promise 1");
    }, 4000);
});


let p6 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved Promise 2");
    }, 5000);

    setTimeout(() => {
        rej("Rejected Promise 2");
    }, 1000);
});

let raceRes = Promise.race([p5, p6]);
raceRes.then(data => console.log(data), err => console.log(err));
