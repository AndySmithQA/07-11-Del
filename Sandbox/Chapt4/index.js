//Selection IF Statements
// let name = "Jim"
// let age = 19;

// if (age > 17) {
//     console.log("You May Enter")  
// } else if (age == 17){
//     console.log("You are almost of age")
// } else if (age == 16){
//     console.log("You are getting there")
// } else {
//     console.log("You are Underage")
// }

// if (age > 17) {
//     console.log("You May Enter") 
// }

// if (age > 18) {
//     console.log("You May Enter") 
// }


// let username = "bob2";
// if (username == "bob") {
//     console.log("Welcome Bob")
//     let pw = prompt("Enter Pw")
//     if (pw == "LetMeIn"){
//         console.log("Success")
//     } else {
//         console.log("Incorrect Password")
//     }
    
// } else {
//     console.log("Go Away. You arent Bob")
// }

// //ternary operator IF

// let now = new Date();
// let greetings = "Good" + (now.getHours() > 17 ? " evening" : " day");
// document.write(greetings)

// let greeting = "Good";
// if (now.getHours > 17) {
//     greeting += " evening";
// } else {
//     greeting += " day"
// }

// // SWITCH - MOre than 2 ELSE IFs 

// let day;

// switch (new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//            break;

// }

// console.log(`Today is ${day}`)

//Iteration - Loops 
//WHILE loop - Conditional Loops

// let names;
// while (names != "bob"){
//     names = prompt("Enter your name")
//     continue    
// }
// document.write("Loop Complete")
// //break
// //continue

// let age = 8;

// do {
//     console.log(age);
//     age++;
// } while (age < 7);

// //For loops - Unconditional

// for (let i = 1; i < 11; i++){
//     if (i % 2 == 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`) 
//     }
// }

// let people = ["Bob", "Dave", "Maureen"];

// people.forEach(person => {
//     console.log(person)
// });

// people.forEach((person, index) => {
//     console.log(index +1, person)
// });


// for (let i = 1; i < 10; i++){
//     console.log(i)
// }

let x = 2;
let loopCounter = 0;
while (loopCounter < 10){
    console.log(`${x} squared is ${x*x}`);
    x++
    document.write(`<p> ${loopCounter}</p>`);
    loopCounter++;
}