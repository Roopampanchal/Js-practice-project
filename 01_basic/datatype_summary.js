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