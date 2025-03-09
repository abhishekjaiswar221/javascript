//Shallow Copy:
//Example 1:

let address = {
    door: 132,
    place: "Thane",
    state: "Maharastra",
    pinCode: 328568
}

let std = {
    name: "abhi",
    id: 25,
    job: "Developer",
    ad: address
}

//Using Spread Operator:
let {...res} = std;//Object Destructuring
console.log(std === res);//false
res.id = 400;
console.log(res);
console.log(std);
res.ad.door = 300;
console.log(res);
console.log(std);

function Student(name, id) {
    this.name = name;
    this.id = id;
}

let s1 = new Student("Abhi", 21);
let s2 = new Student("Sona", 21);

let s3 = s1;
console.log(s3 === s1);

//Example 2:
let ad = {
    pinCode: 221304,
    area: "UP",
    doorNo: 236
}

let student = {
    name: "tendulkar",
    id: 78,
    percentage: 100,
    gender: "other",
    address: ad
}

//Copying the object reference:
let newStudent = student;
newStudent.name = 'Ganja';
console.log(newStudent);
console.log(student);

//Using Object.assign():It only affects the nested object and does not affect the parent object.
let assignRes = Object.assign({}, student);
assignRes.id = 324873;
ad.pinCode = 34784333;
console.log(assignRes);
console.log(student);

//Using forin loop:
let empObj = {};
for (let studentKey in student) {
    empObj[studentKey] = student[studentKey];
}
empObj.id = 200;
console.log(student);
ad.pinCode = 987632;
console.log(student);
console.log(empObj);

//Deep Copy:Deep copy is achieved using stringify(), parse() method and structuredClone() method.
let address1 = {
    door1: 132,
    place1: "Thane",
    state1: "Maharastra",
    pinCode1: 328568
}

let std1 = {
    name1: "abhi",
    id1: 25,
    job1: "Developer",
    ad1: address1
}

//Using stringify()and parse() method:
let jsonObj = JSON.stringify(std1);
console.log(jsonObj);

let jsObj = JSON.parse(jsonObj);
console.log(jsObj);
std1.id1 = 200;
address1.pinCode1 = 692368527;
jsObj.ad1.pinCode1 = 2000;
console.log(jsObj);
console.log(std1);

//structuredClone():
let clone = structuredClone(std1);
clone.id1 = 1000;
console.log(std1);
address1.pinCode1 = 783514;
console.log(clone);
console.log(std1);

console.log(this);