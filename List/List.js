class List {

    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    find(element) {
        for (let indice = 0; indice < this.dataStore.length; indice++) {
            if (this.dataStore[indice] == element) {
                return i
            }
        }

        return -1;
    }

    remove(element) {
        const position = this.find(element);
        if (position == -1) {
            return false;
        }

        this.dataStore.splice(position, 1);
        --this.listSize;
    }

    length() {
        return this.listSize;
    }

    toString() {
        return this.dataStore;
    }

    clear() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    previous() {
        --this.pos;
    }

    next() {
        if (this.pos < this.end()) {
            ++this.pos
        }
    }

    currentPosition() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

};

const list = new List();
list.append("John");
list.append("Mary");
console.log(list.toString());