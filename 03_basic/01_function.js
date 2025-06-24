
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

function square(number) {
  return number * number;
}

console.log(square(5));

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFun(myObj){
    myObj.make = "Toyota";
}

let myObj = {};            // Step 1: Create an object
myFun(myObj);              // Step 2: Pass the object to the function
// console.log(myObj.make);   // Step 3: Access the updated property => "Toyota"

const car={
    make:"Porche",
    price:"3Cr",
}

console.log(car.make);   // Step 3: Access the updated property => "Porche"
myFun(car);              // Step 2: Pass the "car" object to the function
console.log(car.make);   // Step 3: Access the updated property => "Toyota"

// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:

function myArray(arrInFun){
    arrInFun[0] = 30;
}

const newArr = [45];
console.log(newArr[0]);//45

myArray(newArr);
console.log(newArr[0]);//30

// Function declarations and expressions can be nested, which forms a scope chain. For example:

function addSquare(a, b){
    function square(x){
        return x*x;
    }
    return square(a) + square(b);
}

console.log(addSquare(5));

