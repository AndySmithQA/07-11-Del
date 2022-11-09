//API Call - Data = JSON JavaScript Object Notation
//Data Structures

// const student = new Object();

// student["name"] = "Jim";
// student["id"] = 12345;
// student["CourseCode"] = "JS101";

// console.log(student)

// student.email = "Jim@qa.com";

// console.log(student)
// console.log(student.email)
// console.log(student["email"])

// const blogs = [
//     {title: 'Why I love Cheese', likes: 30},
//     {title: '7 things to do with grapes', likes: 50}
// ]

let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@qa.com',
    location: 'Berlin',
    blogs: [
        {title: 'Why I love Cheese', likes: 30},
        {title: '7 things to do with grapes', likes: 50},
        {title: 'more Cheese', likes: 50}
    ],
    login: function(){
        console.log("The user logged in")
    },
    logout(){
        console.log("The user logged out")
     
    },
    logblogs: function(){
        console.log("The user has written: ");
        this.blogs.forEach(blog => {
          
            console.log(blog.title, blog.likes)
        })
    } 
}

// user.login()
// user.logout()
// user.logblogs()

//console.log(user)

// console.log(user.name)
// console.log(user["name"])

//update

user['name'] = "Linda"
console.log(user.name)

// //Can only do this with square bracket notation
// const key = 'location'
// console.log(user[key])

// for (let i = 0; i < user.length; i++){
//     for (let key in user[i]){
//         console.log(`${key}: ${user[i][key]}`)
//     }
// }



// let obj1 = {
//     a: 1
// }

// let obj2 = {
//     b: 2
// }

// let obj3 = {
//     c: 3
// }

// Object.assign(obj1, obj2, obj3)

// console.log(obj1)
// console.log(obj2)

//Destructuring Arrays

let first, second, third;
[first, second, third] = ["I", "Love", "Javascript"]
console.log(first)
console.log(second)
console.log(third)

//Deconstructing Objects

let myObject = {firstobj: "Salt", secondobj: "Pepper"};
let {firstobj: condiment1, secondobj: condiment2} = myObject;

console.log(condiment1)
console.log(condiment2)


const darthVader = {
    allegiance: "Empire",
    weapon: "Lightsabre",
    sith: true 
}

console.log(darthVader.allegiance)
console.log(darthVader.weapon)
console.log(darthVader.sith)
console.log(darthVader.jedi)
console.log(Object.keys(darthVader).length)

darthVader["Children"] = 2
darthVader["ChildNames"] = ["Luke", "leia"]

for ([key, value] in darthVader.keys()){
    console.log(`Key: ${key} - Value: ${value}`)
}



