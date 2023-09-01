const palindrom = "аргентина манит негра";

/**
 * function, проверяет является ли строка палиндромом
 * @param {string} - palindrom
 * @returns {string} 
 */
let checkPalindrom = function(palindrom) {
    if (typeof palindrom === "string") {
        const arr = palindrom.split(" ").join("")
        let first = 0
        let second = arr.length - 1
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
        return "enter the string"
    }
}

console.log(checkPalindrom(palindrom))