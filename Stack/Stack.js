
class Stack {

    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    clear() {
        this.top = 0;
    }

    length() {
        return this.top;
    }
}

const stack = new Stack();
stack.push("David");
stack.push("Raymond");
stack.push("Bryan");
console.log(stack.length());
console.log(stack.peek());
stack.pop();
console.log(stack.peek());