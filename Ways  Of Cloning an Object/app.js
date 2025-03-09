let std = {
    name: "shashi",
    id: 121,
    branch: "thane",
    skills: ["java", "js", "react"]
}
//How many ways we can clone the object in js.
//1.Using assign() method:
console.log(std);
let value = Object.assign({}, std);
console.log(value == std);

//2.Using the Spread Operator:
let {...res}=std;
console.log(res);
console.log(res==std);

//3.Using for in loop:
let newObj = {};

for (let k in std) {
    newObj[k] = std[k];
}
console.log(newObj);
console.log(std == newObj);

//4.Using structuredClone():
let clone = structuredClone(std);
console.log(clone);
console.log(clone == str);

let newVar = std;
console.log(newVar == std);