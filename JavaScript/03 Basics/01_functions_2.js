// when we don't know how many arguments are coming

function calculateCartPrices (num1) {
    return num1;
}

console.log (calculateCartPrices(1));
console.log (calculateCartPrices(2, 3));
console.log ();



function calculateCartPrices2 (...num1) {
    return num1;
}

console.log (calculateCartPrices2(1));
console.log (calculateCartPrices2(2, 3));
console.log ();


// object as parameter

const user1 = {
    username: "Danyal",
    age: "10"
}

const user2 = {
    username: "Mashhood",
    age: "12"
}

function getDetails (anyObject) {
    console.log (`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

getDetails (user1);
getDetails (user2);
getDetails ({
    username: "Rana",
    age: 14
})


// passing array as parameter

const myArray = [1, 2, 3, 4, 5];

function secondValue (myArr) {
    console.log(myArr[1]);
}

secondValue (myArray);
secondValue ([10, 20, 30, 40, 50]);