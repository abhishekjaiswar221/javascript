let obj = {
    demo: () => {
        return "demo function";//demo function
    },
    demo1: function () {
        console.log(this);//Window Objects
        console.log(this.demo3());//function demo4
        return "anonymous function";
    },
    demo2() {
        console.log(this);//Current Object
        return "normal function in demo2";
    },
    demo3: function demo4() {
        console.log(this);//Current Object
        return "function demo4";
    }
}
console.log(obj.demo);
console.log(obj.demo());
console.log(obj.demo2());
console.log(obj.demo3());

//this keyword under constructor function
function Student(name, id) {
    console.log(this);//Current Object
    this.name = name;
    this.id = id;
}

let s1 = new Student("Abhi", 126);


//Example Two:
let student = {
    aName: "abhi",
    id: 54,
    marks: [89, 45, 78, 93, 56],
    address: {
        roomNo: 268,
        area: "Thane",
        pin: 221304,
        nested: {
            sample: "I am nested object"
        }
    },
    demo: () => {
        console.log("Hello World");
        return "I am a demo function";
    }
}
console.log(student.demo());
console.log(student.address.nested.sample);

let markRes = student.marks;
console.log(markRes);
let finalRes = markRes.reduce((ac, cv) => ac + cv, 0);
console.log(finalRes);
let percentage = finalRes / 5;
console.log(percentage);


let employees = [
    {
        eName: "Bumrah",
        id: 45,
        sal: "1cr"
    },
    {
        eName: "Kholi",
        id: 43,
        sal: "3cr"
    },
    {
        eName: "Sachin",
        id: 42,
        sal: "4cr"
    }
]
employees.map(val => {
    console.log(val.eName);
    console.log(val.id);
    console.log(val["sal"]);
})