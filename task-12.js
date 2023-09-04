// Задача на работу с объектами: создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как: название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

const book = {
    name: "Crime and Punishment",
    autorName: "Fyodor", 
    autorSecondName: "Dostoevsky",
    yearOfPublishment: "1866",

    changeName: function(name, autorName, autorSecondName, year) {
        this.name = name, 
        this.autorName = autorName, 
        this.autorSecondName = autorSecondName, 
        this.yearOfPublishment = year
    },

    getName: function() {
        return `Название: "${this.name}", Автор: ${this.autorName} ${this.autorSecondName}, Год издания: ${this.yearOfPublishment}`
    }
}

console.log(book.changeName("Mcyri", "Mihail", "Lermontov", 1839))
console.log(book.getName())