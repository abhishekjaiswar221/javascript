let fruits = ["apple", "mango", "chikku", "guava", "banana", "orange", "pineapple"];

let sort = fruits.sort();
console.log(sort);


let ar = [10, 45, 12, 90, 19, 36, 69, 72, 12, 9];
console.log(ar);

//Ascending Sort
let ascendingSort = ar.sort((a, b) => a - b);
console.log(ascendingSort);

//Descending Sort
let descendingSort = ar.sort((a, b) => b - a);
console.log(descendingSort);