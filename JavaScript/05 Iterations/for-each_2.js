// for-each loop is specially used when we have Array of Objects
// remember objects are not iterable, only Arrays are iterable
// for-each does not return anything.

const myObjArr = [
    {
        languageName: "JavaScript",
        usage: "Web Development"
    },
    {
        languageName: "Python",
        usage: "Data Science"
    },
    {
        languageName: "Dart",
        usage: "App Development"
    }
]

myObjArr.forEach( (i) => {
    
    console.log (`Language name is ${i.languageName} and it is used in ${i.usage}.`);
});