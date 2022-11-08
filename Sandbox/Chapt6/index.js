//["person1","person2"]
let a = Array();
let b = Array(10);
let c = Array("Tom", "Frank", "Harry");
let d = ["Dave","Fred","Lisa"];

console.log(c)
console.log(d)

let classRoom = new Array(5);
classRoom[0] = "Dave";
classRoom[4] = "Larry";

console.log(classRoom)

let num = classRoom.length;
console.log(num)

for (let i = 0; i < classRoom.length; i++){
    console.log(classRoom[i])
}


//Methods

let fruitStr = fruit.join("---")
console.log(fruitStr)

// console.log(fruit.sort())
//push 

fruit.push('Lemons','Grapes')
console.log(fruit)

// //pop
// //removes the last element of an array - returns it
console.log(fruit.pop())

let fruit = ['Apples','Pears','Bananas','Oranges'];

// shift and unshift
// operate on the start
// unshift - Add elements to the array (beginning)

fruit.unshift('Kiwis')
console.log(fruit)

//shift - removes the first array element

console.log(fruit.shift())
console.log(fruit)

//Array.from()

let hOnes = document.querySelectorAll('h1');
//console.log(hOnes)
hOnes = Array.from(hOnes)
console.log(hOnes)

let newArray = ['John','Smith',23]

console.log(newArray.findIndex(n => n === 'Smith'))
console.log(newArray)

// fill
console.log(['John','Smith',23].fill(null));
console.log(['John','Smith',23].fill(null,2));

//.entries() - .keys() - .values()

let arrayValues = ["bob", "Tom","linda", "kate"].values();

console.log(arrayValues.next().value); //Enumerate
console.log(arrayValues.next().value);

let again;
while (again != "n"){
    console.log(arrayEnties.next().value);
    again = prompt("next one?")
}


let myArray = [1, 2, 3, 4];
for (el of myArray) {
    if (el === 4) break;
    console.log(el)
    }
// foreach 



