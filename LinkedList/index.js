class Node {

    constructor(value, next) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value, null)
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode

        }
        this.length += 1
        return this
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }

    unshift(value) {
        const newNode = new Node(value, null)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
        }

        this.length++;
        return this;
    }

    shitf() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return oldHead
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }
        return current;
    }

    get(index) {
        if (index < 0 && index >= this.length) {
            return null;
        }

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
            if (!current) {
                return null
            }
        }

        return current
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.value = value;
        return true
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.tail.next = new Node(value)
        } else if (index === 0) {
            this.unshift(value)
        } else {
            const nodeReturn = this.get((index - 1))
            const oldNext = nodeReturn.next;
            const newNode = new Node(value);
            nodeReturn.next = newNode
            newNode.next = oldNext
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === (this.length - 1)) return this.pop();
        if (index === 0) this.unshift()

        const currentNode = this.get((index - 1))
        const nodeToRemove = currentNode.next;
        currentNode.next = nodeToRemove.next;
        this.length--;
        return nodeToRemove;
    }

    reverse() {
        // Original => 1 > 2 > 3 

        var node = this.head;  // 1
        this.head = this.tail; // 3
        this.tail = node;      // 1

        var next;
        var prev = null;

        for (let index = 0; index < this.length; index++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;

            // 1º | next => 2 | node.next => null | prev => 1 | node => 2
            // 2º | next => 3 | node.next => 1    | prev => 2 | node => 3 
        }

        return this;
    }
}

const linkedList = new LinkedList();

linkedList.push("1")
linkedList.push("2")
linkedList.push("3")

// linkedList.push("4")
// linkedList.push("5")
// linkedList.push("6")

// console.log("@@@@@@@@@@@@@@@@@@")

// linkedList.remove(2)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")

// linkedList.remove(2)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")


// linkedList.remove(2)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")

// linkedList.remove(0)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")


// linkedList.remove(1)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")


// linkedList.remove(1)

// linkedList.traverse()

// console.log("@@@@@@@@@@@@@@@@@@")

console.log(
    linkedList.reverse()
)

// linkedList.traverse()

// console.log(
//     linkedList.remove(0)
// )

// linkedList.traverse()

// console.log(
//     linkedList.get(0)
// )
// console.log(
//     linkedList.get(1)
// )
// console.log(
//     linkedList.get(2)
// )

// console.log(
//     linkedList.set(2, "HOW ARE YOU DOING")
// )

// console.log(
//     linkedList.get(2)
// )



// console.log(
//     linkedList.set(20, false)
// )

// console.log(linkedList.unshift("1"))
// console.log(linkedList.unshift("12"))
// console.log(linkedList.unshift("123"))


// console.log(linkedList.shitf())
// console.log(linkedList.shitf())
// console.log(linkedList.shitf())
// console.log(linkedList.shitf())



// console.log(
//     linkedList.pop()
// )
// console.log(
//     linkedList.pop()
// )
// console.log(
//     linkedList.pop()
// )





