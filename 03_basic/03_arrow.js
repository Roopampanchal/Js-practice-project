const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        // console.log(this);
        /**Output:
         * {
            username: 'hitesh',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }
         * 
         */
        //this keyword refer the current context
        // console.log(`${this.username} , Welcome to website`);
    }
}

user.welcomeMessage() // hitesh , Welcome to website

// user.username = "sam";
// user.welcomeMessage()//sam , Welcome to website

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this); 
//     console.log(this.username); //unable to use this in function it was working for object

// }

// chai();

// const chai = function(){
//     let username ="hitesh"
//     console.log(this.username);
    
// }

// chai();//undefined

const chai = () =>{
    let username ="hitesh"
    console.log(this.username); //undefined
    console.log(this); //{}
}

chai()//undefined

