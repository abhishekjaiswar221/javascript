let sum = (a, b) => {
    return a + b;
};

let sub = (a, b) => {
    if (a > b)
        return a - b;
    return b - a;
};

let multiply = (a, b) => {
    return a * b;
}

let demo = () => {
    console.log("I am demo function");
}

let ar = [10, 20, 30, 40, 50];

let obj = {
    name: "sachin tichkule",
    id: 1234
};
//We export the data only in the form of object in common js module.The data can be of any type.
module.exports = {
    sub, sum, multiply, demo, ar, obj
};