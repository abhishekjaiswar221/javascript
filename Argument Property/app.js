//We can use the "arguments" property to fetch the value from function calling statement
// to the function without passing the parameters inside the function.
//It returns an "Argument Property".It looks like an array, but it is an Object.

function demo() {
    let res = arguments;
    console.log(res);
    console.log(Array.isArray(res));
    let convertToAr = Array.from(res);
    console.log(convertToAr);
}

demo(10, 20, 20, 30, 50);

//length: To find the length of the parameters passed in the function we can use the "length property" in the way depicted below.

function foo() {
    console.log(a);
    console.log(foo.length);
}

foo("str", true, 1n);
