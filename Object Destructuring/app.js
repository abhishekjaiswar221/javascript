//Object Destructuring:It is used to give unique identifier to the object values same as the key of the object.
//In Object Destructuring we cannot change the name of the variable while destructuring because the variable refers to the keys defined in the object while creating the object, but you can give any variable when you destructure with spread operator to save all the value in a single variable.

//Example 1:
let std = {
    name: "shashi",
    id: 121,
    branch: "thane",
    skills: ["js", "java", "react"]
}

// console.log(..std);//Object is not iterable outside but iterable inside-->Accessing Outside

let {name: user, branch, ...z} = std;//Object is not iterable outside but iterable inside-->Accessing Inside
console.log(std.name);//Using the original name assigned to the key "name" with the object name reference as "std.name".
console.log(user);
console.log(branch);
// console.log(name, branch);//Error-->Because "name" key in the object is changed to "user".
console.log(z);
console.log(std);//Object "std".


console.log("==================================================================");

//Adding two arrays with array destructuring
let a = [10, 20, 30];
let b = [40, 50];
let ar = [...a, ...b];//First way of concatenating the array
console.log(ar);
let res = a.concat(b);//Second way of concatenating the array.
console.log(res);

console.log("==================================================================");

//Converting an object to array:
let stud = {
    name: "shashi",
    id: 121,
    branch: "thane",
    skills: ["java", "react", "js"]
}

// let [...x]=stud;//Not possible to convert the object to an array with destructuring, but it is possible with "keys", "values" and "entries".

let keys = Object.keys(stud);
console.log(keys);
let values = Object.values(stud);
console.log(values);
let entries = Object.entries(std);
console.log(entries);


//Iterating Array using keys, values, and entries.
let array = [10, 20, 30, 40, 50];
let val = array.keys();
let val1 = array.values();
let val2 = array.entries();
console.log(val);
console.log(val1);
console.log(val2);
for (let a of val) {
    console.log(a);
}
for (let b of val1) {
    console.log(b);
}
for (let c of val2) {
    console.log(c);
}

//Example 2:
let student = {
    name: "sachin",
    id: 34,
    skills: ["cricket", "football"],
    percentage: 100
}
console.log(student.skills);
let {skills: action, ...x} = std;
console.log(action);
console.log(std.skills);
// console.log(skills);Error-->Name is changed to "action".
console.log(id);
console.log(percentage);
console.log(name);
console.log(x);

let {...std1} = student;
console.log(std1);

//Converting array to object:
let fruits = ["mango", "apple", "pineapple", "banana", "strawberry"];

let {...fruitsObj} = fruits;
console.log(fruitsObj);

//Converting object to array:------->Error
let student1 = {
    id: 1,
    name: "Abhi",
    percentage: 65
}
// let [...fruitsArrayRes]=student1;
// console.log(fruitsArrayRes);//Error-->We cannot convert object to array using object destructuring


//Use of Object Destructuring:
let EmpArr = [
    {
        name: "virat",
        id: 245,
        sal: 4632
    },
    {
        name: "sachin",
        id: 25,
        sal: 46342
    },
    {
        name: "jadeja",
        id: 241,
        sal: 463252
    }
]
EmpArr.map(m => {
    let {name, id, sal} = m;
    console.log(name, id, sal);
})
