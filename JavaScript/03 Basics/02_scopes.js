var a = 10;
let b = 20;
const c = 30; // const depends upon scope

if (true) {
    a = 100;
    b = 200;
    const c = 300;

    console.log("Inner a: ", a);
    console.log ("Inner b: ", b);
    console.log ("Inner c: ", c, "\n");
}

console.log ("Outer a: ", a);
console.log ("Outer b: ", b);
console.log ("Outer c: ", c, "\n");

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