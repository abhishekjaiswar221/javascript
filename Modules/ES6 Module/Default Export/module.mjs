//In Default Export we can send only one data.
//The file name must be ".mjs" in ES6 Module.
let sum = (a, b) => {
    return a + b;
}

let sub = (a,b) => {
    if (a > b) {
        return a - b;
    }
    return b - a;
};

export default [sum, sub];