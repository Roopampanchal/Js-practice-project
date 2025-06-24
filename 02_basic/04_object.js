// to merge object : object.assign(obj1, obj2)

const tinderUser = new Object(); //This is called singleton object
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Roopam",
            lastname:"Panchal"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = Object.assign(obj1, obj2)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2)//recommanded
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign(obj1, obj2, obj4);


// Spread Method
// =============

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign({}, target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }
// console.log(returnedTarget);
// console.log(returnedTarget === target);
// Expected output: true


// Object.keys
// Object.values, Object.hasOwnProperty() method to check value true or false
const Users = [
    {
        id:1,
        email:"r@gmail.com"
    },
        {
        id:2,
        email:"p@gmail.com"
    },    {
        id:3,
        email:"a@gmail.com"
    },

]

Users[1].email

// console.log(tinderUser);

// console.log(Object.keys(Users));//[ '0', '1', '2' ]
// console.log(Object.values(Users));
// [
//   { id: 1, email: 'r@gmail.com' },
//   { id: 2, email: 'p@gmail.com' },
//   { id: 3, email: 'a@gmail.com' }
// ]
// console.log(Object.entries(Users));
// [
//   [ '0', { id: 1, email: 'r@gmail.com' } ],
//   [ '1', { id: 2, email: 'p@gmail.com' } ],
//   [ '2', { id: 3, email: 'a@gmail.com' } ]
// ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
//true

//DeStructuring

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
//hitesh

// Destructuring the course
// =============================

// const {courseInstructor} = course;

// console.log(course.courseInstructor);
//hitesh

//Make it more short form

const {courseInstructor: instructor} = course;
console.log(instructor);
//hitesh

// API concepts
// =================

// we get response as json file

// {
    // name: "hitesh",
    // coursename:"Js in hindi",
    // price:"free"
// }

// or [
//     {

//     }
// ]

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);