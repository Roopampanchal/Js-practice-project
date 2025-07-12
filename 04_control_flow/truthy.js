// const userEmail = "r@roopam.ai"
// const userEmail = ""


// if(userEmail){
// console.log("we have email");//we have email

// } else {
//     console.log("dont have one");//dont have one empty showing false
    
// }

// FALSY VALUE

// false
// null
// undefined
// 0
// ""
// -0
// BigInt 0n
// NaN

// // TRUTHY
// "0"
// "false" or 'false'
// " " //space
// [] // empty array
// {} //empty object
// function(){} //empty function

// CHECK EMPTY ARRAY : Array.length === 0

const emptyArr = []


if(emptyArr.length === 0){
console.log("empty array");
} 

const emptyObj = {}


if((Object.keys(emptyObj)).length === 0){
console.log("empty Object");
} 

// Compare :
// false == 0 //true
// false == '' //true
// '' == 0 //true

//NULLIES Coalescing Operator ?? : Null , Undefined

let val1;
// val1 = 5 ?? 10;
// console.log(val1); //5
// val1 = null ?? 10;
// console.log(val1); //10

// val1 = undefined ?? 15;

// console.log(val1); //15


val1 = undefined ?? 0 ?? 10;
console.log(val1); //0

// TERNiary Operator
// condition ? true : false

const iceTeaPrice = 150;
iceTeaPrice >= 80 ? console.log("greater or equal to 80") : console.log("less then 80");

