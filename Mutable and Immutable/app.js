"use strict";
//Primitive Datatype-->Immutable
// const num = 20;
// num=30;
// console.log(num);

//Non-Primitive Datatype-->Mutable
const ar = [10, 20, 30, 40, 50];
console.log(ar);
ar[2] = 300;
console.log(ar);

const obj = {
    id: 1,
    name: "virat",
    percentage: 89
}
console.log(obj);
// obj.name="abhi";
obj["name"] = "sachin";
console.log(obj);

//Understand-------------------------------------------------------------------->
//Mutable:Mutability refers to data types that can be accessed and changed after they've been created and stored in memory.
//Immutable:Immutability, on the other hand, refers to data types that you can't change after creating them – but that you can still access in the memory.