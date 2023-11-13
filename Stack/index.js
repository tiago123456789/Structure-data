// Stack is data structure where last item added is first item to remove. The LIFO(last in first out)
// For stack you can use array structure.
// And use both: pop() and push()

// BIG O of stacks:
// -> Insert O(1)
// -> Remove O(1)
// -> Searching O(n)
// -> Access O(n)

class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {

    constructor(
    
    ) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const oldFirst = this.first
            newNode.next = oldFirst;
            this.first = newNode
        }

        this.size++
    }

    pop() {
        const temp = this.first;
        if (!this.first) {
            return null
        } else if (this.size === 1) {
            this.first = null;
            this.last = null;   
        } else {
            this.first =  temp.next;
        }

        this.size--;
        return temp.value
    }

    getSize() {
        return this.size;
    }
}

const stack = new Stack()

stack.push("First")
stack.push("Second")
stack.push("Third")
stack.push("Fourth")
stack.push("Fifth")
stack.push("Sixth")


console.log(stack.getSize())
console.log(stack.first.value)
console.log(stack.first.next.value)
console.log(stack.first.next.next.value)
console.log(stack.first.next.next.next.value)
console.log(stack.first.next.next.next.next.value)
console.log(stack.first.next.next.next.next.next.value)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log(">>>>>>>", stack.pop())

console.log(stack.first.value)
console.log(stack.first.next.value)
console.log(stack.first.next.next.value)
console.log(stack.first.next.next.next.value)
console.log(stack.first.next.next.next.next.value)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log(">>>>>>>", stack.pop())

console.log(stack.first.value)
console.log(stack.first.next.value)
console.log(stack.first.next.next.value)
console.log(stack.first.next.next.next.value)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log(">>>>>>>", stack.pop())

console.log(stack.first.value)
console.log(stack.first.next.value)
console.log(stack.first.next.next.value)







