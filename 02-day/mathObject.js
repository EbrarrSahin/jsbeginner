const PI = Math.PI
console.log(PI)
console.log(Math.round(PI)) // 3.1415 -> 3
console.log(Math.round(9.812)) // -> 10
console.log(Math.floor(PI)) // lower number = 3
console.log(Math.ceil(PI)) // upper number = 4
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // returns min value = -5
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // returns max value = 20

/*
absolute (| |) = Math.abs

sqoare root = Math.sqrt

power (3 ^ 2) = Math.pow

e = Math.E

log base on e of x = Math.log(x)
log base 2 = Math.LN2
log base 10 = MAth.LN10

trigo=
Math.sin(0) 
Math.sin(60)
Math.cos(0)
Math.cos(60)
*/

const randNum = Math.random() // creates rand num 0 - 0.9999999
console.log(randNum)

// now create one between 0 - 10
const rand1= Math.floor(Math.random()* 11)
console.log(rand1)
