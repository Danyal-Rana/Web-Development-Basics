// de-structuring of Object

const course = {
    instructor: "Danyal",
    fee: "999",
    duration: "3 Months",
}

console.log (course.instructor);

const {instructor} = course;
console.log(instructor);

const {instructor: iName} = course;
console.log(iName);