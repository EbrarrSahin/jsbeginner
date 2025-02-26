let ageUserInput1 = prompt("enter your age: ")
if(ageUserInput1 <18) {
    let waitNum = 18 - ageUserInput1
    console.log(`you are left with ${waitNum} years to drive`)
} else {
    console.log("you are old enough to drive")
}

let ageUserInput = prompt("enter your age: ")
let myAge = 20
let olderAge
if(myAge > ageUserInput){
    olderAge = myAge - ageUserInput
    console.log(`i am ${olderAge} years older than you`)
} else if (myAge < ageUserInput) {
    olderAge = ageUserInput - myAge
    console.log(`you are ${olderAge} years older than me`)
} else (myAge == ageUserInput) {
    console.log('we are at the same age')
}

let grade = 70
switch(true){
    case (grade >= 80 && grade <= 100):
        console.log('your grade is A')
    break
    case (grade >= 70 && grade <=89):
        console.log('your grade is B')
    break
    case (grade >= 60 && grade <= 69):
        console.log('your grade is C')
    break
    case (grade >= 50 && grade <= 59):
        console.log('your grade is D')
    break
    case (grade >= 0 && grade <= 49):
        console.log('your grade is F')
    break
}

