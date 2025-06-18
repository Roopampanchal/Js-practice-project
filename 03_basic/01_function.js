
function sayName(){
console.log("R");
console.log("o");
console.log("o");
console.log("P");
console.log("A");
console.log("M");

}

// sayName();

// function addTwoNum(num1, num2){ //passed parameters
// console.log(num1 + num2);
// }

// // addTwoNum(1, 2);//3
// // addTwoNum(1, "2");//12
// // addTwoNum(1, "a");//1a
// // addTwoNum(1, null);//1
// // addTwoNum("1",  "cbvjcb");//1cbvjcb

// const result = addTwoNum(2, 3);// 5

// console.log(result); //undefined
// ================================================
function addTwoNum(num1, num2){ //passed parameters
    let result = num1 + num2;
    return num1 + num2;
    // return result;
}

const result = addTwoNum(5, 8);
// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the Username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// // loginUserMessage(); // print nothing coz we only return not print
// console.log(loginUserMessage()); //Roopam just logged in
// Please enter the Username
// undefined

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter the Username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// // loginUserMessage(); // print nothing coz we only return not print
// console.log(loginUserMessage()); 
// Please enter the Username
// undefined

//DEFAULT VALUE
function loginUserMessage(username = "Sam"){ // Never undefined
    if(!username){
        console.log("Please enter the Username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());//Sam just logged in
console.log(loginUserMessage("Hitesh")); //Hitesh just logged in 
//Please note when we give argument then it will overlap the default value