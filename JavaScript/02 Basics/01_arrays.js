// Array in JavaScript can be resizable and can have variables of different data types

const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log (myArr[0]);

const myArr2 = new Array (1, 2, 3, 4, 5);
console.log (myArr2[5]); // undefined

// Methods
myArr.push (8);
console.log(myArr);
myArr.pop ();
console.log (myArr);
console.log();

myArr.unshift (100); // not recemmended, as it shifts all the values
console.log (myArr);
myArr.shift();
console.log (myArr);
console.log();

