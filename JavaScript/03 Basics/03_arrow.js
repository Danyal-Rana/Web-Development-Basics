// es6 came in 2015, which brings the concept of Arrow function

const user = {
    userName: "Danyal",
    website: "mdrana.com",

    welcome: function () {
        console.log (`${this.userName}, welcome to our website, ${this.website}`);
        // console.log(this);
    }
}

user.welcome();
user.userName = "Rana";
user.welcome();

console.log (this); // it behaves differently in node and window.

function chai () {
    console.log (this);
}
chai();

// arrow function
const chai2 = () => {
    console.log (this);
}
chai2();

const myFun = (num1, num2) => {
    return num1+num2;
}
console.log (myFun(3, 4));

// arrow function implicit return (used in React)
const myFun2 = (num1, num2) => (num1 + num2);
console.log (myFun2(5, 8));

// returning object using implicit return
const myFun3 = () => ({name: "Danyal", age: "20"});
console.log (myFun3());