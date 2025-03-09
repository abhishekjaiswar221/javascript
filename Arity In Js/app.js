// Parameters passed inside the function is known as "Arity in Js".

//1.Unary Function:
function demo1(a) {
    console.log(a);
    console.log("Unary Function");
}

demo1(10);

//2.Binary Function:
function demo2(a, b) {
    console.log(a, b);
    console.log("Binary Function");
}

demo2(10, 20);

//3.Ternary Function:
function demo3(a, b, c) {
    console.log(a, b, c);
    console.log("Ternary Function");
}

demo3(10, 20, 30);

//4.N-Ary Function: Four or more parameter passed inside the function is known as N-Ary Function.

function demo4(a, b, c, d) {
    console.log(a, b, c, d);
    console.log("N-Ary Function");
}

demo4(10, 20, 30, 40);
