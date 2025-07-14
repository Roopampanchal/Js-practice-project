//For In

const language = {
    'Js':'javascript',
    'rb':'ruby',
    'swift':'swift by apple',
    'cpp':'c++',
}

for (const key in language ){
    // console.log(key); // all key will display
    // console.log(language[key]); //all value will display
    
}

const programming = ['Python', 'JS', 'PHP', 'C++']

for (const key in programming) {
// console.log(key);// will display key : 0, 1, 2, 3
// console.log(programming[key]);
// will display value :Python
// JS
// PHP
// C++
}

const map = new Map();

map.set('In' , 'India');
map.set('UK' , 'United Kingdom');
map.set('Zh' , 'China');

for (const key in map) {
    console.log(key); // Map is not iteratable so cannot write within the loop so will show nothing
}
