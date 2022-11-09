
// function mySub() {
//     console.log("This is from the mySub Function again")
// }

// mySub();

// function printInput(user, age){
//    return `Hi there ${user}! You are ${age.City} years old`
// }

// let userName = "Jim";
// let userAge = 102;
// let myObject = {
//     "Age" : "32",
//     "City" : "London"
// }
// let myreturn = printInput("Bob", myObject);
// console.log(myreturn)

// const calcArea = function(r) {
//     let area = 3.142 * r**2;
//     return `The area of circle (r)${r} is ${area}`;
// }


// const calcArea2 = function(r) {
//     return 3.142 * r**2;
// }

// const area = calcArea(5);
// console.log(area)

// //Arrow Functions

// const calcAreaArrow = (r) => {
//     return 3.142 * r**2;
// }

// const arrow = calcAreaArrow(5);
// console.log(`Area is ${arrow} from Arrow Function`)

// const calcAreaArrow2 = r => 3.142 * r**2;

// const arrow2 = calcAreaArrow2(5);
// console.log(`Area is ${arrow} from Arrow Function`)


// const noArgs = () => "No Args in this function";

// console.log(noArgs())

// const multiArgs = (h, l) => `The area of that rectangle is ${h*l}`

// const rect = multiArgs(4,8);
// console.log(rect)

//Default Values

function doSomething(arg1, arg2, arg3=5){
    return `Arg1: ${arg1} - Arg2: ${arg2} - Arg3: ${arg3}`
}

console.log(doSomething(5, 6, 7))

// Variadic Functions - Any Number of Arguments
// ... - rest - the remaining arguments (NOT Representational State Transfer)
function multiply(arg1, ...args){
    args.forEach((arg, i, array) => array[i] = arg*arg1 );
    return args;
}
console.log(multiply(5, 2, 5, 7, 8,6,4,5,7,8,6,44))


console.log(`before function call = ${myVar}`)
function newFunct(){
    let mynewVar = 10;
    return `The local value of myVar is ${mynewVar}`
}

console.log(newFunct())

console.log(`After function call = ${myVar}`)

//Callback function 

const myFunction = callback => {
    let value = 90;
    callback(value);
}

myFunction(function(value) {
    console.log(`Value was ${value}`)
})