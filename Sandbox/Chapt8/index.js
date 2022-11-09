let myMap = new Map(
    [
      ["city","London"],
      ["pop",9000000],
      ["Size", 56]  
    ]
)

console.log(myMap)
console.log(myMap.size)

console.log(myMap.get("city"))
console.log(myMap.has("mayor"))

myMap.set("mayor", "Smith")
console.log(myMap)

 myMap.delete("Size")
console.log(myMap.size)

myMap.forEach(city => {
    console.log(city)
})

for (let key of myMap.keys()){
    console.log(`Key: ${key}`)
}

for (let [key, value] of myMap){
    console.log(`Key: ${key} --- Value: ${value}`)
}

// A type of Set

let mySet = new Set();

mySet.add("Apples")
mySet.add("Bananas")
console.log(mySet.size)

mySet.add("Apples")
console.log(mySet.size)

console.log(mySet.has("Pears"))

mySet.delete("Apples")
console.log(mySet.size)
console.log(mySet)

mySet.clear()
console.log(mySet.size)




