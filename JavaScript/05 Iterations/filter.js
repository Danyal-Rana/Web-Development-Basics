// filter also accepts a call back funtion, in which we have to give a condition
// if we don't use scope operator than we have to use "return keyword"
// for-each modifies the original array

// returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.


const myArr = [1, 2,3, 4, 5, 6, 7, 8, 9, 10];

myArr.filter ( (i) => console.log (i) );
console.log ();

const j = myArr.filter ( (i) => i%2==0 );
console.log (j);
console.log (myArr);
console.log ();

const temp = myArr.filter ( (i) => {
    return i%2===0;
} )
console.log (temp);
console.log (myArr);
console.log ();