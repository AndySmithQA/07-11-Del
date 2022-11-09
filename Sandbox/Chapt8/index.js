// let myMap = new Map(
//     [
//       ["city","London"],
//       ["pop",9000000],
//       ["Size", 56]  
//     ]
// )

// console.log(myMap)
// console.log(myMap.size)

// console.log(myMap.get("city"))
// console.log(myMap.has("mayor"))

// myMap.set("mayor", "Smith")
// console.log(myMap)

//  myMap.delete("Size")
// console.log(myMap.size)

// myMap.forEach(city => {
//     console.log(city)
// })

// for (let key of myMap.keys()){
//     console.log(`Key: ${key}`)
// }

// for (let [key, value] of myMap){
//     console.log(`Key: ${key} --- Value: ${value}`)
// }

// // A type of Set

// let mySet = new Set();

// mySet.add("Apples")
// mySet.add("Bananas")
// console.log(mySet.size)

// mySet.add("Apples")
// console.log(mySet.size)

// console.log(mySet.has("Pears"))

// mySet.delete("Apples")
// console.log(mySet.size)
// console.log(mySet)

// mySet.clear()
// console.log(mySet.size)


let hanSolo = new Map(
    [
        ["Vehicle","Millenium Falcon"],
        ["bff", "Chewy"],
        ["Sweetheart", "Leia"]
    ]
)

console.log(hanSolo.size)
console.log(hanSolo.get("Vehicle"))
console.log(hanSolo.has("Sweetheart"))
console.log(hanSolo.has("Jedi"))

hanSolo.set("Son", "Ben")
console.log(hanSolo.get("Son"))

for (let [key, value] of hanSolo){
    console.log(`Key: ${key} --- Value: ${value}`)
}

hanSolo.set("bff", "Luke")
console.log(hanSolo)

hanSolo.delete("Son")
console.log(hanSolo)

hanSolo.clear()
console.log(hanSolo)