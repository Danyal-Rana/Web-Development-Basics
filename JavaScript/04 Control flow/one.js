if (2 == "2") {
    console.log("Executed: 2 == '2'");
}


// "===" is known as strict equality operator
if (2 === "2") {
    console.log("Executed: 2 === '2'"); // this will not execute as "===" checks equality as well as type
}
else {
    console.log("Executed: 2 !== '2'");
}

if (true) console.log("Implicit scope / one line statement.");

if (2==2) console.log("Not recommended"), console.log("also works for multiple lines separated by comma.");

if (2==2 && 2==1+1) {
    console.log("True");
}

if (2==5 || 2==5-3) {
    console.log(true);
}