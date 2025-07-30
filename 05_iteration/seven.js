const myNums = [1, 2, 3, 4, 5, 6, 7,8]

const newNums = myNums.map((num) => num + 10)
const newNums2 = myNums.map((num) => {return num * 10})

// console.log(newNums);
// console.log(newNums2);

// [
//   11, 12, 13, 14,
//   15, 16, 17, 18
// ]

//Chaining : use more then one method is chaining like map , filter together we can use.

const newNumbers = myNums.map((num) => num * 2).map((num) => num * 10).filter((num) => num >= 40)
console.log(newNumbers);

// [
//    40,  60,  80, 100,
//   120, 140, 160
// ]
