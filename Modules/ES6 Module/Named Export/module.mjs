"use strict";
//In Named Export we can send one or more data.
//The file name must be ".mjs" in ES6 Module.

//Named Export:

export let multiply = (a, b) => {
    console.log(a * b);
}

export let div = (a, b) => {
    if (a > b)
        return a / b;
    return b / a;
};


export let ar = [10, 20, 30, 40, 50];

export let obj = {
    name: "abhishek",
    id: 243,
    sal: 3456343
}
