const myName = "Danyal     ";

console.log (myName.length);
console.log (myName.trueLength);


// another story

let myHeros = ["thor", "hulk"];

let heroesPower = {
    thor: "hammer",
    hulk: "fat",

    getThorPower: function () {
        console.log (`Thor power is ${this.thor}`);
    }
}

Object.prototype.danyal = function () {
    console.log (`Danyal is present in all objects.`)
}

heroesPower.danyal();
myHeros.danyal();

// in the same way, we can give power to Array etc.

Array.prototype.heyDanyal = function () {
    console.log (`Danyal says Hello`);
}

myHeros.heyDanyal(); // remember only arrays can acces this function 'heyDanyal;

// let do the same with String

String.prototype.trueLength = function () {
    console.log (this);
    console.log (`True length is ${this.trim().length}`);
}

myName.trueLength();
"Rana    ".trueLength();