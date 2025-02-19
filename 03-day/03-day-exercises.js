let firstName = 'Ebrar'
let lastName = 'Şahin'
let coutry = 'Turkiye'
let city = 'İzmir'
let age = 20
let isMarried = false
let year = new Date()
console.log(typeof 'Ebrar')
console.log(typeof lastName)
console.log(typeof age)
console.log(typeof year)

console.log('10' == 10)

console.log(parseInt('9.8') == 10)

console.log('çisem'.length == 'ebrar'.length)

let age2 = 17
let message = age2 >= 18
    ? console.log(true)
    : console.log(false)

/*
    4 > 3 t
    4 >= 3 t
    4 < 3 f
    4 <= 3 f
    4 == 4 t
    4 === 4 t
    4 != 4 f
    4 !== 4 f
    4 != '4' f
    4 == '4' t
    4 === '4' f
    Find the length of python and jargon and make a falsy comparison statement.
*/

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length < 'jargon'.length)

/*
    4 > 3 && 10 < 12 t
    4 > 3 && 10 > 12 f
    4 > 3 || 10 < 12 t
    4 > 3 || 10 > 12 t
    !(4 > 3) f
    !(4 < 3) t
    !(false) t
    !(4 > 3 && 10 < 12) f
    !(4 > 3 && 10 > 12) t
    !(4 === '4') t
    There is no 'on' in both dragon and python f
*/
console.log('dragon'.includes('on') && 'python'.includes('on'))

/*
    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const now = new Date()
const year2 = now.getFullYear()
console.log(year2)
const month = now.getMonth()
console.log(month)
const date = now.getDate()
console.log(date)

const allSeconds = Date.now()
console.log(allSeconds)

/*
let base = parseFloat(prompt("Enter the base of the triangle:"))
let height = parseFloat(prompt("Enter the height of the triangle:"))
let area = 0.5 * base * height
console.log(`The area of the triangle is: ${area}`);
*/

let name2 = 'Çisem'
let ctrl = name2.length > 7
    ? console.log('your name is long')
    : console.log('your name is short')

    
    const now2 = new Date()
    const year3 = now2.getFullYear()
    const month2 = now2.getMonth()
    const date2 = now2.getDate()
    const hours = now2.getHours()
    const minutes = now2.getMinutes()
    console.log(`${year3}-${month2}-${date2} ${hours}:${minutes}`)