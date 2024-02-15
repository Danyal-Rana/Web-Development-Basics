// Nulling Coalescing Operator (??): null, undefined

// NCO is a logical operator which assigns the right hand side if right hand side is null or undefined, otherwise it assigns left hand side.

// it is different from ternary operator: condition ? true : false;

let val1;
val1 = null ?? 10;
console.log (val1);

let val2;
val2 = 5 ?? 10;
console.log (val2);

let val3;
val3 = undefined ?? 10 ?? 20;
console.log (val3);