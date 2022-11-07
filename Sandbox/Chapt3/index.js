// let a = 2;
// let b = 4;
// let c = a ** b

// let j = 12
// let k = 3
// console.log(j % k)


//console.log((3 + 5) * 10) // BIDMAS BODMAS
// +=
// -=
// /=
// *= a *= b
//console.log(c)

// a--;
// console.log(a)

//greater than > less than <
// >= < =
// = == (comparison) === (type and value comp)

// let a = 5
// if (a > 3){
//     pass
// }

// And = &&
// OR = ||
// NOT = !

// console.log(5 > 3 && 8 > 9)
// console.log(5 > 3 && 8 < 9)

// let a = 0;
// a = a + 1; // a = 1
// a++ // a = 2
// let b = a++ //b = 2, a = 3
// let c = ++a //c = 4
// console.log(b)
// console.log(c)

// Why? 
// ++a = Incriment, then Assign
// a++ = assign, then incriment

// let z = 1; // z = 1
// console.log(z)
// z = z + 5;
// console.log(z) // z = 6
// let y = ++z; 
// console.log(y) // z = 7, y = z(7)
// z = y++
// console.log(`y = ${y} : z = ${z}`)// y = 8 z = 7

//short Circuit coding

//console.log(5 < 10 || z++ )

// let a = 2;
// // let b = "two";
// let b = "2";

// // console.log(typeof a)
// // console.log(typeof b)
// // console.log(typeof c)

// // console.log(a * a, typeof(a * a))
// // console.log(a + b, typeof(a + b))
// // console.log(a * c, typeof(a * c))

// // console.log(3 * "ho")

// let c = (a === b)
// console.log(c)

// let a = false;
// let b = 0;

// console.log(a == b)
// console.log(a === b)
// console.log(a != b)
// console.log(a !== b)

// Type Conversion
//eval
console.log(eval("6*3+5"))

//explicity change string into an INT
let mystr = "5.9";
let myNum = parseInt(mystr)
console.log(myNum, typeof myNum)

//parseFloat 
let myFloat = parseFloat(mystr);
console.log(myFloat, typeof myFloat)

let s = "5"
let i = 5
let total = i + parseInt(s)

console.log(total)

console.log(isNaN(s))
console.log(!isNaN(i))