// creating an empty array:

const arr1 = Array()
// or
let arr2 = new Array()
// or
const arr3 = [] // rec
console.log(arr1)
console.log(arr2)
console.log(arr3)

// creating w/ values

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

const arr = [
    'Ebrar',
    20,
    true,
    { country: 'Turkey', city: 'İzmir' },
    { skills: ['HTML', 'CSS', 'JS', 'SQL', 'Python'] }
]
console.log(arr)

// creating w/ split

let js = 'javaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let txt =
  'Joey does not share food .'
const words = txt.split(' ')
console.log(txt)

// accessing array items using index

const fruits = ['banana', 'orange', 'mango', 'apple']
let firstFruit = fruits[0]
console.log(firstFruit)

secondFruit = fruits[1]
console.log(secondFruit)

let lastFruit = fruits[3]
console.log(lastFruit)

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit)
