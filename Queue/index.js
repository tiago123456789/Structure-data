// Queue is data structure where first item added is first item to remove. The FIFO(last in first out)
// For queue you can use array structure.
// push() -> add new item in final
// pop()  -> remove item in head

// BIG O of queues:
// push -> O(1)
// pop  -> O(1)
// Search -> O(n)
// Access -> O(n)
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {

    constructor(
    
    ) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            const oldLast = this.last;
            oldLast.next = newNode;
            this.last = newNode;
            this.last.next = null;
        }
        this.size++;
    }

    pop() {
        const newFirst = this.first.next;
        if (this.size === 0) return undefined;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const newFirst = this.first.next;
            this.first = newFirst;
        }
        this.size--;
        return newFirst.value;
    }

    getSize() {
        return this.size;
    }
}

const queue = new Queue();

queue.push("First")
queue.push("Second")
queue.push("Third")

console.log(queue.first.value)
console.log(queue.first.next.value)
console.log(queue.first.next.next.value)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

queue.pop()

console.log(queue.first.value)
console.log(queue.first.next.value)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

// queue.pop()

// console.log(queue.first.value)

// console.log(queue.pop())








