"use strict";

// Function can be parameterized or non-parameterized.

//1.Named Function: Function with function name
function sum(num1, num2) {//Parameterized named-function.
    return num1 + num2;
}

console.log(sum(10, 20));//30
console.log(sum(30, 40, 50));//70

function demoSum(number1, number2) {
    let numberSum = number1 + number2;
    console.log(numberSum);
    // return numberSum;//You can also return the "numberSum" variable, and at the time of function calling statement you can console(print) the addition as show in line number "18".
}

demoSum(123, 2);

// console.log(demoSum(50, 51));

function subtraction() {//Non-parameterized named-function.
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);//30
}

subtraction();//30
function demo(a, b, c) {
    console.log(a);//10
    console.log(b);//20
    console.log(c);//undefined
}

demo(10, 20);//10,20

function foo(x = 1000, y = 2000, z = 3000) {//Called Function
    console.log(x, y, z);//100 200 300
}

foo(100, 200, 300);//If I am not passing the value in the function calling statement then the function will take the values passed inside the called function.
foo();//Function calling statement.

console.log("=========================================================================");

//2.Function with expression(Anonymous Function):
//Anonymous Function stored inside a variable is known as Function with Expression
//Anonymous Function-->Function with no name.
//Anonymous non-parameterized function:
let add = function () {
    let a = 20;
    let b = 30;
    let c = a + b;
    console.log(c);
}
add();

//Anonymous parameterized function:
let sub = function (num3, num4) {
    console.log("Hi how are you?");
    return num3 - num4;
}
console.log(sub(1000, 654));

//Anonymous parameterized function with function name:
let subtract = function subtraction(num5, num6) {//Name of the function is optional it can be given, or it can be ignored.
    console.log("How are you?");
    return num5 - num6;
}
// console.log(subtraction(123,234));//Uncaught Reference Error-->Because we accessed the function with the optional function name and not the variable name.
console.log(subtract(1234, 6754));

console.log("=========================================================================");


//3.Arrow Function:Arrow Function is declared using "fat arrow(=>)".
//Arrow Function Types are similar to "Lambda Expression" in JAVA.
let sum2 = (a, b) => {//If we have only one line of code "return" statement is not necessary.
    console.log("Hi Man");
    return a + b;
}
console.log(sum2(10, 20));

let demo2 = a => console.log(a);//If we have only one line of code "function block" is not necessary.
demo2("String1");//If we have only one parameter there is no need of "()" brackets.

let multiply = (a, b) => a * b;//If we have only one line of code "return" statement and "function block" is not necessary.
console.log(multiply(10, 5));

console.log("=========================================================================");

//4.Constructor Function:
// It is considered good practice to name constructor functions with an upper-case first letter.
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
}

let Abhishek = new Person("Abhishek", "Jaiswar", 32, "black");
console.log(Abhishek);


//Note:
//We cannot use the arrow function to create a constructor function because, "this" keyword in arrow function refers to the window object.
// let Employee = (name, id, percentage) => {----------------------------->Error
//     console.log(this);
//     this.name = name;
//     this.id = id;
//     this.percentage = percentage
// }
// Employee();
// let e1 = new Employee("shashi", 1, 43);
// console.log(e1);
// let e2 = new Employee("abhi", 2, 56);
// console.log(e2);
console.log("=========================================================================");

//5.Generator Function
function* demo1() {
    let a = 10;
    let b = 20;
    console.log("1st Yield");
    yield [a, b];
    var c = 100;
    console.log("2nd Yield");
    yield c;
    let d = 5000;
    console.log("3rd Yield");
    yield d;
    return "Function execution Is Completed Successfully";
}

let res = demo1();
console.log(res);
// console.log(...res);//Use spread syntax or next() method.If we use spread operator it will not give the value of the return statement.
console.log(res.next());
console.log(res.next());
console.log(res.return);//It will end the function execution.
console.log(res.next());
console.log(res.next());

//6.Immediately Invoked Function Expression:
// Used to avoid the Global Pollution
var x = 1000;
(function () {
    var a = 400;
    console.log(a);
    console.log(200 + 300);
    console.log(window.x);
})();



