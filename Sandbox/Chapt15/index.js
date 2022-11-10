// //"use strict"

// let obj = {
//     name: "Dave"
// }

// console.log(obj.name)
// console.log(Object.isExtensible(obj))
// obj.age = 56;
// console.log(obj)

// let obj2 = {
//     name: "Bill"
// }

// console.log(obj2.name)

// Object.preventExtensions(obj2)
// obj2.age = 55;
// console.log(obj2)

class Car {
    constructor (wheels, power) {
        this._wheels = wheels;
        this._power = power;
        this._speed = 0
    }

    //Access Modifiers - Getters and Setters


    get wheels(){
        return this._wheels
    }

    set wheels(Wheels) {
        this._wheels = Wheels
    }

    accelerate(time){
        this._speed = this._speed + 0.5 * this._power
        return `after ${time} seconds, speed will be ${this._speed}`
    }
}


const myCar = new Car(4, 105);
console.log(myCar)
console.log(myCar.wheels)

myCar.wheels = 56;
console.log(myCar.wheels)

console.log(myCar.accelerate(50))
