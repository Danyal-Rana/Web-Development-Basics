const myUser = function (name, age) {
    this.name = name;
    this.age = age;

    const welcome = function () {
        console.log (`Welcome ${this.name}`);
    }
}
// return this is automotically/implicitly called

const userOne = new myUser ("Danyal", 10);
console.log (userOne);

// if we don't use new keyword than only one instance could be created.