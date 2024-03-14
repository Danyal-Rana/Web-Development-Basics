// in this tutuorial, prop means properties

// static keyword is not inherited

class User {
    constructor (username) {
        this.username = username;
    }

    isLogged () {
        console.log ("Yes");
    }

    static userID () {
        console.log ("userID is assigned statically.");
    }
}

const myUser = new User ("Danyal");
User.userID();

// myUser.userID();