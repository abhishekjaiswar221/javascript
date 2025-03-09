document.body.style.backgroundColor = "#2b2b2b";
document.body.style.color = "white";
//1.Date Object
console.log(Date());
let date = new Date();
console.log(date);//It will give systems data and time.

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());//The getTime() method of the JavaScript Date object returns the number of milliseconds elapsed since the Unix epoch, which is 12:00 AM UTC on January 1, 1970.
//The Unix epoch is a specific point in time commonly used as the starting point for counting elapsed time in computing. It is often used as a timestamp for files, events, and other data.
//The getTime() method is useful for a variety of tasks, such as calculating the difference between two dates or times, or converting a date to a timestamp.

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
//------------------------------------------------------------------>setDate()-->Task

// let setDate = date.setDate(12);
// console.log(setDate);

let day = ["Sunday", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
console.log("Today is", day[date.getDay()]);

switch (date.getDay()) {
    case 0: {
        console.log("Sunday");
        break;
    }
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednesday");
        break;
    }
    case 4: {
        console.log("Thursday");
        break;
    }
    case 5: {
        console.log("Friday");
        break;
    }
    case 6: {
        console.log("Saturday");
        break;
    }
    default: {
        console.log("Invalid Date");
    }
}
console.log(date.getHours(), date.getMinutes(), date.getSeconds());

console.log("==========================================================");

//2.Math Object
console.log(Math);
//i.round():
console.log(Math.round(1.5));//2
console.log(Math.round(-1.5));//-1
console.log(Math.round(2.6));//3
console.log(Math.round(-3.4));//-3
console.log(Math.round(-3.6));//-4

console.log("==========================================================");

//ii.ceil():
console.log(Math.ceil(1.2));
console.log(Math.ceil(2.8));
console.log(Math.ceil(0.01));
console.log(Math.ceil(-1.5));
console.log(Math.ceil(-1.1));
console.log(Math.ceil(-1.6));

console.log("==========================================================");

//iii.floor():
console.log(Math.floor(1.01));
console.log(Math.floor(1.99));
console.log(Math.floor(-2.36));

console.log("==========================================================");

//iv.random():
console.log(Math.random() * 200);
console.log(Math.floor(Math.random() * (99999 - 10000) + 10000));

console.log("==========================================================");

//v.max():
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.max());
console.log(Math.max([10, 20, 30, 40, 50, 60]));//Array

function demo() {
    return [10, 20, 30, 40];
}

console.log(Math.max(demo));

console.log("==========================================================");

//vi.min():
console.log(Math.min(15, 9, 78, 4));
console.log(Math.min());

console.log("==========================================================");

//vii.trunc():It return the integer and removes the decimal
console.log(Math.trunc(-10.6));
console.log(Math.trunc(5.6));
console.log(Math.trunc(7.4));
console.log(Math.floor(-10.6));
console.log(Math.trunc(-10.01));

console.log("==========================================================");

//viii.pow():
console.log(Math.pow(2, 3));
console.log(Math.pow(8, 7));
console.log(2 ** 3);
console.log(8 ** 7);

console.log("==========================================================");

//ix.sqrt():
console.log(Math.sqrt(16));

console.log("==========================================================");

//x.cbrt():
console.log(Math.cbrt(27));

console.log("==========================================================");

//3.Object Constructor  Method's
//1.freeze():If we use freeze() method we cannot add, update, delete any keys and values in the object
let emp1 = {
    name: "sagar",
    id: 123,
    degree: "B.E",
    skills: ["js", "react", "next.js", "node"]
}
console.log(emp1);
Object.freeze(emp1);//freeze()

emp1.degree = "B.Tech";//Updating the object
delete emp1.id;//Deleting the data in the object
emp1.address = {//Adding the data into the object
    room: 12,
    place: "qspiders",
    area: "thane"
}
//isFrozen() method is used to check if the object is in "frozen" state.Return type of isFrozen()  is boolean.It's a static method
console.log(Object.isFrozen(emp1));//isFrozen()
console.log(emp1);

console.log("==========================================================");

//2.seal():In seal() method we can update the data in the object, but we cannot add or delete the data.
let std = {
    name: "mani",
    place: "bengaluru",
    degree: "BSC",
    skills: ["java", "sql", "ruby", "swift"]
}
console.log(std);
Object.seal(std);//seal()

std.id = 1343;//Adding the data from the object.
std.place = "maharastra";//Updating the data into the object.
delete std.skills;//Deleting the data into the object
console.log(std);

//isSealed() method is used to check if the object is in "sealed" state.Return type of isSealed()  is boolean.It's a static method
console.log(Object.isSealed(std));//isSealed()
console.log(std);

console.log("==========================================================");

//3.assign():Used to merge two or more Object's.
let std1 = {
    name: "abhi",
    id: 123,
    degree: "B.E"
}

let address = {
    id: 130,
    place: "Thane",
    pinCode: 400606
}

let skills = {
    java: true,
    python: false,
    js: true,
    place: "Maharastra"
}

let details = Object.assign(std1, address, skills);
console.log(details);
console.log(std1);//First object passed as an argument is affected but the second and rest are not affected.
console.log(address);//It is not affected.
console.log(details === std1);
console.log(address === details);


//**Merging two or more objects using spread operator:
//In spread operator, the objects are not affected as in case of "Object.assign" it affects the first object passed as an argument.

let x = {...std1, ...address, ...skills};
// console.log(...std1);//Error
console.log(x);
console.log(std1);
console.log(address);


//Copying and Cloning the object:
let emp = {
    name: "mani",
    skills: ["java", "js", "python"],
    role: "Full Stack Developer",
    sal: 1000
}
//Copy of the above object:
let copy = emp;
console.log(copy);
console.log(copy === emp);//true

copy.sal = 2000;//It affects the original object.
console.log(copy);
console.log(emp);
console.log(copy === emp);//true

//Clone of the above object
let details1 = Object.assign({}, emp);
console.log(details1);
console.log(details1 === emp);//false

details1.sal = 5000;//It does not affects the original object
console.log(details1);
console.log(emp);
console.log(details1 === emp);

//Checking if cloning usign spread operator will change the original object.
let {...newEmp} = emp;
console.log(newEmp === emp);//false
newEmp.name = "sachin";//It does not affect the original object
console.log(newEmp);
console.log(emp);




