class Node {
    constructor(data) {
        this.data = data;
        this.next = null;  // Pointer to the next node
        this.prev = null;  // Pointer to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Method to add a new node at the end
    append(data) {
        let newNode = new Node(data);
        
        if (!this.head) {
            // If the list is empty, the new node is both the head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Attach the new node at the end of the list
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Method to display the linked list from head to tail
    displayForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // Method to display the linked list from tail to head
    displayBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        console.log(result + "null");
    }
}

// Example usage
let list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.displayForward();  // Output: 10 <-> 20 <-> 30 <-> null
list.displayBackward(); // Output: 30 <-> 20 <-> 10 <-> null
