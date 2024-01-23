console.log ("2" > 1);
console.log ("02" > 1);

// equality check (==) and comparisions operators (<, >, <=, >=) works differently

console.log (null >= 0); // null is treated as 0
console.log (null == 0);
console.log (null < 0); // null is treated as 0

// === also strictly checks the equality, it also checks the data type

console.log ("2" == 2); // here "2" is converted into number
console.log ("2" === 2); // here "2" is treated as string

// this is a comment