// 16. Задача на модули и использование внешних библиотек: напишите модуль,
// который экспортирует функцию для работы с датами. Внутри модуля
// используйте внешнюю библиотеку Moment.js для удобной работы с датами.
import moment from 'moment';

/**
 * функция, приводящая дату к одному виду
 * @param {number} date 
 * @param {string} location 
 * @returns {string} date
 */
export function formatDate(date, location) {
    function locale(){
        if(location === "Россия") {
            moment.locale("ru")
        }
        if(location === "Англия") {
            moment.locale("en-au")
        }
    }
    locale()

    return moment(date).format("DD MMMM YYYY HH:mm");
}