"use strict";
//Global Scope
console.log(this);//window object-->If, we are not using "use strict" then only we get "window" object or else it gives "undefined".

//Named Function
function demo() {
    console.log(this);//window object
}

//Arrow Function-->It always refers to the window object.
let arrFun = () => {
    console.log(this);//window object
}

//Constructor Function
function Student(id, name, marks) {
    console.log(this);//Current Object
    this.id = id;
    this.name = name;
    this.marks = marks;
}

let S1 = new Student(1, "Abhi", 78);
console.log(S1);
let S2 = new Student(2, "Jai", 78);//Current Object
console.log(S2);


//Object
let funObj = {
    name: "admin",
    demo: () => {
        console.log("I am arrow function");
        console.log(this);//window object
    },
    anonymous: function () {
        console.log("I am anonymous function");
        console.log(this);//Current Object
    },
    anonymous2: function () {
        console.log("I am anonymous function 2");
        console.log(this);//Current Object
        return this.name;//Returns value of the key inside the Current Object
    },
    namedFunc: function foo() {
        console.log("I am named function");
        console.log(this);
    },
    direct() {
        console.log("I am named function without key");
        console.log(this);
    },
    set setName(name) {
        this.name = name;
    },
    get getName() {
        return this.name;
    }
}

funObj.demo();
funObj.anonymous();
let anonymous2 = funObj.anonymous();
console.log(anonymous2);
funObj.namedFunc();
funObj.direct();

funObj.setName = "sagar";
console.log(funObj.name);
console.log(funObj.getName);


