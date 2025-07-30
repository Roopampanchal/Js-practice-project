const coding = ["Java", "Python", "JS", "PHP", "C", "C++"];

// coding.forEach((item) => {
// console.log(item);
// })

const values = coding.forEach((item) => {
// console.log(item);
return item;
})

// console.log(values); // undefined 
//means foreach is not return the value

//filter
const numArr = [1, 3, 5, 7, 9, 11, 13];
// const myNum = numArr.filter((num) => num > 4)
// console.log(myNum);//[ 5, 7, 9, 11, 13 ]
// const myNum = numArr.filter((num) => {num > 4})
// console.log(myNum);//[] empty error will show if you are using curly braces so in braces you have to return the value

// const myNum = numArr.filter((num) => {return num > 4})

// console.log(myNum);//[ 5, 7, 9, 11, 13 ]


//Using foreach

const newNums = [];

const myNum = numArr.forEach((num) => {
if(num > 4){
    newNums.push(num)
}
})

console.log(newNums);//[ 5, 7, 9, 11, 13 ]

const books = [
    {'book_name' : 'Who will cry when you die', 'publish' : 1999, 'genre' : 'motivational'},
    {'book_name' : 'How to influence people', 'publish' : 2009, 'genre' : 'communication'},
    {'book_name' : 'Bhagwat Gita', 'publish' : 1500, 'genre' : 'Mythology'},
    {'book_name' : 'The secret', 'publish' : 2000, 'genre' : 'motivational'},
]

const booksDetails = books.filter((item) => {
return item.genre === 'motivational'
})

console.log(booksDetails);
// [
//   {
//     book_name: 'Who will cry when you die',
//     publish: 1999,
//     genre: 'motivational'
//   },
//   { book_name: 'The secret', publish: 2000, genre: 'motivational' }
// ]