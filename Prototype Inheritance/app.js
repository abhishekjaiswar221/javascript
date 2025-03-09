"use strict";
//Prototype defines the parent or points to the parent object of the Object,Array,etc.

//Example 1:

let user = {
  name: "abhi",
  access: ["login", "product"],
  id: 300,
  setName(n) {
    this.name = name;
  },
  getName() {
    return this.name;
  },
};

let child = {
  name: "admin",
};
child.__proto__ = parent;
console.log(child);
console.log(child.setName("virat"));
console.log(child);

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

let s1 = new Student("abhi", 56);
s1.__proto__ = parent;
console.log(s1.getName());
console.log(s1);

//Example 2:
let parent = {
  name: "sachin",
  id: 21,
  getName() {
    return this.name;
  },
};

let nameRes = parent.getName();
console.log(nameRes);

let children = {
  name: "Sara Tendulkar",
};

console.log(children);
children.__proto__ = parent;
console.log(children);

console.log(children.getName());

let ar = [10, 20, 304, 54];
console.log(ar);
