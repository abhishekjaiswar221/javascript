class Shape {
    shape;

    constructor(shape) {
        this.shape = shape;
    }

    getArea() {
        return "Area not found";
    }
}

class Circle extends Shape {
    radius;

    constructor(shape, radius) {
        super(shape);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

let S1 = new Shape("Rectangle");
console.log(S1.getArea());

let C1 = new Circle("Circle", 10);
console.log(C1.getArea());
