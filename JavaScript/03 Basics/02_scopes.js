var a = 10;
let b = 20; // let has block scope
const c = 30; // const is also block scoped

if (true) {
    a = 100;
    b = 200;
    const c = 300;
    let d = 400;

    console.log("Inner a: ", a);
    console.log ("Inner b: ", b);
    console.log ("Inner c: ", c);
    console.log ("Inner d: ", d, "\n");
}

console.log ("Outer a: ", a);
console.log ("Outer b: ", b);
console.log ("Outer c: ", c);
// console.log ("Outer d: ", d, "\n"); this will not execute as let has block scope

function one () {
    const userName = "Danyal";

    function two () {
        const website = "mdrana.com";
        console.log(userName); // one meaning of "Closure is that inner scope can access variables of outer scope"
    }

    two();

    // console.log(website);
}

one();