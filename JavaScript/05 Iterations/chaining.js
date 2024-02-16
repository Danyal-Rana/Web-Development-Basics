// using map.map.filter etc.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (myNums);
console.log ();

let newNums = myNums
                    .map ( (n) => n*11 )
                    .map ( (n) => n+1 )
                    .filter ( (n) => n%2===0 )

console.log (newNums);