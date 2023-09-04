// Реализовать функцию конвертации JSON в строку

function makeJson(elem){
    /**для массивов */
    if (Array.isArray(elem)) {
        for(let i = 0; i < elem.length; i++) {
            /**если Object.prototype.constructor внутри массива строка - оборачиваем "" */
            if (elem[i].constructor === String || typeof elem[i] === "string") {
                elem[i] =`"${elem[i]}"`
            }
            elem[i] = `${elem[i]}`
        }
        return elem
    }
    /*для объектов */
    else if (typeof elem === "object" && Object.entries(elem).length !== 0) {
        /*форматирум строковые ключи и значения объекта*/
        let stringObj = Object.fromEntries(
            Object.entries(elem).map(item => {
                if (typeof item[0] === "string") {
                    item[0] = `"${item[0]}"`
                }
                if (typeof item[1] === "string") {
                    item[1] = `"${item[1]}"`
                }
                return [item[0], item[1]]
            })
        )
        return stringObj
    } 
    /**для объектов не содержащих явно пару ключ-значение */
    else if (typeof elem === "object" && Object.entries(elem).length === 0) {
        elem = `"${elem}"`
        return elem
    }   
} 

const objTest = {
    a: 'somestring',
    b: 42,
    c: false,
};
const test = new Date(1906, 0, 2, 15, 4, 5)
const test2 = [new Number(3), new String("false"), new Boolean(false)]

console.log(makeJson(objTest))
console.log(makeJson(test))
console.log(makeJson(test2))