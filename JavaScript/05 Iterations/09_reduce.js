// Reduce: can be used to return almost anything. It is often used to return a single number, like an sum, but it can also be used to combine the logic of Map and Filter to return an array of values matching certain criteria. This can remove unnecessary iterations.

// The callback for Reduce has two parameters: the accumulator and the current value. Make sure you always return the accumulator after modifying it! In addition to the callback, Reduce receives a second parameter that will define the initial value of the accumulator.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mySum = myNums.reduce ( (acc, curVal) => {
    console.log (`acc: ${acc} and curVal: ${curVal}`);
    return acc + curVal;
}, 0); // here 0 is initial acc.
console.log (`\nSum is: ${mySum}.`);