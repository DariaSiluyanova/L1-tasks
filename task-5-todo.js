let result = []
const people = [
    {name:"Shyam", email:"shyamjaiswal@gmail.com"},  
    {name:"Bob", email:"bob32@gmail.com"},  
    {name:"Jai", email:"jai87@gmail.com"}  
] 

//переформатируем в JSON формат
const data = JSON.stringify(people)

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
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode; 
            return this 
        } else {
           this.tail.next = newNode;

           this.tail = newNode
           return this
        }
    }

    toArray() {
        const nodes = []

        let currentNode = this.heard

        while(currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }

        return nodes
    }
}

let newList = new LinkedList()
console.log(people.toArray())