// for-of loop is arry/map specific loops
// for-of loop give values

let arr = [1, 2, 3, 4, 5];
for (const i of arr) {
    console.log (i);
}

const myName = "Danyal Rana";
for (let i of myName) { // i can also use let, but const is recommended
    console.log (i);
}

const map = new Map ();
map.set ("Pk", "Pakistan");
map.set ("Pk", "Pakistan"); // this will not be counted
map.set ("USA", "United States of America");
map.set ("UK", "danyal"); // this will be discarded
map.set ("UK", "United Kingdom");
map.set ("United Kingdom", "UK");
console.log (map);

for (const i of map) {
    console.log (i);
}

for (const [i, j] of map) {
    console.log (i);
    console.log (i ,":=>", j);
}

//in this way for-of loop does not work for objects