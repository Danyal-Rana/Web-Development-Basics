const score = 5;
const balance = new Number (5); // now this is 100% number

console.log (score);
console.log (balance);

console.log (balance.toString()); // now this is string
console.log (balance.toFixed(2));

const myNum = 99.958;
console.log (myNum.toPrecision(3));

const anotherNum = 100000000;
console.log (anotherNum.toLocaleString());
console.log (anotherNum.toLocaleString("en-PK"));

console.log (Number.MAX_VALUE);
console.log (Number.MAX_SAFE_INTEGER);