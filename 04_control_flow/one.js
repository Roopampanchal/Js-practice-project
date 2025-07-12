// const userLoggedIn = true;

// if(userLoggedIn){
// console.log("User logged in true")
// }

// let score = 41//score is 41
// let score = 51//score is greater then 50

// if(score === 41){
//     console.log("score is 41");  
// } else {
//     console.log("score is greater then 50");
// }

// >, <, >=, <=, ==, ===, !=, !==

// const score = 200

// if(score > 100){
//     // let power = "fly" //local scope
//     var power = "fly" //global scope

//     console.log(`User power is : ${power}`);   //User power is : fly
// } 

// console.log(`User power is : ${power}`);// Error : power is not defined when using local scope
// console.log(`User power is : ${power}`);   //User power is : fly (Please note when use "var" it is showing result coz var is global scope variable declaration)


// if(2 == "2"){
//     console.log("Executed");
    
// }

// if(3 != "3"){//check not equal
//     console.log("not equal"); // 3 & "3" is equal so giving no result
// } else {
//     console.log("equal");
// }

// if(3 !== "3"){//check strictly datatype also
//     console.log("not equal"); // showing result not equal due to strictly test condition is true
// } else {
//     console.log("equal");

// }

// if(3 !== 3){//check strictly datatype also
//     console.log("false"); // showing result not equal due to strictly test condition is true
// } else {
//     console.log("true");//condition false coz both value is equal

// }

// const temperature = 41;

// if(temperature < 50){
// console.log("temperature is less then 50");

// } else {
// console.log("temperature is greater then 50");

// }

// IMPLICIT SCOPE : means we are suppose there is scope and it will execute in a single line

// const balance = 1000
// if(balance > 500) console.log("test"); // test

//NESTING CONDITION
// console.log(balance);

// if(balance < 500){
// console.log("less then 500");
// } else if(balance < 700){
// console.log("less then 700");
// } else{
// console.log("less then 1200");
// }
//OUTPUT 1000
//less then 1200

//MULTIPLE CONDITION TESTING
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){ // using && "AND" means all condition must true
console.log("Allow Shoping");
//Allow Shoping
}

if(loggedInFromEmail || loggedInFromGoogle){ // using || "AUR" means all condition not mendatory to true
console.log("Allow Shoping");
//Allow Shoping
}