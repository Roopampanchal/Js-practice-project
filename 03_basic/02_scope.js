// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30
var c =  300;
let a = 400;

if(true){
    let a = 10
    const b = 20
    var c =  30
    // console.log(`Inner ${a}`); //Inner 10
}

// console.log(a); //400
// // console.log(b);
// console.log(c);//30

// Nested scope
// Closure

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two();//hitesh
    
}

one();

// expected o/p : hitesh

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website);//error
}

// console.log(username);//error
console.log(addOne(5));
function addOne(num){
    return num + 1;
}

addOne(5);//only return not print


console.log(addTwo(5));// error will show when we declare as variable

//Expression function express as variable
const addTwo = function(num){
    return num + 2;
}

addTwo(5)//return the value but not print so will sjow nothin

// Hoisting

//Arrow Function

//This : this keyword tell us current context