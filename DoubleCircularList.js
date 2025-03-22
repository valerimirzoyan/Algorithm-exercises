class Node {
    constructor(data) {
        this.data = data;
        this.next = null;  // Pointer to the next node
        this.prev = null;  // Pointer to the previous node
    }
}

class DoublyCircularLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node at the end
    append(data) {
        let newNode = new Node(data);

        // If the list is empty, the new node points to itself
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            newNode.prev = this.head; // Circular connection
        } else {
            let current = this.head;
            // Traverse to the last node (where next points to head)
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            newNode.next = this.head; // Circular connection
            this.head.prev = newNode; // Circular connection
        }
    }

    // Method to display the list (it will circle back to the head)
    display() {
        if (!this.head) return console.log("List is empty");

        let current = this.head;
        let result = "";
        do {
            result += current.data + " <-> ";
            current = current.next;
        } while (current !== this.head);
        console.log(result + "(head)");
    }

    // Method to display in reverse order (from tail to head)
    displayReverse() {
        if (!this.head) return console.log("List is empty");

        let current = this.head.prev; // Start from the tail
        let result = "";
        do {
            result += current.data + " <-> ";
            current = current.prev;
        } while (current !== this.head.prev);
        console.log(result + "(tail)");
    }
}

// Example usage
let list = new DoublyCircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 <-> 20 <-> 30 <-> (head)
list.displayReverse(); // Output: 30 <-> 20 <-> 10 <-> (tail)
