// for-in loop is used to iterate through objects
// for-in loop gives the keys, we have to extract the values
// it can't be used for maps as, maps are not iteratable

const myLang = {
    py: "Python",
    cpp: "C++",
    rb: "Ruby",
    java: "Java",
    html: "Hyper Text Markup Language",
    css: "Cascading Style Sheet",
    js: "JavaScript"
}

for (const i in myLang) {
    console.log (`Key is ${i} and its Value is ${myLang[i]}`);
}

const myArr = [1, 2, 3, 4, 5];

for (const i in myArr) {
    console.log (i);
}