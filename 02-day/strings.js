let space= ' '
let firstName= 'Marvin'
let lastName= 'Eriksen'
// tell them the full name
let fullName= firstName + space + lastName
console.log(fullName)

/*
!!!!
    \n: new line
    \t: Tab, means 8 spaces 
    \\: Back slash
    \': Single quote (')
    \": Double quote (")
*/

console.log("the sum of 2 and 3 is 5")
let a= 2
let b= 3
console.log(`the sum of ${a} and ${b} is ${a+b}`) // didnt work  when i use "" or '' 

let js= 'javaScript'

console.log(js.length)

let firstLetter= js[0]
let lastLetter= js[9]
console.log(firstLetter)
console.log(lastLetter)

console.log(js.toUpperCase()) // Abc to ABC
console.log(js.toLowerCase()) // Abc to abc

// substr() : it takes 2 arguments, starting and stopping index numbers to slice
// console.log(js.substr(4,6)) // why it looks weird? : The error indicates that the substr function is not defined in the current environment. Instead, slice or substring should be used.

// substring() : same but doesnt count the last index
console.log(js.substring(4,6)) 

