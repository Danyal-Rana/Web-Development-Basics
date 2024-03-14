class User {
    constructor (username) {
        this.username = username;
    }
}

class Student extends User {
    constructor (username, age, mail) {
        super (username);
        this.age = age;
        this.mail = mail;
    }

    toString () {
        console.log (`Name is ${this.username}, age is ${this.age} and email is ${this.email}`);
    }
}

const s = new Student ("Danyal", 12, "admin@mdrana.com");
console.log (s);
console.log (s instanceof Student);