// Immediately Invoked Function Expressions
// we do so to avoid global scope pollution


// named IIFE
(function chai () {
    console.log(`DB Connected`);
}) ();  // this "()" means function calling immediately and semicolon is used to tell the compiler, stop at this point otherwise arrow function will cause errors

// un-named IIFE
( () => {
    console.log(`DB Connected 2`);
} ) ();

( (n1, n2) => {
    console.log (n1+n2);
} ) (10, 40);