//Variable Hoisting: Variable Hoisting is a JavaScript mechanism where variables
//are moved to the top of their scope before code execution. (OR)
//Using the variable before declaration and initialization it is known as Variable Hoisting.

//1. Using var keyword to declare the variable:
console.log(a);//Undefined
var a = 10;

//Temporal Dead Zone(TDZ):
//A temporal dead zone (TDZ) is the block where a variable is inaccessible until the
// moment the computer initializes it with a value.

//2. Using let keyword to declare the variable:
console.log(b);//Uncaught Reference Error. This is because of temporal dead zone(TDZ)
let b;//Variable is not accessible (or) out of scope.

//3.Using const keyword to declare the variable:
console.log(c);//Uncaught Reference Error. This is because of temporal dead zone(TDZ)
const c = 10;//Variable is not accessible (or) out of scope.