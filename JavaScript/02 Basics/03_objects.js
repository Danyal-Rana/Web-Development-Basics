// 2 types of object

// #1 Singleton, object.create //will be discussed later

// #2 object literals, discussed here

const mySym = Symbol ("Key1");
const mySym2 = Symbol ("Key2");

const JsUser = { //each key is treated as string in javascript
    name: "Danyal",
    age: 18,
    "city": "Rohillan Wali",

    mySym: "myKey", // wrong way
    [mySym2]: "myKey", // right way
}

console.log(JsUser);
console.log(JsUser.age); // not the official way
console.log(JsUser["name"]); // recommended

console.log (JsUser["mySym"]); // wrong way
console.log (typeof JsUser["mySym"], "\n"); 
console.log (JsUser[mySym2]); // right way
console.log (typeof JsUser[mySym2]);
console.log();

JsUser.name = "Dani";
console.log (JsUser);

Object.freeze (JsUser); // now, the contents of object will not change
console.log();
JsUser.name = "Dany";
console.log (JsUser);
console.log();

// functions/methods in javascript are treated as Variables

