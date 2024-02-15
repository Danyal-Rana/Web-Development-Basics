const falseyValues = ["", 0, -0, 0n, null, undefined, NaN, BigInt, false];
const truthyValues = "All other values are truthy";

const userMail = "danyal@domain.com";
if (userMail) {
    console.log ("Got user email.");
} else {
    console.log ("No email.")
}

const userMarks = 10;
if (userMarks) {
    console.log ("Got user Marks.");
} else {
    console.log ("No marks.")
}

const userAge = "";
if (userAge) {
    console.log ("Got user Age.");
} else {
    console.log ("No age.")
}

const myObj = {};
if (Object.keys(myObj).length === 0) {
    console.log ("Empty Object");
}

if (false == 0 && false == '' && 0n == '') {
    console.log (true);
}