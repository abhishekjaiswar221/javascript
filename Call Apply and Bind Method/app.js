//You can refer "this" keyword to (object, Number Object, array, Boolean Object, function, Bigint) but we cannot refer to (null and undefined) using call(),apply() and bind()
//call():You can pass more than two parameters in call() method
function demo1(...a) {
  // console.log(a);
  // console.log(...a);
  this.name1 = "sona";
  this.id1 = 34;
  console.log(this);
  return this;
}
//Example 1: Referring the object
let emp1 = {
  id1: 200,
  name1: "abhi",
  state1: "Maharastra",
  designation1: "Software Developer",
};
let res1 = demo1.call(emp1, 10, 20, 30, 40);
console.log(res1);

//Example 2: Referring the array
// let ar = [10, 20, 30, 40, 50];
// let res6 = demo1.call(ar);
// console.log(res6);

// //Example 3: Referring the number "n"
// let n = 100;
// let res7 = demo1.call(n);
// console.log(res7);

// //Example 3: Referring the arrow function
// let foo = () => {
//   console.log("I am arrow function");
// };

// let res8 = demo1.call(foo);
// console.log(res8);

// let res9 = demo1.call(foo());
// console.log(res9);

// //------------------------------------------------------------------------
// function demo4(a, b, c, d) {
//   console.log(a, b, c, d);
//   this.name1 = "abhi";
//   return this;
// }

// demo4(20, 30, 40, 50);
// let res4 = demo4.call(emp1, 10, 20, 30, 40);
// console.log(res4);

// console.log(
//   "-----------------------------------------------------------------------"
// );

// //apply():apply() method takes only two parameters first parameter is the thing that we want to refer "this" keyword to, and the second parameter is an "array".
// let emp2 = {
//   id2: 200,
//   name2: "abhi",
//   state2: "Maharastra",
//   designation2: "Software Engineer",
// };

// //We can access the second parameter(the array) passed in the apply() method inside the function.
// function demo2(a, b, c, d) {
//   console.log(a, b, c, d);
//   this.name2 = "sona";
//   return this;
// }

// demo2(30, 40, 50, 60);

// let res2 = demo2.apply(emp2, [10, 20, 30, 40]);
// console.log(res2);

// console.log(
//   "-----------------------------------------------------------------------"
// );

// //bind():It returns a "bound function".It is used to set the value of "this" keyword based on condition.

// //Example 1:
// let emp3 = {
//   id3: 200,
//   name3: "abhi",
//   state3: "UP",
//   designation3: "Programmer",
// };

// function demo3(a, b, c) {
//   console.log(a, b, c);
//   this.name3 = "sona";
//   console.log(this); //Returns Window Objects
// }

// demo3(10, 20, 30);
// let res3 = demo3.bind(emp3, 20, 30, 40);
// res3();

// //Example 2:

// let employee = {
//   name: "abhi",
//   id: 23,
//   sal: 28765,
//   getName() {
//     console.log(this);
//     return this.name;
//   },
//   area: "Uttar Pradesh",
//   pinCode: 221304,
//   getDetails() {
//     console.log(this.area, this.pinCode);
//   },
// };

// let employee2 = {
//   name: "sachin",
//   id: 234,
//   sal: 2587324,
// };

// let address = {
//   area: "Thane",
//   pinCode: 221304,
// };

// let resBind = employee.getName.bind(employee2);
// console.log(resBind);
// // console.log(employee.getName());

// // It is used to set the value of "this" keyword based on condition.

// let res = true;
// if (res) console.log(resBind());
// else console.log("Don't call the bind function");

// //JavaScript to scroll the webpage till the end:
// window.setInterval(() => {
//   window.scrollTo(0, document.body.scrollHeight);
// }, 1000);
