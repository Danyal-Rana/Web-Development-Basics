const name = "Danyal"; // or const name = new String ("Danyal"), bts both are same
const age = 21;

/*
console.log (name +" "+ age + " years old.");
old way, not recommended
*/

console.log (`My name is ${name} and I'm ${age} years old.`); // modern way, also ${name.toUpper} etc.

const myName = new String ("Rajput");
console.log (myName[0]); // this is key value pair, not index as string is object

console.log (myName.length);
console.log (myName.toUpperCase()); // original value not changed
console.log (myName);

console.log (myName.charAt(2));
console.log (myName.indexOf('j'));

const newName = myName.substring(0, 3); // .substring ignores negative values
console.log(newName);

const newName2 = myName.slice (-8,3); // same as substring but it can accept negative values and it starts from back
console.log(newName2);

let newString = "    dani    ";
console.log(newString);
console.log(newString.trim());

const url = "https://www.mdrana%20.com/blog%20";
console.log(url.replace('%20', '-')); // replacds only first occurance
console.log(url);
console.log (url.includes("mdrana"));