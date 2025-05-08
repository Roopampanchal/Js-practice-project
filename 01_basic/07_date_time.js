// let myDate = new Date();
// console.log(myDate.toString()); //Thu May 08 2025 16:49:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Thu May 08 2025
// console.log(myDate.toLocaleString()); //5/8/2025, 4:49:52 PM

// console.log(typeof myDate); //object

// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate); //2023-01-23T00:00:00.000Z

// console.log(myCreateDate.toDateString());//Mon Jan 23 2023


// let myCreateDate2 = new Date(2023, 0, 23, 5, 3);

// console.log(myCreateDate2.toLocaleString()); //1/23/2023, 5:03:00 AM

// let myCreateDate3 = new Date("2023-01-14");
// console.log(myCreateDate3.toLocaleString()); //1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate3.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);//2025-05-08T17:02:21.338Z
console.log(newDate.getMonth() + 1); // start from 0
console.log(newDate.getDay());

let newDate2 = newDate.toLocaleString("default", {
    weekday: "long"
})

console.log(newDate2); // thursday
