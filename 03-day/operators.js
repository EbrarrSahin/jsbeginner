// Asignment Operators (=)
let x = 8
let y = 4
x += y
console.log(x)
x -= y
console.log(x)
x *= y
console.log(x)
x /= y
console.log(x)
x %= y
console.log(x)
x **= y // exponential
console.log(x)

const PI = 3.14
let radius = 100

const areaOfCircle = PI * radius *  radius
console.log(`Are of the circle is ${areaOfCircle}`)

// Comparison Operators >.<

console.log(2<3)
console.log(2<=3)
console.log(2>3) // false
console.log(2!=3)
console.log( 2 == '2') // true
console.log(0 == false)
console.log(0 == '')
console.log(1 == true)
console.log(1 === true) // false
console.log(undefined == null)

console.log('mango'.length == 'avocado'.length) // false
console.log('mango'.length < 'avocado'.length)
console.log('milk'.length != 'cookie'.length)

// Logical Operators

const check = 4 > 3 && 10 > 5 // true && true = true
const check2 = 4 > 3|| 10 < 5 // true || false = true
let check3 = !(4 > 3) // means 4 < 3 == false

// Increment Operators

// Pre-increment
let count = 3
console.log(++count)
console.log(count)
// Post-increment
let count2 = 3
console.log(count2++)
console.log(count2)

// Decrement Operators

// Pre-decrement
let count3 = 13
console.log(--count3)
console.log(count3)

// Post-devrement
let count4 = 13
console.log(count4--)
console.log(count4)

// Ternary Operators
// This allows to write conditions. I think it will be usefullll !! // an alternative to if else

let isRaining = true
isRaining // its raining 
    ? console.log('You need a yellow umbrella.') // print
    : console.log('You dont need an umbrella')
isRaining = false // no rain

isRaining // no rain
    ? console.log('You need a yellow umbrella.')
    : console.log('You dont need an umbrella') // print


let age = 20
let message = age >= 18
    ? console.log('you are an adult')
    : console.log('you are a minor')