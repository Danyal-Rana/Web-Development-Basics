for (var i=1; i<=20; i++)
{
    if (i == 5) {
        console.log ("5 is detected.")
    } else if (i>5 && i<=10) {
        continue;
    } else if (i == 15) {
        break;
    } else {
        console.log (i);
    }
}

console.log ("the value of var i is: ", i);



for (let i = 1; i <= 10; i++) {

    console.log (`*** Table of ${i} ***`);

    for (let j=1; j<=10; j++) {
        console.log (`${i} * ${j} = ${i*j}`);
    }

    console.log();
}