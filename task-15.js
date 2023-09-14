// Задача на асинхронность: напишите асинхронную функцию, которая использует
// ключевое слово await для ожидания выполнения других асинхронных операций,
// и возвращает результат выполнения.

async function test() {
    //сымитируем сервер и выведем в консоль результат ответа сервера
    let promise = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("end"), 2000)
    });
    
    let result = promise

    console.log(result)
}

test();