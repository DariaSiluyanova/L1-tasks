const palindrom = "аргентина манит негра";

/**
 * function, проверяет является ли строка палиндромом
 * @param {string} palindrom
 * @returns {string} 
 */
let checkPalindrom = function(palindrom) {
    //проверка на тип введеного параметра
    if (typeof palindrom === "string") {
        //деление палиндрома по пробелу и объединение в общую строку
        const arr = palindrom.split(" ").join("")
        //два указателя - на начало и на конец
        let first = 0
        let second = arr.length - 1

        //цикл идет пока начало и конец не совпадут, 
        //в случае успеха - возвращается сообщение о том, что 
        //строка палиндром
        while (first !== second) {
            if (arr[first] === arr[second]) {
                first++
                second--
            } else {
                return "this is not palindrom"
            }
        }
        return "this is palindrom"
    } else {
        //в случае если параметр не строка - выводится сообщение
        //о том, что ввести нужно строку
        return "enter the string"
    }
}

console.log(checkPalindrom(palindrom))