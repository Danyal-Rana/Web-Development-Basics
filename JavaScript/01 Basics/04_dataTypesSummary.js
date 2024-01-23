let myNum = 5n;
let myNumber = 20;

console.log (myNum);
console.log (typeof myNum);
console.log (myNumber);
console.log (typeof myNumber);

// 3 types of non-primitive data types

const heroes = ["Jinnah", "Iqbal", "Sir Syed"]; // array

let myObj = {
    name: "Danyal",
    age: 21,
}

const myFun = function () {
    console.log ("Hello JavaScript");
}

let temp = null;
let temp2;

console.log (typeof temp); // object
console.log (typeof temp2); // undefined
console.log (typeof heroes); // object
console.log (typeof myObj); // object
console.log (typeof myFun); // function object