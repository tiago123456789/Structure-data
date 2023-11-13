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
        const newHead = new Node(value)
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            const oldHead = this.head;
            newHead.next = oldHead;
            newHead.previous = null;
            this.head = newHead;
        }
        this.length++;
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) return false;
        node.value = value;
        return true;
    }
    
    get(index) {
        if (index < 0 || index > this.length) { 
            return null;
        }

        const isGreatherThanHalftOfTotal = index >= (this.length / 2)
        if (isGreatherThanHalftOfTotal) {
            let currentNode = this.tail
            for (let i = this.length; i > 0; i -= 1) {
                if (i === index) {
                    return currentNode;
                }

                currentNode = currentNode.previous
            }
        } else {
            let currentNode = this.head
            for (let i = 0; i < this.length; i += 1) {
                if (i === index) {
                    return currentNode;
                }

                currentNode = currentNode.next
            }
        }
    }

    insert(index, value) {
        const nodeFound = this.get(index - 1)
        if (index === 0) {
            this.unshift(value)
        } else if (index === this.length) {
            this.push(value)
        } else if (nodeFound) {
            const newNode = new Node(value);
            newNode.next = nodeFound.next;
            newNode.previous = nodeFound.next.previous;
            nodeFound.next = newNode
            this.length++
        } else {
            return false;
        }

        return true;
    }

    remove(index) {
        const nodeFound = this.get((index -1))
        if (index < 0 && index >= this.length) {
            return undefined;
        } else if (index === 0) {
            return this.shift();
        } else if (index === (this.length - 1)) {
            return this.pop();
        }

        if (nodeFound) {
            const nodeToRemove = nodeFound.next;
            nodeFound.next = nodeToRemove.next;
            if (nodeFound.next) {
                nodeFound.next.previous = nodeToRemove.previous;
            }
            this.length--;
            return nodeToRemove;
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

// dll.insert(4, 11)
console.log(dll.head.value)
console.log(dll.head.next.value)
console.log(dll.head.next.next.value)
console.log(dll.head.next.next.next.value)

dll.remove(2)

console.log("#################################")
console.log("#################################")

console.log(dll.head.value)
console.log(dll.head.next.value)
console.log(dll.head.next.next.value)


// dll.remove(3)

// console.log("#################################")
// console.log("#################################")

// console.log(dll.head.value)
// console.log(dll.head.next.value)

// dll.remove(1)

// console.log("#################################")
// console.log("#################################")

// console.log(dll.head.value)
// console.log(dll.head.next.value)


// dll.remove(0)

// console.log("#################################")
// console.log("#################################")

// console.log(dll.head.value)

// console.log(dll.head.next.next.next.value)

// console.log(dll.head.next.next.next.next.value)





