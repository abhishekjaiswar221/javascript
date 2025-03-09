//Local Storage and Session Storage size-->5-10MB

//Local Storage:
console.log(window.localStorage);

console.log("------------------------------------------------------------------------");

//Setting different datatype into the local storage:Data stored into local and session storage is implicitly converted into string datatype.
localStorage.setItem("username", "abhishek");//String
//Integer Value:
let id = 212;
localStorage.setItem("id", id);//Number
//Boolean Value:
localStorage.setItem("boolean_val", true);//Boolean
let getVal = localStorage.getItem("boolean_val");
console.log(typeof getVal);//Sting

console.log("------------------------------------------------------------------------");

//Setting object into the local storage:
let emp = [
    {
        name: "shahi",
        job: "Software Developer",
        id: 123
    },
    {
        name: "shahi",
        job: "MERN Developer",
        id: 124
    },
    {
        name: "shahi",
        job: "MEAN Developer",
        id: 125
    }
]

//You Will Not Get The Data:
// localStorage.setItem("emp_details",emp);//Object
// let fetchObj = localStorage.getItem("emp_details");//Object
// console.log(typeof fetchObj);//String

//Local storage stores the data in the form of JSON object, which stores the data in the form of string.
//We have to store and convert the data (Here:Object in Array) while storing into local storage.
localStorage.setItem("employees", JSON.stringify(emp));
let getDetails = localStorage.getItem("employees");

console.log(getDetails);//JSON object
console.log(typeof getDetails);//string

//After parsing the data, we get the normal Javascript Object.
let res = JSON.parse(getDetails);
console.log(res);

console.log("------------------------------------------------------------------------");

//Setting String data into the localstorage:
let username = "abhishek";
let password = "Abhishek@123";

//setItem():To set the data into the localstorage:
localStorage.setItem("us", username);
localStorage.setItem("pass", password);

//getItem():To get the data from the localstorage:
console.log(localStorage.getItem("us"));
console.log(localStorage.getItem("pass"));

//Data in local storage is stored in the form of "string".
console.log(typeof localStorage.getItem("un"));
console.log(typeof localStorage.getItem("pass"));

//removeItem():To remove a data from the local storage:
localStorage.removeItem("pass");

//clear():To clear all the data in the local storage:
// localStorage.clear();

console.log("------------------------------------------------------------------------");

//Session Storage:
sessionStorage.setItem("user", "virat");
sessionStorage.setItem("password", "Kholi@123");
sessionStorage.setItem("id", 120);

let res1 = sessionStorage.getItem("pass");
console.log(res1);//null


let res2 = sessionStorage.getItem("password")
console.log(res2);

sessionStorage.removeItem("id")
// sessionStorage.clear();
