//Selection IF Statements
// let name = "Jim"
let age = 19;

if (age > 17) {
    console.log("You May Enter")  
} else if (age == 17){
    console.log("You are almost of age")
} else if (age == 16){
    console.log("You are getting there")
} else {
    console.log("You are Underage")
}

if (age > 17) {
    console.log("You May Enter") 
}

if (age > 18) {
    console.log("You May Enter") 
}


let username = "bob2";
if (username == "bob") {
    console.log("Welcome Bob")
    let pw = prompt("Enter Pw")
    if (pw == "LetMeIn"){
        console.log("Success")
    } else {
        console.log("Incorrect Password")
    }
    
} else {
    console.log("Go Away. You arent Bob")
}

//ternary operator IF

let now = new Date();
let greetings = "Good" + (now.getHours() > 17 ? " evening" : " day");
document.write(greetings)

let greeting = "Good";
if (now.getHours > 17) {
    greeting += " evening";
} else {
    greeting += " day"
}

// SWITCH - MOre than 2 ELSE IFs 

let day;

switch (new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
           break;

}

console.log(`Today is ${day}`)

