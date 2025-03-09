//Rest Parameter and Spread Operators
//In Array Destructuring we can change the name of the variables while destructuring and use it.

function demo(a, b, ...c) {//Rest Parameter
    console.log(a, b);
    console.log(c);
    console.log(typeof c);

    console.log(...c);//Spread Operator
}

demo(20, 10, 30, 40, 60, 70, 56, 78);


// let num = 1000;
// console.log(...num);//Spread Operator

let str = "String1234";
console.log(...str);//Spread Operator

//Array Destructing: It is used to give unique identifier to the array elements.

//Example 1:
let val = [10, 20, 304, 50, 60];
console.log(val);

let [a, b, ...c] = val;
console.log(a);
console.log(b);
console.log(c);

let [...x] = val;
console.log(x);

//Converting the array elements to object.
let {...obj} = val;
console.log(obj);

//Example 2:
//Concatenating arrays:
let a1 = [10, 20];
let b1 = [30, 40];
let c1 = [50, 60];
let d1 = [70, 80];
let e1 = a1.concat(b1, c1, d1);
console.log(e1);
console.log(a1);

//Concatenating arrays using spread operator("...")
let newAr = [...a1, ...b1];
console.log(newAr);

//Array Destructuring:

let marks = [89, 78, 98, 56, 87, 67];
//Destructuring the array:It is used to give unique identifier to the array elements.
let [marathi, english, physics, maths, chemistry, biology] = marks;
console.log(english);
console.log(physics);

let skills = ["JS", "Node Js", "React", "PHP", "Python", "Angular", "JS Selenium"];
let [u, v, ...w] = skills;
console.log(u, v);
console.log(w);
console.log(...w);
