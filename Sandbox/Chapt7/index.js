
function mySub() {
    console.log("This is from the mySub Function again")
}

mySub();

function printInput(user, age){
   return `Hi there ${user}! You are ${age.City} years old`
}

let userName = "Jim";
let userAge = 102;
let myObject = {
    "Age" : "32",
    "City" : "London"
}
let myreturn = printInput("Bob", myObject);
console.log(myreturn)

const calcArea = function(r) {
    let area = 3.142 * r**2;
    return `The area of circle (r)${r} is ${area}`;
}


const calcArea2 = function(r) {
    return 3.142 * r**2;
}

const area = calcArea(5);
console.log(area)

//Arrow Functions

const calcAreaArrow = (r) => {
    return 3.142 * r**2;
}

const arrow = calcAreaArrow(5);
console.log(`Area is ${arrow} from Arrow Function`)

const calcAreaArrow2 = r => 3.142 * r**2;

const arrow2 = calcAreaArrow2(5);
console.log(`Area is ${arrow} from Arrow Function`)


const noArgs = () => "No Args in this function";

console.log(noArgs())

const multiArgs = (h, l) => `The area of that rectangle is ${h*l}`

const rect = multiArgs(4,8);
console.log(rect)