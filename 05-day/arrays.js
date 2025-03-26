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

const numbers3 = [0, 3.14, 9.81, 37, 98.6, 100]

console.log(numbers3.length)
console.log(numbers3)
console.log(numbers3[3])

let lastIndex2 = numbers3.length -1;

console.log(numbers3[lastIndex2])

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
console.log(webTechs)
console.log(webTechs.length)
console.log(webTechs[0])

let lastIndex3 = webTechs.length -1;
console.log(webTechs[lastIndex3])


// Methods to Manipulate Array

// Array Constructor
const arr4 = Array()
console.log(arr4)

const emptyValues = Array(8) // it creates 8 empty values ig its something like malloc
console.log(emptyValues)

// Creating static values with fill
const xValues = Array(8).fill('x')
console.log(xValues)

const zValues = Array(8).fill(0)
console.log(zValues)

// Concatenating array using concat
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

// Getting index an element in arr array
// indexOf: to check if an item exist in an array. yes: returns index, no: returns -1
const numbers4 = [1,2,3,4,5]
console.log(numbers4.indexOf(0)) // false
console.log(numbers4.indexOf(5)) // true

// Checking array
// Array.isArray: to check if the data type is an array
console.log(Array.isArray(numbers4))
const numberh = 100
console.log(Array.isArray(numberh))

// Converting Array to String
console.log(numbers4.toString())

// Joining Array Elements
const names = ['Ebrar', 'Deniz', 'Yıldız', 'Çisem', 'Emir']
console.log(names.join()) // bla,bla,bla
console.log(names.join('')) // no space
console.log(names.join(' ')) // regular
console.log(names.join(', ')) // bla, bla, bla
console.log(names.join(' <3 '))

// Slice Array Elements
const numbers5 = [1,2,3,4,5]
console.log(numbers5.slice())
console.log(numbers5.slice(0))
console.log(numbers5.slice(0, numbers5.length))
console.log(numbers5.slice(1,4))

// Splice method in array
//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
numbers5.splice()
console.log(numbers5)
numbers5.splice(0,1)
console.log(numbers5) // removes first item

const numbers6 = [1, 2, 3, 4, 5, 6]
numbers6.splice(3, 3, 7, 8, 9)
console.log(numbers6.splice(3, 3, 7, 8, 9))

// push and pop
const arr5 = ['if', 'you', 'know', 'you']
arr5.push('know')
console.log(arr5)
arr5.pop()
console.log(arr5)

// remove from the beginning
const numbers7 = [1,2,3,4,5]
numbers7.shift()
console.log(numbers7)

// add to the beginning
numbers7.unshift(1)
console.log(numbers7)

// reversing array order
numbers7.reverse()
console.log(numbers7)

// sorting elements in array
//arrange array elements in ascending order.
const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs2.sort()
console.log(webTechs2) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs2.reverse() // after sorting we can reverse it
console.log(webTechs2) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of Arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)
 console.log(fullStack.length)
 console.log(fullStack[0])
 console.log(fullStack[1])