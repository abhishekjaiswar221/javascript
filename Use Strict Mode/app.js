"use strict";//Follows Strict Syntax
console.log(this);//Returns "window" object.
let b = () => {
    console.log(this);//In an arrow function, in strict mode, "this" returns window object.
}
b();

function demo() {
    console.log(this);//In a normal named function, in strict mode, "this" is undefined.
}

demo();//undefined