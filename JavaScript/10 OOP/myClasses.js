// ES6

class User {
    constructor (username, mail, pass) {
        this.username = username;
        this.mail = mail;
        this.pass = pass;
    }

    encryptPass () {
        return `abc${this.pass}`;
    }
}

const myUser = new User ("Danyal", "admin@domain.com", "123");
console.log (myUser.encryptPass());

// BTS, functions are working