let result = []
const people = [
    {name:"Shyam", email:"shyamjaiswal@gmail.com"},  
    {name:"Bob", email:"bob32@gmail.com"},  
    {name:"Jai", email:"jai87@gmail.com"}  
] 

//"переформатируем" JSON формат в обычный массив
const data = JSON.parse(JSON.stringify(people))
// Разработайте функцию преобразования JSON в связный список. На входе
// функция должна получать JSON, содержащий список объектов, на выходе
// объект, представляющий из себя односвязный список.


class Node { 
    //конструктор класса связного списка
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    
    toString() {
        return `${this.value}`
    }
}

//создаем класс для листа с узлами
class LinkedList {
    //по умолчанию
    constructor() {
        this.head = null
        this.tail = null
    }

    //метод добавления нового элемента в конец списка
    addNode(value) {
        let newNode = new LinkedList(value);
    
        //в случае, если ещё не было узлов списка, создаем первый 
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode; 
            return this 
        } 
        
        this.tail.next = newNode;
        this.tail = newNode
        return this
    }
}

function formateJSON() {
        let newList = new LinkedList()
        let i = 0
        data.forEach(element => {
        newList.addNode(element)
        console.log(newList)
    }); 
    return newList
}

//тут я подзастряла, не могу вывести значения json в список
console.log(formateJSON())