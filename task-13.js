// Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте
// подклассы, представляющие различные фигуры, такие как прямоугольник, круг
// и треугольник. Реализуйте методы расчета площади и периметра для каждой
// фигуры

class Shape {
    constructor(width, height) {
        this.width = width,
        this.height = height
    }

    countSquare() {
        let square = this.width * this.height
        return `Площадь равна ${square}`
    }

    counterPerimeter() {
        let perimeter = this.width*2 + this.height*2
        return perimeter
    }
};


class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
        this.pi = Math.PI
    }

    countSquare() {
        return `Площадь круга равна ${Math.floor(this.pi * this.radius**2)}`
    }
}


let rectangle = new Shape (14, 15)
console.log(rectangle.countSquare())

let circle = new Circle(10)
console.log(circle.countSquare())