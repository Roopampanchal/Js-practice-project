// FOR OF loop

// let superHero = ['Thor', 'Iron Fist', 'Captain America', 'Wonder Women', 'Doctor Strange', 'Iron Man', 'Spider Man', 'Alita the Angel'];

// for (const num of superHero) {
//     console.log(`our superhero : ${num}`);
    
// }
// our superhero : Thor
// our superhero : Iron Fist
// our superhero : Captain America
// our superhero : Wonder Women
// our superhero : Doctor Strange
// our superhero : Iron Man
// our superhero : Spider Man
// our superhero : Alita the Angel

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each char of ${greet}`);
    
}
// Each char of H
// Each char of e
// Each char of l
// Each char of l
// Each char of o
// Each char of  
// Each char of w
// Each char of o
// Each char of r
// Each char of l
// Each char of d

//MAP 

const map = new Map;
map.set('IN', 'India');
map.set('USA', 'United State of America');
map.set('FR', 'France');

// console.log(map);

for (const key of map) {
    // console.log(key);
        // [ 'IN', 'India' ]
        // [ 'USA', 'United State of America' ]
        // [ 'FR', 'France' ]
}

//when we want to show key and value separetly

for (const [key,value] of map) {
    console.log(key , ':- ', value);
        // IN :-  India
        // USA :-  United State of America
        // FR :-  France
}