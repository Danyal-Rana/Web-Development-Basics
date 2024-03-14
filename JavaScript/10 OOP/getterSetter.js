// set iff get

class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    set age (age) {
        this._age = age;
    }
    get age () {
        return this._age;
    }
}

const user1 = new User ("Danyal", 12);
console.log (user1.age);