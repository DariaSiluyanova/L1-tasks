// Задача о замыканиях и области видимости: напишите функцию, которая
// возвращает другую функцию. Внутренняя функция должна иметь доступ к
// переменной, определенной во внешней функции, даже после того, как внешняя
// функция завершила свое выполнение.

function counterPlus() {
    let counter = 0;

    return function() {
        return counter++
    }
}

let count = counterPlus()
console.log(count()) //создается новая обл видимости для counter()
console.log(count()) //поэтому счетчик не сбрасывается в 0
console.log(count()) //для counterPlus() же область видимости сохраняется
                     //потому и идет нарастание переменной объявленной внутри counterPlus()