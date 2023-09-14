let result = []
fetch("https://jsonplaceholder.org/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    let result = Array.from(data)
    let node = new Node()
    result.forEach((element) => {
        node.addNode(element)
    })
    console.log(node)
})


class Node { 
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addNode(value) {
        let node = new Node(value); //creating the node using class Node
    
        if (this.length === 0) {
            this.head = node; // If there are no nodes 
            
        } else {
            let current = this.head;
    
            while(current.next) {
                current = current.next;
            }
    
            current.next = new Node(value);
        }
        this.length++;
    }
}
