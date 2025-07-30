// accumulator is work as a empty array who store the initial values
// Current value is our array values
// final sum ko collect krke accumulator m daal dete h 

//REDUCE

const array = [1, 2, 3, 4]

const initial = 0;

const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initial)

//Now what is happening first initial value is 0 then it will go to the accumulator and currentValue coming from the array
//then 0 + 1 = 1, initial value will be 1
// then 1 + 2 = 3, initial value is now 3
// then 3 + 3 = 6, initial value is 6
// then 6 + 4 = 10 initial value is 10

console.log(sumWithInitial); // 10

const shoppingCart = [
    {itemName : "Js Course", price : 2999},
    {itemName : "Py Course", price : 999},
    {itemName : "AI Course", price : 12999},
    {itemName : "DSA Course", price : 22999},
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0);
console.log(priceToPay);

