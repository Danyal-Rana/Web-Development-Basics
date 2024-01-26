// 2 types of object

// #1 Singleton, object.create //will be discussed later

// #2 object literals, discussed here

const mySym = Symbol ("Key1");

const JsUser = { //each key is treated as string in javascript
    name: "Danyal",
    age: 18,
    "city": "Rohillan Wali",

    mySym: "myKey",
}

console.log(JsUser);
console.log(JsUser.age); // not the official way
console.log(JsUser["name"]); // recommended

console.log (JsUser["mySym"]);