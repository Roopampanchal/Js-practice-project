const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

const myArr2 = new Array('thor', 'iron men', 'x-man');
console.log(myArr2[2]);

//Array Methods

myArr2.push('Captain America');
console.log(myArr2); //[ 'thor', 'iron men', 'x-man', 'Captain America' ]

myArr.pop();// remove last value
console.log(myArr);//[ 0, 1, 2, 3, 4 ]

console.log(myArr.includes(4));//true
console.log(myArr.indexOf(2));

const newArr = myArr.join();
console.log(newArr);//0,1,2,3,4
console.log(typeof(newArr)); //string

//Slice , Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);//return a copy of a section of array
console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log("C ", myArr);//C  [ 0, 4 ]
console.log(myn2);//[ 1, 2, 3 ] 

//Differencee b/w slice and splice : splice manupulate the origional array

