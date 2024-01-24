// updates about Dates are amazing in JavaScript

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.getUTCFullYear());

console.log();
let myDOB = new Date (2002, 11, 31);
console.log(myDOB.toDateString());

console.log();
let d1 = new Date (2002, 11, 31, 4, 30);
console.log (d1.toLocaleString());

console.log();
let d2 = new Date ("12-31-2002");
console.log (d2.toLocaleString());

console.log ();
console.log(Math.floor(Date.now()/100));