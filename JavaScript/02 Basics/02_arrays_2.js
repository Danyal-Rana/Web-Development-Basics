let myA1 = ['a', 'e', 'i,', 'u'];
let myA2 = ['q', 'y', 'g'];

myA1.push (myA2);
console.log (myA1, '\n');
myA1.pop();

let myA3 = myA1.concat(myA2);
console.log (myA3, "\n");

let myA4 = [...myA1, ...myA2, ..."temp", "dani"];
console.log (myA4, "\n");

let oddArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
let flatArray = oddArray.flat (Infinity);
console.log ("Odd Array: ", oddArray);
console.log ("Flat Array: ", flatArray, "\n");

console.log (Array.isArray("Danyal"));
console.log (Array.from ("Danyal"), "\n"); // return a new array from an iterable object

const n1 = 100;
const n2 = 200;
const n3 = 300;
console.log (Array.of (n1, n2, n3), "\n"); // creates new array