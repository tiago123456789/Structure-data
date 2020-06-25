class List {

    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
        this.numberCharactersLessElement = null;
    }

    append(element) {
        const numberCharactersNewElement = element.toString().length;
        const isNewElementLess = this.numberCharactersLessElement == null || (numberCharactersNewElement < this.numberCharactersLessElement);
        if (!isNewElementLess) {
            return;
        }

        this.dataStore[this.listSize++] = element;
        this.numberCharactersLessElement = numberCharactersNewElement;
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
list.append("tiago");
list.append("rosa");
list.append("da");
list.append("costa")
list.append("a");
list.append("12")
console.log(list.toString());