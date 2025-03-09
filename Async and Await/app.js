"use strict";
//Async:
//async is used to make the function asynchronous 

async function demo() {
    return "Hello";
}

let res = demo();
res.then(data => console.log(data)).catch(err => console.log(err));

console.log("---------------------------------------------------------");
//Await:
let p1 = new Promise((res, rej) => {
    let isReached = false;
    if (isReached) {
        setTimeout(() => {
            res("I am reached");
        }, 3000)
    } else {
        rej("I am not reached");
    }
});

async function set() {
    try {
        console.log("Hi");
        let promiseRes = await p1;
        console.log(promiseRes);
        console.log("Bye");
    } catch (e) {
        let newErr = new Error("Promise Rejected");
        console.log(newErr);
    }
}

set();
