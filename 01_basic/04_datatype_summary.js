//Primitive : number, boolean, string, null, undefined, Symbol , BigInt
//Non Primitive : Array,object,functions

const score = 100; //number
const scoreNum = 100.3; //number

const isLoggedIn = false //boolean
const outsideTemp = null // null 
let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId); // false
const bigNumber = 1325586866576595865666565656n

const heros = ['Thor', 'X-man', 'Iron-man'];

let myObj = {
    name: "roopam",
    age: 20,
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); // datatype for null is object
console.log(typeof bigNumber); // bigInt
console.log(typeof userEmail); // undefined

console.log(typeof myFun); // function
console.log(typeof myObj); // object
console.log(typeof heros); // object

/**.Stack (Primitive) and Heap (Non - primitive) */

let myYoutubeName = "musicWithRoop";
let anotherName = myYoutubeName; 

// console.log(myYoutubeName); //musicWithRoop
// console.log(anotherName); //musicWithRoop

anotherName = "jchbjvfnc";
console.log(anotherName);//jchbjvfnc
console.log(myYoutubeName);//musicWithRoop

//Object value store in Heap means it will store value in heap and when give the same value to another variable then it will assign the reference value not the copy one
//When we changed the userTwo variable email then it will change the origional value also
let userOne = {
    email : "user@google.com",
    name : "user"
}

console.log(userOne.email);

let userTwo = userOne
console.log(userTwo.email);

userTwo.email = "roopam@google.com"
console.log(userTwo.email);
console.log(userOne.email);