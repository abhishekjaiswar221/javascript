"use strict";
let newMap = new Map();
console.log(newMap);

//First Way:
//set(): Set method is used to set the values.
newMap.set("string", "I am string datatype");
newMap.set(1, "I am number");
let arrow = () => {
}
newMap.set(arrow, "I am arrow function");
newMap.set("string", "I am string 2");//Duplicate key-->Overrides previous key
let emp = {
    name: "shashi",
    id: 23,
    isDeveloper: true
}
newMap.set(emp, "I am employee object");
newMap.set(null, "I am null datatype");
newMap.set(undefined, "I am undefined datatype");
newMap.set(NaN, "I am null datatype");
newMap.set(1n, "I am bigint datatype");
console.log(newMap);

//get(): Get method is used to get the values.
console.log(newMap.get(arrow));
console.log(newMap.get("string"));

//delete():Delete method is used to delete the value.It returns boolean value.
newMap.delete(1);
console.log(newMap);

//size: Size property is used to get the size of the Map Object
console.log(newMap.size);

//clear():It is used to clear the Map Object
newMap.clear();
console.log(newMap);

//Second Way:Method Chaining
newMap.set(undefined, "I am undefined").set(function () {
}, "I am anonymous function").set([10, 20, 30, 40, 50], "I am an array");


//keys():/Keys method is used to iterate the keys of the Map Object
let res = newMap.keys();
console.log(res);
for (let key of res) {
    console.log(key);
}
//values(): Values method is used to iterate the values of the Map Object
let val = newMap.values();
console.log(val);
for (let valElement of val) {
    console.log(valElement);
}
//entries(): Entries method is used to iterate both keys and values in the Map Object
let ent = newMap.entries();
console.log(ent);
for (let entElement of ent) {
    console.log(entElement);
}

//Third Way:Entries in Map Constructor
let map = new Map([['name', "abhi"], ['age', 21], ['location', "uttar pradesh"], [function () {
    return 10
}, "This is a function"], [{name: "sachin", id: 32}]]);
console.log(map);

let obj1 = {
    name: "sona",
    age: 20
}
let map2 = new Map(Object.entries(obj1));
console.log(map2);

//We can Iterate the Map Object Using for-of loop:
for (const value of newMap) {
    console.log(value);
}

//Converting normal JavaScript Object to Map Object.It can be done using entries() static method.
let teamMate = {
    name1: "virat",
    name2: "sachin",
    name3: "dhoni"
}
//Converting to an array of Objects:
let newObj = Object.entries(teamMate);
console.log(newObj);

//Converting to Map Object
let mapObj = new Map(newObj);
console.log(mapObj);


//Converting Map Object to normal JavaScript Object:It can be done using Object.fromEntries() static method
let objToMap = Object.fromEntries(mapObj);
console.log(objToMap);
