//For Loop

// for (let j = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element === 8){
//     console.log("8 is the best number");
//     }
//     console.log(element);
    
// }

// Loop inside Loop

// for (let i = 0; i<= 10; i++) {
//         console.log(`Outer loop ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`Inner loop ${j} and outer loop value ${i}`);
//     }
// }

let myArr = ['Thor', 'Iron Fist', 'Captain America', 'Wonder Women', 'Doctor Strange', 'Iron Man', 'Spider Man', 'Alita the Angel'];

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }
// Thor
// Iron Fist
// Captain America

// Break and continue

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     if (element === 'Wonder Women'){
//         console.log(element);
//         break;
//     }
//         // console.log(element);
    
// }
// Thor
// Iron Fist
// Captain America
// Wonder Women

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if (element === 'Wonder Women'){
        console.log(`our match super heroine is ${element}`);
        continue;
    }
        console.log(element);
    
}