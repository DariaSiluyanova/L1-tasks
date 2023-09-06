'use strict';
// Задача на промисы: напишите функцию, которая принимает URL изображения и
// возвращает промис, который разрешается с данными об изображении, когда
// оно загружено. Когда говорится "промис разрешается с данными об
// изображении", это означает, что промис должен быть успешно выполнен
// (resolved) с данными об изображении после того, как изображение будет
// загружено.

function getImage(url) {
    return new Promise ((resolve, reject) => {
        try {
            const image = `"Промис разрешается с данными об изображении url:" ${url}`
            resolve(image)
        } catch(error) {
            reject(new Error(error))
        }
    })
}


console.log(getImage("https://curious-world.ru/images/content/animals/11-2018/royal_piguin/13.jpg"))