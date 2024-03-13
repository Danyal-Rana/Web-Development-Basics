function setUserName (username) {
    this.username = username;
}

function createUser (username, email, age) {
    setUserName.call(this, username); // we have to sent this as well to let the setUserName know that we are setting the username of createUser

    this.email = email;
    this.age = age;
}

const me = new createUser ("Danyal", "dani@domain.com", "10");
console.log (me);