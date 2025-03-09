var aGlobal = "This is global scope";

function outer() {
    let a = 10;
    console.log("Hello this is Outer Function");
    console.log(a);
    console.log(aGlobal);//Lexical Scoping or Scope Chaining

    function inner1() {
        console.log("Hello this is Inner1 Function");
        let b = 20;
        console.log(a);//10-->Lexical Scoping or Scope Chaining
        console.log(b);//20
        let c = 2000;
        console.log(c);//2000
        console.log(aGlobal);//Lexical Scoping or Scope Chaining

        function inner2() {
            let d = "Hello this is Inner2 Function";
            console.log(d);//Hello this is Inner2 Function
            console.log(c);//2000-->Lexical Scoping or Scope Chaining
            console.log(aGlobal);//Lexical Scoping or Scope Chaining
        }

        return inner2();//Return's or transfers the control to the "inner2()" function.
    }

    return inner1();//Return's or transfers the control to the "inner2()" function.
}

outer();//let res = outer()()(); //It can be used if we are not calling the function inside the {outer()-->Main Function} function.
