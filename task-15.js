// Задача на асинхронность: напишите асинхронную функцию, которая использует
// ключевое слово await для ожидания выполнения других асинхронных операций,
// и возвращает результат выполнения.

async function test() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("end"), 2000)
    });
    
    let result = await promise

    console.log(result)
}

test();