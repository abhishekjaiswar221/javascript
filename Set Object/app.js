"use strict";
//Set Object takes only value.It does not accept duplicate values.It is case-sensitive eg: "String" and "string" both are different data.

//First Way:Adding values directly into the map constructor.
let newSet = new Set([10, 20, 30, 40, 50, "abhishek"]);//First Way
console.log(newSet);

//Second Way:Using non-static add() method.
newSet.add("hello");
newSet.add([10, 20, 30, 40, 50]);
console.log(newSet);

//Third Way:Method Chaining
newSet.add("hello").add("h1").add([10, 20, 30, 4, 50]).add(() => {
    return "I am arrow function"
}).add({name: "sachin", id: "342"});
console.log(newSet);

//Delete the element:
newSet.delete(50);
console.log(newSet);

//has() Method:It is used to check if the value is present or not.It returns boolean value.
console.log(newSet.has("hello"));

//size property is used to check the size of the Set Object
console.log(newSet.size);

//Clear the Set Object:
// newSet.clear();//clear() method clears the Set Object
console.log(newSet);


//Extracting the values, from the Set Object because it takes only value.
console.log(newSet.values());//It returns SetIterator, which has to be Iterated.
//Now Iterating the Set Iterator.
for (let val of newSet.values()) {
    console.log(val);
}


//keys():keys() method is used to iterate the keys, but it will return the SetIterator which has to be Iterated.
//Here the values only act as the keys
let keyMethod = newSet.keys();
console.log(keyMethod);
for (const key of keyMethod) {
    console.log(key);
}


//values():value() method is used to iterate the values, but it will return the SetIterator which has to be Iterated.
let valueMethod = newSet.values();
console.log(valueMethod);
for (const value of valueMethod) {
    console.log(value);
}

//entries():entries() method is used to iterate the values, but it will return the SetIterator which has to be Iterated.
let entryMethod = newSet.entries();
console.log(entryMethod);
for (const entry of entryMethod) {//It returns an array of keys and values, both keys and values are same
    console.log(entry);
}


//Set() Object only takes an iterable type:
let setObj = new Set("JavaScript");
console.log(setObj);
