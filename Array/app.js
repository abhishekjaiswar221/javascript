//1. Literal Way
let arr = [10, 43n, "str", [10, 20], true, NaN, null, undefined, (a) => a, function () { return 100 }, { name: "shashi", id: 123 }];//Heterogenous Array 
console.log(arr);
console.log(arr[9]());//To invoke the function present inside the array we can call the function by its index and "()".

//2. Array Constructor(Using new keyword to create array object and invoking the array constructor.)
let arr1 = new Array("string", true, undefined, () => { console.log("hello") });
arr1[2] = 10;//Updating the array.
console.log(arr1);

let arr2 = new Array(10);//-->The single (number datatype) array element will be considered as the length of the array to avoid that we should give more than one value in the array if the array element is in number datatype.
console.log(arr2);
console.log(arr2[3]);//undefined
console.log(arr2.length);//"length" property to check the array length.

let arr4 = new Array();
arr4[0] = 30;
arr4[1] = 40;
arr4[3] = 50;
arr4[4] = 60;
console.log(arr4);

//3. Array.of();-->To overcome the disadvantage of array constructor:

let arr3 = Array.of(10, 20, 30, 40);
console.log(arr3);

delete arr3[2];//Deleting the array elements using "delete" property
console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
