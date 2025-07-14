//FOREACH
const coding = ['js', 'java', 'ruby', 'python', 'c++'];

//Its amazing

coding.forEach(function(val){
    // console.log(val);//all value of array will display as output
        // js
        // java
        // ruby
        // python
        // c++
})

//Now by using arrow function

coding.forEach((val) => {
// console.log(val); // again show the same result as line 7
})

//Now using seprate function

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) // just pass the function name as parameter

coding.forEach((item, index, array) => {
    console.log(item, index, array); // in foreach we can pass three paramters 
        // js 0 [ 'js', 'java', 'ruby', 'python', 'c++' ]
        // java 1 [ 'js', 'java', 'ruby', 'python', 'c++' ]
        // ruby 2 [ 'js', 'java', 'ruby', 'python', 'c++' ]
        // python 3 [ 'js', 'java', 'ruby', 'python', 'c++' ]
        // c++ 4 [ 'js', 'java', 'ruby', 'python', 'c++' ]
})

const myCode = [
    {
        'languageName' : "Javascript",
        'languageExt' : "js"
    },
    {
        'languageName' : "Python",
        'languageExt' : "py"
    },
    {
        'languageName' : "PHP",
        'languageExt' : "php"
    }
]

myCode.forEach((item) => {
    // console.log(item); //ite will show the complete array with key and value
    // console.log(item.languageName); //it will show the name of the all languages
    console.log(item.languageExt); //it will show the extension of the all languages

})