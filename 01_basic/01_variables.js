
const accountId = 144553; //cannot change
let accountEmail = "roopam@google.com";
var accountPass = "12345"; // prefer not to use var coz of issue in block and functional scope
accountCity = "Jaipur";
let accountState; // undefined

// accountId = 2; // not allowed to change

console.log(accountId);
accountEmail = "rp@rp.com"; // allow to changes
accountPass = "212121"; // allow to changes
accountCity = "Bangluru"; // allow to changes

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

// code inside the {} is called scope
/** multi line comment */ 