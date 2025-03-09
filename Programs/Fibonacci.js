"use strict";
//Fibonacci Series:
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 2; i <= 100; i++) {
    let c = a + b;
    a = b;
    b = c;
    if (c < 50)
        console.log(c);
}