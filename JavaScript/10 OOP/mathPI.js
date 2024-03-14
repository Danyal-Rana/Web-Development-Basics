const myDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log (myDescriptor);

const chai = {
    name: "chai",
    price: "80",
    isAvailable: true,
}

console.log (Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty (chai, 'name', {
    writable: true,
    enumerable: false,
    configurable: true,
})

console.log (Object.getOwnPropertyDescriptor(chai, "name"));