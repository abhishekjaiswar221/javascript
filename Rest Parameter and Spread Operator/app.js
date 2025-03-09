"use strict";

//Spread Operator work's only with iterable elements Eg: Array and String
function demo(a, b, ...c) {//Rest Parameter(...c)
    console.log(a, b);
    console.log(c);
    console.log(typeof c);
    console.log(...c);//Spread Operator
}

demo(10, 20, 30, 40, 50);

//Array:It is Iterable
// let a = 10;//Error-->It is not iterable
let b = [10, 20, 30, 40, 50];
console.log(...b);//Spread Operator

//String:It is Iterable
let str = "JavaScript";
console.log(...str);//Spread Operator

//Object:Not Iterable-->Error
// let emp = {
//     id: 1,
//     name: "abhi",
//     sal: 23868,
//     isDeveloper: true
// }
// console.log(...emp);
