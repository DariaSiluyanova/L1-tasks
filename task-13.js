// Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте
// подклассы, представляющие различные фигуры, такие как прямоугольник, круг
// и треугольник. Реализуйте методы расчета площади и периметра для каждой
// фигуры

/**
     * class, для расчета площади и периметра
     * @param {number} parameter - 1-ый параметр фигуры
     * @param {number} parameter2 - 2-й параметр фигуры
     * @returns {number}
     */
class Shape {
    constructor(parameter, parameter2) {
        this.parameter = parameter,
        this.parameter2 = parameter2
    }

    countSquare() {
        let square = this.parameter * this.parameter2
        return square
    }

    counterPerimeter() {
        let perimeter = this.parameter*2 + this.parameter2*2
        return perimeter
    }
};

/**
     * class, для рассчета круга
     * @param {number} parameter - радиус круга
     * @returns {string + number}
     */
class Circle extends Shape {
    
    constructor(parameter) {
        //расширяем конструктор
        super(parameter)
        this.pi = Math.PI
    }

    countSquare() {
        //переопределить метод для площади
        return `Площадь круга равна ${Math.floor(this.pi * this.parameter**2)}`
    }

    counterPerimeter() {
        //переопределить метод для периметра 
        let perimeter = Math.floor(2 * this.pi * this.parameter)
        return `Периметр круга равна ${perimeter}`
    }
}

/**
 * class для рассчета треугольника
 * @param {number} parameter - сторона 1
 * @param {number} parameter2 - сторона 2
 * @param {number} base - основание к которому проведена высота
 * @param {number} height -высота треугольника
 * @returns {string + number}
 */
class Triangle extends Shape {
    constructor(parameter, parameter2, base, height){
        super(parameter, parameter2)
        this.height = height
        this.base = base
    }
    
    countSquare() {
        //переопределить метод для площади 
        let square = 1/2*this.base*this.height
        return `Площадь треугольника равна ${square}`
    }

    counterPerimeter() {
        //переопределить метод для периметра 
        let perimeter = this.parameter + this.parameter2 + this.base
        return `Периметр треугольника равен ${perimeter}`
    }
}

let rectangle = new Shape (14, 15)
console.log(rectangle.countSquare())
console.log(rectangle.counterPerimeter())

let circle = new Circle(10)
console.log(circle.countSquare())
console.log(circle.counterPerimeter())

let triangle = new Triangle(13, 13, 12, 15)
console.log(triangle.countSquare())
console.log(triangle.counterPerimeter())