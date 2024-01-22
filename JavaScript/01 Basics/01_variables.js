const accountId = 5
let accountEmail = "dani@gmail.com"
var accountName = "Danyal"
accountCity = "Isb"

console.log (accountId)
console.log (accountEmail)
console.log (accountName)
console.log (accountCity)
console.log ()

/*
accountId = 55 // not allowed to change Constant
console.log (accountId)
*/

accountEmail = "danyal@hotmail.com"
accountName = "M'd Rana"
accountCity = "Rohillan Wali"

console.log (accountId)
console.log (accountEmail)
console.log (accountName)
console.log (accountCity)


/*
const is used for constants
let is used for variables
var is not used now. bcz of issue in block scope and function scope
*/

let accountState; // it is upto us to use semicolon ";" or not but it is recommended to use

console.table ([accountId, accountEmail, accountName, accountCity, accountState])