// for-each loop is high order function

const myArr = [1, 2, 3, 4, 5];

myArr.forEach (printArr);
console.log ();

myArr.forEach ( function (i) {
    console.log (i);
})
console.log ();

myArr.forEach ( (i) => {
    console.log (i);
})
console.log();


function printArr (i) {
    console.log ("Printing 'i' using separate function: ", i)
}

const printMe = (i) => {
    console.log ("Printing 'i' using separate function: ", i);
}
myArr.forEach (printMe);
console.log ();

myArr.forEach ( (i, index, arr) => {
    console.log (`Value is ${i}, index is ${index}, and the array is ${arr}.`)
} )

// callback functions don't have names