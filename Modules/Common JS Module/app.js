// Common JS Module: It is used when you want to run your "js" code on server side.It is used in NODE.Js
let data = require("./module.js");
console.log(data);

let {sum, sub, multiply} = data;

//The exported data is returned in the form of object.
console.log(sum(100, 20));
console.log(sub(100, 30));
console.log(multiply(20, 30));