let waitForIt= ' '
let firstName= 'Marvin'
let lastName= 'Eriksen'
// tell them the full name
let fullName= firstName + waitForIt + lastName
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
// console.log(js.sub str(4,6)) // why it looks weird? : The error indicates that the substr function is not defined in the current environment. Instead, slice or substring should be used.

// substring() : same but doesnt count the last index
console.log(js.substring(4,6)) 

// split() : splits a string at a specified place
let string= "30 Days of JavaScript"
console.log(string.split())
console.log(string.split(' ')) 

let string2= "30, Days, of, JavaScript"
console.log(string2.split(',')) 
console.log(string2.split(', ')) // removes blank too

// trim() : Removes trailing space in the beginning or the end of a string.
let string3= "    30 Days of JavaScript    "
console.log(string3.trim()) 

// includes() : if it has substring its true, otherwise its false
console.log(string.includes('Days'))
console.log(string.includes('days')) // case sensitive
console.log(string.includes('Script'))
console.log(string.includes('me'))

// replace() : for replacing. needs 2 parameters
console.log(string.replace('JavaScript', 'Python'))

// charAt() : returns index
let lastIndex = string.length -1
console.log(string.charAt(lastIndex))

// charCodeAt() : returns char code as ASCII
console.log(string.charCodeAt(3))

// indexOf() : if substring exists it returns first position else -1
console.log(string.indexOf('D'))
console.log(string.indexOf('script'))
console.log(string.indexOf('Script'))

// lastIndexOf() : returns last position

//concat() : 
let fname = 'Mar'
console.log(fname.concat("vin"))

// endsWith() : boolean
let string4 = 'Love is the most powerful feeling in the world'

console.log(string4.endsWith('world'))
console.log(string4.endsWith('love'))

// search() : it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

// match() : it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string5 = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive !!!


// parseInt() : if there is an integer in a string, this func converts it to string
console.log(parseInt("42"))

// Number() : string to int or float
console.log(Number("3.14"))
// + : Number() but faster verse 
console.log(+true)
console.log(+false)
console.log(+null)
console.log(+"")