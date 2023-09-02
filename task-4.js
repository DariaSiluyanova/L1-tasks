// Разработать функцию, изменяющую окончание слов в зависимости от падежа.
// Например:
        // ● 112 сообщения
        // ● 12 сообщений
        // ● 1 сообщение
        // ● 1024 пользователя
        // ● 1026 пользователей
        // ● 121 пользователь`
// Функцию надо упаковать в модуль.

    /**
     * function, меняющая падеж для разных числительных, поключается через node test-4.js
     * @param {number, string} число, И.П, Р.П-ед.ч, Р.П-мн.ч
     * @return {number, string}
     */
export function changeCase(number, imenitelCase, roditelCaseSingle, roditelCaseMultiple) {
    /**
     * заводим переменные word - для присвоения при соответствии условию,
     * arr - делаем array из number,
     * lastDigit - последняя цифра, preLastDigit - предпоследняя 
     */
    let word = ""
    let arr = Array.from(String(number), Number);
    let lastDigit = arr[arr.length - 1]
    let preLastDigit = arr[arr.length - 2]

    /**для чисел, оканчивающихся на 11 - 19*/
    if (preLastDigit===1) {
        word = roditelCaseMultiple
        return `${number}`+" "+`${word}`
    }
    
    function defineCase(number) {
        if(number === 1) {
            word = imenitelCase
        } else if (number === 2 || number === 3 || number === 4) {
            word = roditelCaseSingle
        } else {
            word = roditelCaseMultiple
        }
    }
    defineCase(lastDigit)
    
    return `${number}`+" "+`${word}`
}
