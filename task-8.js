// Задача о замыканиях: напишите функцию, которая будет принимать массив
// функций и возвращать новую функцию, которая вызывает каждую функцию в
// этом массиве и возвращает массив результатов, полученных после вызова
// каждой функции.
var array = [
    function() { return "first" },
    function() { return "second" },
    function() { return "third" },
    function() { return "fourth" }
]

/**функция возвращает итоговый массив, как вернуть коллекцию на каждой итерации я так и не придумала */
function makeCounter(array) {
    let collection = []

    function result(item) {
        return item
    }

    function print() {
        return collection
    }

    for (let i = 0; i < array.length; i++) {
        let item = result(array[i]())
        collection.push(item)
        console.log(print())
    } 
}
makeCounter(array)