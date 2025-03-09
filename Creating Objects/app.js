//1.Literal way of creating an object:
let student1 = {
  name: "Nirmala",
  wife_name: undefined,
  isMarried: false,
  No_of_languages: 3,
};

//Accessing the object:
console.log(student1);

//Adding keys and values:
let j = "php";
student1.programming_languages = ["java", "c", "c++", `${j}`]; //Using "." notation for adding the key and values to the object
student1["skills"] = ["java", "python", "php"]; //Using "[]" notation for adding the keys and values in the object.
console.log(student1);

//Accessing values:
console.log(student1.wife_name); //Using "." notation for accessing the object values.
console.log(student1["name"]); //Using "[]" notation for accessing the values.

//Updating the value (Overriding the previous value):
student1.isMarried = true;
console.log(student1);

//Deleting the data:
delete student1.wife_name;
delete student1["name"];
console.log(student1);

//Adding an Arrow Function into the object:
student1.fun = (a, b) => a + b;
console.log(student1.fun(10, 20));
console.log(student1);

//Adding an Object "obj2" as a key and passing an object as a value into the object:
student1.obj2 = { key1: "value1", key2: "value2" };
console.log(student1);

//Iterating an Object With Keys Values and Entries:
// for (let value of student1) {//Values in the object is not Iterable.
//     console.log(value);
// }

for (let index in student1) {
  //Index of an object is Iterable Using "forin" loop
  console.log(index);
}

//2.Invoking the Constructor Function-->Same key but different value
function Student(name1, id1, course, percentage) {
  //Constructor name should start with an uppercase letter.
  console.log(this); //Current Object
  this.name1 = name1;
  console.log(name1); //"this" refers to the current object you are creating.
  this.id1 = id1;
  console.log(id1); //"this" refers to the current object you are creating.
  this.course = course;
  console.log(course); //"this" refers to the current object you are creating.
  this.percentage = percentage;
  console.log(percentage); //"this" refers to the current object you are creating.
}

let s1 = new Student("nirmala", 400, "React Js", 90);
console.log(s1);
let s2 = new Student("yash", 200, "Java", 69);
console.log(s2);

s2.skills = ["java", "react", "js"];
console.log(s2);

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

//3.Invoking Object Constructor
let employee = new Object();
console.log(employee);

//Adding keys and values to the "employee" object.
employee.name = "sagar";
employee.id = "121";
console.log(employee);

let boo = new Object(true);
console.log(boo);

let num = new Object(1);
console.log(num);

let str = new Object("String");
console.log(str);

let big = new Object(1n);
console.log(big);

//4.Using ES6 class syntax:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let Person1 = new Person("Abhishek", 21);
console.log(Person1);
let Person2 = new Person("Jaiswar", 21);
console.log(Person2);
