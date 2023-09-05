// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями. JSON.parse()
const object = '{"username": "admin", "City": "", "Age": 26, "Image": "/images/static/imagination/cb8b8fc3-b450-4338-80b5-c8a1b93ec58a_yb8VU8b.jpg", "Sex": "M"}'
const array = '["username": "admin", "City": "", "Age": null]'
const number = -10
const testItem = true
const testItem2 = false
const testItem3 = null

const stringToJson = (string) => {
    //return Object, Array, string, number, boolean, or null
    if(typeof string === "string") {
        //object/array
        //проверка скобок 
        if (
            (string.slice(0, 1) === "[" && string.slice(-1) === "]") ||
            (string.slice(0, 1) === "{" && string.slice(-1) === "}")             
        ) {
            //проверка разделителей внутри объекта
            //строка без скобок
            let substr = string.substring(1, string.length - 1)
            //массив пар ключ - значение
            let arrItems = substr.split(",")
            for (let i = 0; i < arrItems.length; i++) {
                //проверка записи ключ: значение 
                if (!arrItems[i].includes(":")) {
                    return false
                }
                //проверка каждого ключа и значения 
                let item = arrItems[i].split(":")
                console.log(!checkQuotes(item[1]))
                if (
                    //если строка
                    typeof item === "string" &&
                    !checkQuotes(item[0]) ||
                    !checkQuotes(item[1])
                ) {
                    return false
                }
                //если boolean/null
                    else if (checkBoolNull(item[1])) {
                        return true
                }
                    else if (checkNums(item[0]) || checkNums(item[1])) {
                        return true
                }
            }
        }
    }
    //true - если number
    function checkNums(item) {
        if (item !== isNaN) {
            return true
        }
        return false
    }
    
    //true - если boolean or null 
    function checkBoolNull(item) {
        if (item === true || item === false || item === null) {
            return true
        }
        return false
    }
    //true, если строка начинаeтся и заканчиваeтся - \"
    function checkQuotes(item) {
        let pattern = /("([^"]|"")*")/g
        if (item.trim().startsWith("\"") && item.trim().endsWith("\"") && pattern.test(item.trim())) {
            return true
        }
        return false
    }    
}

console.log(stringToJson(object))

