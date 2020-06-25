const GENDER = {
    FEMALE: "F",
    MALE: "M"
}

class Person {

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }
}


class List {

    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    findByGender(gender) {
        return this.dataStore.filter(item => item.getGender() == gender);
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

const p1 = new Person("t", GENDER.FEMALE);
const p2 = new Person("t", GENDER.FEMALE);
const p3 = new Person("t", GENDER.FEMALE);
const p4 = new Person("t", GENDER.FEMALE);
const p5 = new Person("t", GENDER.FEMALE);
const p6 = new Person("t", GENDER.FEMALE);
const p7 = new Person("t", GENDER.MALE);
const p8 = new Person("t", GENDER.MALE);
const p9 = new Person("t", GENDER.MALE);
const p10 = new Person("t", GENDER.MALE);


const list = new List();
list.append(p1);
list.append(p2);
list.append(p3);
list.append(p4);
list.append(p5);
list.append(p6);
list.append(p7);
list.append(p8);
list.append(p9);
list.append(p10);

console.log(list.findByGender(GENDER.FEMALE));
console.log(list.findByGender(GENDER.MALE));
