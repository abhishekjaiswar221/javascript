//Function Hoisting:Function Hoisting is a JavaScript mechanism where
//function declarations are moved to the top of their scope before code execution.
//(OR)
//Using the function before declaration is known as Function Hoisting.
console.log(addition(10, 20));//Function Hoisting
function addition(a, b) {
    return a + b;
}

console.log(addition(10, 20));
