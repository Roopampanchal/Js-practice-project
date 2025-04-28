const name = "Roopam";
const repoCount = 50;

// console.log(name + repoCount + "any value"); old method

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(' Ashvini-Roopam ');
// console.log(gameName);

// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.charAt(7));

// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,11);
// console.log(newString);

const anotherString = gameName.slice(-13, 11);
// console.log(anotherString);

const newTrimString = gameName.trim();
// console.log(newTrimString);

const url = "https://github.com/Roopampanchal/Js%20practice-project";

/** in the above url there is %20 when we want to replace by '-' then we need to use replace function */

console.log(url.replace('%20', '-'));

/**if we want to check specific word in url then we can use '.includes' */

console.log(url.includes('Roopam'));

console.log(gameName.split('-'));

