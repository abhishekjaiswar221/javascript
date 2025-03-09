//We use "#" symbol to make a variable private.
class Employee {
    name;
    id;
    #sal;

    constructor(name, id, sal) {
        this.name = name;
        this.id = id;
        this.#sal = sal;
    }

    setSal(n) {
        this.#sal = n;
    }

    getSal() {
        return this.#sal;
    }
}

let E1 = new Employee("Shashi", 120, 300000);
console.log(E1.name, E1.id);
E1.setSal(100000);
console.log(E1.getSal());
console.log(E1);
