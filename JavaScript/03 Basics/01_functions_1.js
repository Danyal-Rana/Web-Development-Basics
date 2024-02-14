function myFun () {
    console.log("Danyal");
}

myFun; // this is function reference
myFun(); // this is functions call/execution

function addTwoNums (n1, n2) {
    console.log(n1+n2);
}

addTwoNums (3, 4); //7
addTwoNums (3, "4"); // 34
addTwoNums (3, "a"); // 3a
addTwoNums (3, null); // 3

const result = addTwoNums (3, 5);
console.log("Result is: ", result); // undefined because we are not returning anything

function sayHello (name) {
    console.log (`Hello ${name}`);
}

sayHello("Danyal");
sayHello(); // it also executes

function sayHello1 (name) {

    if (name === undefined) {
        console.log("There is no name.");
        return; // program will terminate here if no argumnet is given in function call
    }
    console.log (`Hello ${name}`);
}

sayHello1("Rana");
sayHello1(); // it also executes

function sayHello2 (name = "myName") {
    console.log (`Hello ${name}`);
}

sayHello2("Danyal"); // "Danyal" will overrides "myName"
sayHello2(); // "myName" will be used here