let emp = {
    id: 100,
    name: "abhi",
    details() {
        return `my name is ${this.name} and id is ${this.id} and place is ${this.place} and pinCode is ${this.pinCode}`;
    }
}

console.log(emp.details());

let address = {
    place: "Uttar Pradesh",
    pinCode: 221304
}

let res = emp.details.bind(address);
console.log(res());