let numtest = 66.87363;
let twoDecimalPoints = numtest.toFixed(2);
console.log(twoDecimalPoints)

let stringTest = "I am the very model of a modern";
let indexOfM = stringTest.indexOf("m");
console.log(indexOfM);

stringTest = stringTest.toUpperCase();
console.log(stringTest);

let start = stringTest.indexOf("AM");
let end = stringTest.indexOf("OF");
let substr = stringTest.substring(start, end);
console.log(substr);

document.write(`<p> ${substr} </p>`)