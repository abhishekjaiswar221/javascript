let f = prompt("Enter the Number:")
let a = 0;
let b = 1;
for (let i = 0; i <= f; i++) {
    let c = a + b;
    if (c <= f) {
        console.log(c + " ");
        a = b;
        b = c;
    }
} 