let getDetails = localStorage.getItem("uName");
console.log(typeof getDetails);
let res = JSON.parse(getDetails);
console.log(res);