// math library comes by default with JavaScript

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

let min = 1;
let max = 6;

const diceRandom = Math.floor ((Math.random()*(max-min+1)) + min);
console.log(diceRandom);