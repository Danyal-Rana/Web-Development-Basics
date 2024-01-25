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

console.log (myArr.includes(4));
console.log (myArr.indexOf(9));
console.log();

const myStr = myArr.join();
console.log (myArr);
console.log (myStr);
console.log (typeof myStr, "\n");

// slice: does not manipulate the original array
// splice: it manipulates the original array

console.log ("Before slicing: ",myArr);
const newArr = myArr.slice (1, 3); // index 3 is not included
console.log ("New Array", newArr);
console.log ("After slicing: ", myArr, "\n");

console.log ("Before splicing: ", myArr);
const newArr2 = myArr.splice (1, 3); // splice does include last index
console.log ("New Array", newArr2);
console.log ("After splicing: ", myArr);