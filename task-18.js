//  Подсчитать максимальный объем данных, который можно записать в
// localStorage вашего браузера.
// реализацию взяла отсюда https://arty.name/localstorage.html
// для хрома получилось 4,95 МБ

var iterationsData;

(function () {
//проверка имеется ли localStorage в текущем браузере
if (!('localStorage' in window)) {
    console.log('Your browser has no localStorage support.')
    return;
}

//создаем переменные, содержащие строки разного "удельного" веса для помещения их в localStorage и подсчета его объема
var n10b =    '0123456789'; //10байт
var n100b =   repeat(n10b, 10); //100байт
var n1kib =   repeat(n100b, 10); 
var n10kib =  repeat(n1kib, 10);
var n100kib = repeat(n10kib, 10);
var n1mib =   repeat(n100kib, 10);
var n10mib =  repeat(n1mib, 10); //1мб

//расчетный массив
var values = [n10b, n100b, n1kib, n10kib, n100kib, n1mib, n10mib];

//создадим массив из массивов, где развернем строки, для дальнейшего подсчета их колличества
iterationsData = [];
for (var majorIndex = 1; majorIndex < values.length; majorIndex++) {
    //переменные текущего и предыдущего индекса 
    var major = values[majorIndex];
    var minor = values[majorIndex - 1];
    for (var i = 1; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            iterationsData.push([major, minor, i, j]);
        }
    }
}

var index = 0;
var oldLength = 0;

/**
 * function, функция подсчета
 * @returns 
 */
function iteration() {
    var data = iterationsData[index];
    //присваеваем переменным аргументы для субмассива 
    major = data[0];
    minor = data[1];
    i = data[2];
    j = data[3];

    //подсчитаем количество строк в массиве iterationsData
    var string = repeat(major, i) + repeat(minor, j);
    var length = '' + string.length;

    //выводит результат подсчета количества строк        
    if (test(string)) {
        //продолжает подсчет
        console.log(length + ' characters were stored successfully.')
    } else {
        //возвращает результат подсчета
        console.log(oldLength + ' characters were stored successfully,  but ' + length + ' weren\'t.')
        return;
    }
    //присваивает и сохраняет промежуточный результат до следующей операции
    oldLength = length;

    //следующая итерация
    index++;
    if (index < iterationsData.length) {
        setTimeout(iteration, 0);
    } else {
        console.log(oldLength + ' characters were saved successfully, test is stopped.')
    }
}

iteration();

/**
 * function, проверяет "помещаются ли" строки на определенной итерации
 * @param {string} value 
 * @returns {boolean}
 */
function test(value) {
    try {
        localStorage.test = value;
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * function, создающая array символов для помещения в localStorage
 * @param {string} string 
 * @param {number} count 
 * @returns {array}
 */
function repeat(string, count) {
    var array = [];
    while (count--) {
        array.push(string);
    }
    return array.join('');
}
})();