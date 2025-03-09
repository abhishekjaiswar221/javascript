"use strict";
//It is used in client side when you want to run the js code in the client or browser side.

import data from "./module.mjs";

//In Array Destructuring we can change the name of the variables while destructuring and use it.
let [addition, subtraction] = data;

console.log(addition(100, 200));
console.log(subtraction(300, 400));