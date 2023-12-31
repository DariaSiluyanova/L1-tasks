/**Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае. Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя. */

let strangeNum = 28;

/**
 * function
 * @param {number} number 
 * @returns {boolean}
 */
function checkIfStrange(number) {
    //назначаем начальную сумму равной нулю
    let sum = 0
    //прибавляем делители числа к сумме
    for (let i = 1; i < number - 1; i++) {
        if (number % i === 0) {
            sum += i
        } 
    }
    //возвращаем true/false по результату суммирования внутри цикла
    if (number === sum) {
        return true
    } else {
        return false
    }
}

console.log(checkIfStrange(strangeNum))