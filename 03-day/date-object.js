// get : the methods we use to get date and time info from a date object
/*
getFullYear()
getMonth()
getDate()
getDay()
*/

// creating a time object
const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime()) // i think its same with rand()

const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

const now2 = new Date()
const year = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) //  hehe so thats how