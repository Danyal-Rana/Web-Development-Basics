// same as filter

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (myArr);
console.log ();

const newArr = myArr.map ( (i) => (i+10) )
console.log (newArr);
console.log();

const newArr2 = myArr.map ( (i) => {
    return i+20;
} )
console.log (newArr2);
console.log ();