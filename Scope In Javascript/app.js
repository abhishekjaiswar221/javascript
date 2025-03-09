var a = 10;//Global Scope
let b = 20;//Script Scope
const c = 40;//Script Scope
console.log(a);

function scope() {
    let a = 10;//Local Scope
    const b = 100;//Local Scope
    var c = 200;//Local Scope-->We cannot use the variables declared inside the function block outside the function block.
}

scope();

{
    let x = 1000;//Block Scope-->It can not be used outside the block.
    const y = 2000;//Block Scope-->It can not be used outside the block.
    var z = 3000;//Block Scope-->It can be used outside the block.
}

console.log(z);//It will print the vale of "z" present inside the block.