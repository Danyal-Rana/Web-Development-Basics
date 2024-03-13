// in JS everything is an Object
// array is object
// string is object etc.

// function is function as well as object

function fiveTimes (num) {
    return num*5;
}

fiveTimes.power = 2;

console.log (fiveTimes(5));
console.log (fiveTimes.power);
console.log (fiveTimes.prototype);

// another example

function createUser (username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log (`Hi, my name is ${this.username} and my price is ${this.score}`);
}

const chai = new createUser ("chai", 25);
const tea = new createUser ("tea", 30);

chai.printMe();
tea.printMe();