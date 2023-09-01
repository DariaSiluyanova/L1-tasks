// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
//     - 1.вычисление N-го числа в ряду Фибоначчи
//     - 2.вычисление всех чисел в ряду Фибоначчи до числа N
//     - 3.вычисление N-го простого числа
//     - 4.вычисление всех простых чисел до числа N
const MathX = {
    aNum: 1, 
    bNum: 1,

    /**
     * 1.
     * function, вычисление N-го числа в ряду Фибоначчи
     * @param {number} number 
     * @returns {number}
     */
    fibN(number) {
        /**задаем первые числа последовательности */
        let aNum = this.aNum
        let bNum = this.bNum
        /**делаем цикл, начинающийся с 3 числа последовательности, так как первые два заданы в начальных условиях*/
        for (let i = 3; i < number + 1; i++) {
            let cNum = aNum + bNum;
            aNum = bNum
            bNum = cNum
        }
        /*возвращает bNum, так как это последнее присвоение значения в цикле */
        return bNum
    },

   /**
    * 2.
    * function, вычисление всех чисел в ряду Фибоначчи до числа N (включительно)
    * @param {number} число N
    * @returns {number}
    **/ 
    fibByN(number) {
        let first = this.aNum
        let sum = first
        let i = 2

        if(number === 1) {
            return sum
        }

        while(this.fibN(i) !== number) {
            sum += this.fibN(i)
            i++
        }

        return sum + number
    },
    /**
    * function, проверка на простое число
    * @param {number} N-e простоe числo
    * @returns {number} 
    **/ 
    numIsSimple(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return 0
            }
        }
        return number
   },
   /**
    * function, создающая array простых чисел
    * @param {number} длина array
    * @returns {array} 
    **/ 
    simpleArr(number) {
        let arr = []
        for (let i = 2; arr.length < number; i++) {
            if (this.numIsSimple(i)) {
                arr.push(this.numIsSimple(i))
            }
        }
        return arr
    },

    /**
    * 3.
    * function, вычисление N-го простого числа
    * @param {number} N-e числo
    * @returns {number} 
    **/ 
    simpleNum(number) {
        let simpleArr = this.simpleArr(number)
        return simpleArr[number - 1]
    },

    /**
     * 4.
     * function, вычисление всех простых чисел до числа N (включительно)
     * @param {number}, число N
     * @return {number}
     */

    simpleSum(number) {
        let sum = 0
        let arr = []
        for (let i = 2; i < number + 1; i++) {
            if (this.numIsSimple(i)) {
                arr.push(this.numIsSimple(i))
            }
        }
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
}

console.log(MathX.fibN(4))
console.log(MathX.fibByN(55))
console.log(MathX.simpleNum(11))
console.log(MathX.simpleSum(11))