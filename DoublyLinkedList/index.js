class Node {

    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous
    }


}

class DoubleLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;

        const oldTail = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return oldTail
        } 

        const newTail = oldTail.previous;
        this.tail = newTail;
        this.tail.next = null;

        this.length--;
        return oldTail;
    }
    
    shift() {
        if (!this.head) return undefined;

        const oldHead = this.head
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return oldHead;
        }

        const newHead = oldHead.next;
        this.head = newHead;
        this.head.previous = null;
        this.length--;
        return oldHead;
    }

    unshift(value) {
        if (!this.head) return undefined;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = new Node(value)
            const oldHead = this.head;
            newHead.next = oldHead;
            newHead.previous = null;
            this.head = newHead;
            this.length++;
        }
       
    }
}

const dll = new DoubleLinkedList();

dll.push(1)
dll.push(2)
dll.push(3)

// dll.pop();
// dll.pop();

// dll.shift();

dll.unshift(10)


console.log(dll)

