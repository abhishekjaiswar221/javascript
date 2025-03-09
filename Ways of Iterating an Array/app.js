let ar = [10, 20, 30, 40, 50, 60, 70, 80, 90];


//1.for loop:
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i] + 5);
}
//Iterating In Reverse Order:
for (let j = ar.length - 1; j > 0; j--) {
    console.log(ar[j]);
}

console.log("======================================================");
//2. while loop:
let n = 0;
while (n < ar.length) {
    console.log(ar[n]);
    n++;
}

console.log("======================================================");
//3.for-of loop:
for (let val of ar) {
    console.log(val);
}

console.log("======================================================");
//4.for-in loop:
for (let index in ar) {
    console.log(index);
}

console.log("======================================================forEach");
//forEach():
ar.forEach((val, index, ar) => {//Comment lines to view the changes
    console.log(val);
    console.log(index);
    console.log(ar);
})

console.log("======================================================Map");
//5.map():
let map = ar.map((val, index, ar) => {//Comment lines to view the changes
    // console.log(val);
    // console.log(index);
    // console.log(ar);
    return [val, index, ar];
})
console.log(map);

console.log("======================================================");
//6.keys():
let keys = ar.keys();
console.log(keys);

for (let index of keys) {
    console.log(index);
}

console.log("======================================================");
//7.values():
let values = ar.values();
console.log(values);

for (const val of values) {
    console.log(val);
}

console.log("======================================================");
//8.entries():
let entries = ar.entries();
console.log(entries);

for (const ent of entries) {
    console.log(ent);
}