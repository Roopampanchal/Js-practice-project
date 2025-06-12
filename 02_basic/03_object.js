const mySym = Symbol("key1");

const jsUser = {
    name : "Roopam",
    age:18,
    location:"california",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:['Monday', 'Saturday'],
    // mySym:"myKey1" //it is showing as a string
    [mySym]:"myKey1",

}

// console.log(jsUser.email);
//hitesh@google.com

// console.log(jsUser["email"]);
//hitesh@google.com

// console.log(typeof(jsUser.mySym));
//string

// console.log(typeof(jsUser[mySym]));
//string

jsUser.email="roopam@google.com"
// console.log(jsUser.email);

// if we want to freez the changes

// Object.freeze(jsUser);// changes will not be propogate after freez the object
// jsUser.email="roopam@persistent.com";
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting()); // Hello js user & undefined
// console.log(jsUser.greeting); //[Function (anonymous)]

console.log(jsUser.greetingTwo());