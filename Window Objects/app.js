//1.Time Object

//i.setTimeout():Its a Higher Order Function
setTimeout(() => {
    document.write("This is setTimeout()");
}, 5000);

//Example 2:
let resTimeout1 = window.setTimeout(function (a, b, c, d, e) {
    console.log(a, b, c, d, e);
    document.write("Set time-out function 1 " + "<br/>")
}, 1000, 10, 20, 30, 40, 50);

let resTimeout2 = window.setTimeout(function (a, b, c, d, e) {
    console.log(a, b, c, d, e);
    document.write("Set time-out function 2 " + "<br/>")
}, 5000, 10, 20, 30, 40, 50);

let resTimeout3 = window.setTimeout(function (a, b, c, d, e) {
    console.log(a, b, c, d, e);
    document.write("Set time-out function 3 " + "<br/>")
}, 3000, 10, 20, 30, 40, 50);

console.log(resTimeout1);
console.log(resTimeout2);
console.log(resTimeout3);

//clearTimeout:
let isLoading = true;
if (isLoading) {
    clearTimeout(resTimeout1);
}
//ii.setInterval()
//Example 1:
let Interval = setInterval(() => {
    document.write("hello everyone" + "<br/>");
}, 1000);

//clearInterval():
setTimeout(() => {
    clearInterval(Interval);
}, 5000);

//Example 2:
let resSetInterval = window.setInterval(() => {
    document.write("setInterval function" + "<br/>");
}, 1000);
console.log(resSetInterval);

setTimeout(() => {
    clearInterval(resSetInterval);
}, 6000);
