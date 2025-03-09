class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        //Method
        return this.name;
    }
}

let P1 = new Person("sachin", 20);
console.log(P1);
console.log(P1.getName());

class Employee extends Person {
    id;
    sal;

    constructor(name, age, id, sal) {
        super(name, age);
        this.id = id;
        this.sal = sal;
    }
}

let E1 = new Employee("shashi", 35, 21, 20000);
console.log(E1);
console.log(E1.getName());
