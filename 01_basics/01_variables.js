const accountId=124365
let accountEmail="hitesh@gmail.com"
var accountPassword="1234"
accountCity="Bhiwani"

// accountId=2

/* prefer not to use var 
because of issue in block and functional scope
*/

console.log(accountId);

accountPassword="122212"
accountEmail="hiteshsharma@gmail.com"
accountCity="Hisar"

 console.table([accountEmail,accountId,accountPassword,accountCity])