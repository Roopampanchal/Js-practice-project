const heros = ['thor', 'ironman', 'Captain America'];

const dc_heros = ['batman', 'flash', 'superman'];

const concat_arr = heros.concat(dc_heros);

// console.log(concat_arr);

//Spread

const all_new_heros = [...heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, [11, 12, [13, 14]]]];

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Ashvini"));
console.log(Array.from("Ashvini"));
console.log(Array.from({name : "Ashvini"}));


let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1, score2, score3));


