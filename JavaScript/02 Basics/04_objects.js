// singleton objects

const tinderUser = new Object();

console.log (tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Danyal";
tinderUser.isLoggedIn = false;

console.log (tinderUser);

const socialUser = {
    email: "some@domain.com",
    nameDetails: {
        fullName: {
            firstName: "Danyal",
            lastName: "Rana",
            fatherName: "Arshad"
        }
    }
}

console.log(socialUser.nameDetails);
console.log(socialUser.nameDetails.fullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2}; // not recommended
console.log (obj3);

const obj4 = Object.assign({}, obj1, obj2); // {} acts as target object which is returned, and obj1 & obj2 are treated as source objects
console.log(obj4);

const obj5 = {...obj1, ...obj2}; // mostly used
console.log(obj5);

// from database, data/objects is mostly come in the form of array
const users = [
    {
        name: "Danyal",
        id: "1"
    },
    {
        name: "Mashhood",
        id: "2"
    }
]

console.log(users[0].name);

console.log (Object.keys(tinderUser)); // return array which can be utilized further
console.log (Object.values(tinderUser)); // also return array of values
console.log (Object.entries(tinderUser)); // return key value pairs in the form of array

console.log (Object.hasOwnProperty("names"));