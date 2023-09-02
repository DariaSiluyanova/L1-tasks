/**
 * Разработайте функцию преобразования JSON в связный список. На входе
функция должна получать JSON, содержащий список объектов, на выходе
объект, представляющий из себя односвязный список
 */

const people = { 
        "first": {   
            "firstName" : "John", 
            "lastName" : "Doe",
            "age" : "23" 
        }, 
        "second": {   
            "firstName" : "Mary",
            "lastName" : "Smith",
            "age" : "32" 
        },
        "third" : { 
            "firstName" : "Sally",
            "lastName" : "Green",
            "age" : "27" 
        },
        "fourth": {
            "firstName" : "Jim", 
            "lastName" : "Galley",
            "age" : "41"
        },
        "fifth": {
            "firstName" : "Jim", 
            "lastName" : "Galley",
            "age" : "41"
        },
}

class LinkedListNode {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }

    append(value) {
        const newNode = {data: value, next: null}
        
        if(this.tail) {
            this.tail.next = newNode
        }
        
        if(!this.head) {
            this.head = newNode
        }

        this.next = newNode
    }
};  

/**Проблема в том, что каждую итерацию создается новый список, поэтому в итоге,
 *  в список входит только последний и 1+2 объект/ объект перезаписывается?
 */
function makeList (json) {
    let list = new LinkedListNode()
    for (let obj in json) {
        console.log(list)
        list.append(obj)
    }
    return list
}

console.log(makeList(people))