// IF
let num = 3
if (num > 0){
    console.log(`${num} is a positive number`)
}

let isRaining = true
if(isRaining) {
    console.log("remember to bring an umbrella")
}

// IF - ELSE
if (num>0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}

// IF - ELSE IF - ELSE
let a = 0
if(a>0){
    console.log(`${a} is a positive number`)
} else if(a<0) {
    console.log(`${a} is a negative number`)
} else(a ==0) 
    console.log(`${a} is zero`)

// SWITCH
// an alternative for if else if else else
let weather = 'sunny'
switch(weather) {
    case 'rainy':
        console.log("you need a rain coat")
    break
    case 'cloudy':
        console.log("it might be cold, you need a jacket")
    break
    case 'sunny':
        console.log("you might need sunglasses")
    break
    }

let dayUserInput = prompt('what day is today ?')
let day = dayUserInput.toLowerCase

switch(day){
    case 'monday':
        console.log("today is monday")
    break
    case 'tuesday':
        console.log("today is tuesday")
    break
    case 'wednesday':
        console.log("today is wednesday")
    break
    case 'thursday':
        console.log("today is thursday")
    break
    case 'friday':
        console.log("today is friday")
    break
    case 'saturday':
        console.log("today is saturday")
    break
    case 'sunday':
        console.log("today is sunday")
    break
    default:
        console.log("it is not a weekday")
}
