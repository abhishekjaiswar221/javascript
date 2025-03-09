//1. push():It adds the array elements at the end of the array.
let fruits = ["banana", "apple", "mango", "pineapple"];
console.log(fruits);

let val1 = fruits.push("guava", "cherry");
console.log(val1);
console.log(fruits);
console.log("=============================================");

//2.unshift():It adds the array element at the start of the array.It modifies the original array.
let ar = [10, 20, 30, 40, 50,];
console.log(ar.length);//5
console.log(ar);//(5)[10,20,30,40,50]
let val2 = ar.unshift(60, 70, 80);
console.log(ar);//(8)[60,70,80,10,20,30,40,50]
console.log(val2);
console.log("=============================================");

//3.pop():It removes the array element from the end of the array.It also modifies the original array
let val3 = ar.pop();
console.log(ar);
console.log(val3);//It returns the deleted array element.
console.log("=============================================");

//4.shift():It removes the array element from the start of the array.
val4 = ar.shift();
console.log(val4);//It returns the deleted array element.
console.log(ar);
console.log("=============================================");

//5.slice():It is used to extract a part of the array and return a new array.
let arr = [10, 20, 30, 40, 50, 60, 70, 70, 80, 90];

let res = arr.slice(2, 5);//It will not affect the array
console.log(res);
console.log(arr);

let res1 = arr.slice(-4, -1);
console.log(res1);
let res6 = arr.slice(-4);
console.log(res6);
console.log("=============================================");

//6.splice():It is used to delete the array element and add the array element at the same time.First two parameters are the index of the array element to be removed and the third parameter and rest(etc)... is used to add the new array elements. 
arr.splice(2, 0, 100, 200);//It will affect the array
console.log(arr);
console.log("=============================================");

//7.find()://It is a higher order function.
let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let res2 = arr1.find(function (n) {
    console.log(n);
    return n > 50;//It will return the first satisfied array value
})
console.log(res2);

let arNum = [10, 20, 30, 40, 50];
let findRes = arNum.find((value, index) => {
    console.log(index);
    return value > 25;
})

//8.findIndex():
let findInd = arr1.findIndex(v => v > 50);
console.log(findInd);//It will return the first satisfied index

let findIndRes = arNum.findIndex((value, index) => {
    console.log(index);
    return value > 25;
})
console.log(findIndRes);
console.log("=============================================");

//9.forEach():It modifies the original array
ar.forEach((val, index, ar) => {
    console.log(val);
    console.log(index);
    console.log(ar);
})
console.log(ar);


console.log("=============================================");
//10.filter():
//Without filter method
let array = [10, 20, 30, 40, 50, 10, 25, 15];

function filterHOF(array, cb) {
    let newAr = [];
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            newAr.push(array[i]);
        }
    }
    return newAr;
}

let result = filterHOF(array, num => num > 20);
console.log(result);
console.log(array);

//filter() method:It filters the array element based on the condition and return the new array.
// It doesn't modify the original array.
let res3 = array.filter(v => v > 20);
console.log(res3);
console.log(array);

console.log("=============================================");

//11.map():It does not affect the original array.It returns the new array-->It takes three parameters (values, index,array)
let result1 = ar.map(function (val5) {
    console.log(val5);
    return val5 * 5;
});
console.log(result1);
console.log(array);

//Example Two://See if It's necessary or not?
//  ar.map((val, index, ar) => {
//      // console.log(val);
//      // console.log(index);
//      console.log(ar);
// })

//Example Three:
let newArray = []
ar.forEach((val5, index) => {
    newArray[index] = val5 + 5;//If you change the "+" operator with, "<, >" it will return the boolean array.
})
console.log(newArray);
console.log(array);
//What is the return type of map() method ?
//Ans: Array if we give a condition (lesser than or greater than) it will return the boolean array.
// Why do we use method instead of foreach() method ?
//Ans: Because it does not modify the original array and returns a new array

console.log("=============================================");

//12.some():It returns true if the condition is satisfied(first satisfies element) otherwise it will return false.It returns the first satisfied value.
let res4 = array.some(value => {
    console.log(value);
    return value > 100;
})
console.log(res4);

console.log("=============================================");

//13.every():It returns true if the condition is satisfied for all the elements in the array otherwise it will return false, at the first element if it does not satisfy the condition.
let res5 = array.every(value => {
    console.log(value);
    return value > 30;
})
console.log(res5);

console.log("=============================================");

//14.reverse():
let array1 = [10, 20, 30, 40, 50, 10, 25, 15];
let rev = array1.reverse();
console.log(rev);

//15.join()://Takes array and converts string and joins the string.
let array2 = [10, 20, 30, 40, 50, 10, 25, 15];
let join = array2.join();
console.log(join);

//16.flat():Convert Multi-dimensional array into single dimension array.
let flatArr = [10, 20, 30, ["str", "str2", [20, 40, [true]]]];
let flatRes = flatArr.flat(4);
console.log(flatRes);

//17.sort():It takes the array as "string".
let sortAr = [9, 11, 30, 8];
//Ascending Sort:
let ascendingSort = sortAr.sort((a, b) => a - b);
console.log(ascendingSort);
//Descending Sort:
let descendingSort = sortAr.sort((a, b) => b - a);
console.log(descendingSort);

//16.reduce():It traverses from the start of the array
let productPrice = [10, 20, 30, 40, 50];

let totalPrice = productPrice.reduce((ac, cv) => {//ac-->Accumulator Value("0" is the accumulator value it can be set to any value)(Previous Value),cv-->Current Value
    console.log(ac, cv);
    return ac + cv;
}, 0);
console.log(totalPrice);

//17.reduceRight():It traverses from the end of the array
let totalPriceOfGoods = productPrice.reduceRight((ac, cv) => {//ac-->Accumulator Value("0" is the accumulator value it can be set to any value)(Previous Value),cv-->Current Value
    console.log(ac, cv);
    return ac + cv;
}, 0);
console.log(totalPriceOfGoods);

//18.concat():
let a = [10, 20];
let b = [30, 40];
let c = [50, 60];
let d = [70, 80];
let e = a.concat(b, c, d);
console.log(e);
console.log(a);

//19.isArray():It is used to check if the passed element is an array or not it returns boolean value.
let itsArr= [10,20,40,50,30,60];
console.log(itsArr);
let isArRes = Array.isArray(itsArr);
console.log(itsArr);

//20.from():It is used to convert HTML Collection and Node List into array.
let div = document.getElementsByClassName("container");
console.log(div);
let convertToArr= Array.from(div);
console.log(convertToArr);
console.log(Array.isArray(convertToArr));