class Node {
    constructor(data) {
        this.data = data;
        this.next = null;  // Pointer to the next node
    }
}

class CircularLinkedList {
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
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head; // Make it circular
        }
    }

    // Method to display the list (since it's circular, we'll stop when we get back to the head)
    display() {
        if (!this.head) return console.log("List is empty");

        let current = this.head;
        let result = "";
        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== this.head);
        console.log(result + "(head)");
    }
}

// Example usage
let list = new CircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 -> 20 -> 30 -> (head)
