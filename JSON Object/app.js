let emp = {
    name: "abhi",
    id: 23,
    skills: ["js", "react", "node js"],
    job: "Senior Developer",
    address: {
        area: "thane",
        pinCode: 221304,
        state: "UP"
    }
}
//stringify() method is used to convert the normal javascript object to JSON object.
let newObj = JSON.stringify(emp);//Returns JSON Object
console.log(newObj);

//parse() method is used to convert JSON object to a normal JavaScript object.
let jsObj = JSON.parse(newObj);//Returns JavaScript Object
console.log(jsObj);

//JSON Object
console.log(JSON);
