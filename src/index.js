// console.log('Hello ES6!')

// ---== START ==---
// Exercises are marked by start and end comments
// ---=== END ===---

// ### LET vs VAR ###

// ---== START ==---
// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }

// console.log('i variable after loop:', i)

// for (let j = 0; j < 3; j++) {
//     console.log(j)
// }

// console.log('j variable after loop:', j)

// console.log('j variable  is not available in global scope so far.')

// 'Line 15:  'j' is not defined  no-undef'

// j defined by let is available only in (new in ES6) block scope!

// BUT
// let j = 0
// for (; j < 3; j++) {
//     console.log(j)
// }

// console.log('j variable after loop:', j)
// ---=== END ===---

// ### REDECLARATION ###

// ---== START ==---
// var name1 = 'Mark'
// var name1 = 'John'
// console.log('name1 is now:', name1)

// let can't be redeclarated
// let name2 = 'Mark'

// let name2 = 'John'
// console.log('name2 is now:', name2)
// 'Module build failed: Duplicate declaration "name2"'
// ---=== END ===---

// ### HOISTING ###

// ---== START ==---
// function v() {
//     x = 2
//     var x
//     console.log('Hoisting var', x)
// }

// v()

// function l() {
//     x = 2
//     let x
//     console.log('Hoisting var', x)
//    'x' was used before it was defined  no-use-before-define
// }

// l()
// ---=== END ===---

// ### CONST ###

// ---== START ==---
// let number = 1
// number = 2
// number = 3
// number = 4

// console.log('number is now:', number)

// const number2 = 1
// number2 = 2
// Syntax error: "number2" is read-only
// number2 = 3
// number2 = 4

// console.log('number2 is now:', number2)

// const obj = {}
// console.dir(obj)
// console.log(obj)
// obj = 1
// Syntax error: "obj" is read-only

// // BUT
// obj.name = 1
// console.log('obj.name is now:', obj.name)
// ---=== END ===---

// ### TEMPLATE STRINGS ###

// ---== START ==---
// const name = 'Bartosz'

// const helloTxt = `Hello ${name}!`

// console.log(helloTxt)

// console.log(`2 + 2 equals ${2 + 2}`)

// multiline strigns
// console.log(`1
// 2
// 3
// 4`)
// ---=== END ===---

// ### STATEMENTS ###

// ---== START ==---
// const redIsFavourite = true
// console.log(
//     `My favourite color is ${redIsFavourite ? '' : 'not'}red`
// )
// ---=== END ===---

// ### ARROW FUNCTION ###

// ---== START ==---
// const addOne = (a) => {
//     return a + 1
// }
// console.log('addOne(2)', addOne(2)) // 3

// const addTwo = a => {
//     return a + 2
// }
// console.log('addTwo(2)', addTwo(2)) // 4

// const addThree = a => a + 3
// console.log('addThree(2)', addThree(2)) // 5

// const addTwoDiff = (a, b) => a + b
// console.log('AddTwoDiff(2, 5)', addTwoDiff(2, 5)) // 7
// console.log('AddTwoDiff(1, 7)', addTwoDiff(1, 7)) // 8

// Immediately Invoking Function Expression (IIFE)
// let sum = ((a, b) => a + b)(7, 9)

// console.log('let sum = ((a, b) => a + b)(7, 9)', sum)

// BUT

// const addOneWithBug = a => { a + 1 }
// console.log('addOneWithBug(2)', addOneWithBug(2)) // undefined
// Expected an assignment or function call and instead saw an expression  no-unused-expressions

// console.log('(a => a + 1)(5)', (a => a + 1)(5)) // 6

// const returnObj1 = () => {name: 'Bartosz'}
// console.log(returnObj1())
// 'Found identifier with same name as label   no-label-var'
// It's NOT an object! It's block of code with 'name' as a label

// BUT
// const returnObj2 = () => ({name: 'Bartosz'})
// console.log(returnObj2())
// THIS will return an object

// ---=== END ===---

// ### ARROW FUNCTION & THIS ###

// ---== START ==---
// function Cat(name) {
//     this.name = name
//     this.sound = 'Meow'
//     this.makeSound = function () {
//         console.log(this.sound)
//     }
// }

// function ArrowCat(name) {
//     this.name = name
//     this.sound = 'Meow'
//     this.makeSound = () => console.log(this.sound)
// }

// const cat = new Cat('Timon')
// cat.makeSound() // 'Meow'

// window.makeSoundInGlobalScope = cat.makeSound
// window.makeSoundInGlobalScope() // undefined

// const ararowCat = new ArrowCat('Pumba')
// ararowCat.makeSound() // 'Meow'

// window.makeSoundInGlobalScope = ararowCat.makeSound
// window.makeSoundInGlobalScope() // 'Meow'
// ---=== END ===---

// ### TASK ###

// ---== START ==---
// function Counter() {
//     this.count = 0
//     this.startCounter = setInterval(
//         function () {
//             this.count += 1
//             console.log('this is counter', this.count)
//         }.bind(this),
//         1000
//     )
//     setTimeout(
//         (function () {
//             clearInterval(this.startCounter)
//         }).bind(this),
//         3000
//     )
// }

// function ArrowCounter() {
//     this.count = 0
//     this.startCounter = setInterval(
//         (() => {
//             this.count += 1
//             console.log('this is arrowCounter', this.count)
//         }),
//         1000
//     )
//     setTimeout(
//         ( () => {
//             clearInterval(this.startCounter)
//         }),
//         3000
//     )
// }

// window.counter = new Counter()
// window.arrowCounter = new ArrowCounter()
// ---=== END ===---

// ### CLASSES ###

// ---== START ==---
// // <-- Animal from class -->
// class Animal {
// // Object constructor
// // (executed when new Animal())
// // the same thing as constructor function
//     constructor(sound) {
//         this.sound = sound
//     }
//
// // class method
// // same as prototype property methods
// // it will belong to __proto__ of new object
//     makeSound() {
//         console.log(this.sound)
//     }
// }
//
// const animal = new Animal('wrrr!')
// console.log(animal)
// // <-- / Animal from class -->
//
// // classes is only new syntax for this below
//
// // <-- Animal from constructor -->
// function AnimalConstructor(sound) {
//     this.sound = sound
// }
//
// AnimalConstructor.prototype.makeSound = function () {
//     console.log(this.sound)
// }
//
// const animalFromConstructor = new AnimalConstructor('wrrr!')
// console.log(animalFromConstructor)
// // <-- / Animal from constructor -->
//
// // <-- Dog from constructor -->
// function DogConstructor(breed) {
//     AnimalConstructor.call(this, 'woof!')
// }
//
// DogConstructor.prototype = Object.create(AnimalConstructor.prototype)
// DogConstructor.prototype.constructor = DogConstructor
// // <-- / Dog from constructor -->
//
// // Below the same using classes
// // <-- Dog from class -->
// class Dog extends Animal {
//     constructor(breed) {
//         super('Wooof!')
//         this.breed = breed
//     }
// }
//
// const dog = new Dog('wrrr!')
// console.log(dog)
// // <-- / Dog from class -->
//
// // <-- Animal from class using arrow function -->
// class ArrowAnimal {
//     sound = 'wrauuuu!'
//
//     makeSound = () => {
//         console.log(this.sound)
//     }
// }
//
// const arrowAnimal = new ArrowAnimal('wrrr!')
// console.log(arrowAnimal)
// // <-- / Animal from class using arrow function -->
// ---=== END ===---

// ### EXPORT & IMPORT ###

// ---== START ==---
/*
import myNames, { name1, name2, name3 } from './exports'

console.log(myNames) // {name1: "Ala", name2: "Ola", name3: "Ela"}
console.log(name1) // Ala
console.log(name2) // Ola
console.log(name3) // Ela
*/
// ---=== END ===---

// ### DESTRUCTURING ###

// ---== START ==---
// // object with random keys
// const data = {
//     asdf: {name: 'Ala', lastname: 'Kowal'},
//     asdfa: {name: 'Ela', lastname: 'Kowalska'},
//     asdfs: {name: 'Ola', lastname: 'Kowalewska'},
//     asdfd: {name: 'Ada', lastname: 'Kowalczyk'},
//     asdff: {name: 'Anna', lastname: 'Kowalik'},
//     asdfg: {name: 'Aga', lastname: 'Kowal'}
// }
//
// // we want to console log all names
// console.log(
//     Object.entries(data)
//     // .map(person => person[1].name)
//     // .map(([key, value]) => value.name)
//     // .map(([, value]) => value.name)
//         .map(([, {name}]) => name)
// )
//
// const obj = {
//     name: 'Mateusz',
//     lastname: 'Choma'
// }
//
// const obj2 = Object.assign({}, obj) // shallow copy
//
// const obj3 = JSON.parse(JSON.stringify(obj)) // deep copy
//
// const obj4 = {
//     ...obj
// } // shallow copy
//
// console.log(obj4)
//
// const obj5 = {
//     ...obj,
//     lastname: 'Chomeusz'
// } // shallow copy
//
// console.log(obj5)
// ---=== END ===---

// ### SPREAD ###

// ---== START ==---
// const obj = {
//     name: 'Bartosz',
//     lastname: 'Wojtalewicz'
// }
//
// const obj2 = Object.assign({}, obj) // shallow copy
//
// const obj3 = JSON.parse(JSON.stringify(obj)) // deep copy
//
// const obj4 = {
//     ...obj
// } // shallow copy
//
// console.log(obj4)
//
// const obj5 = {
//     ...obj,
//     lastname: 'Bartewicz'
// } // shallow copy
//
// console.log(obj5)
// ---=== END ===---

// ### REST ###

// ---== START ==---
const logAll = function () {
    console.log(arguments)
}

logAll(1, 3, 'ala', 5, 'kota')

const logAllArrow = (...args) => console.log(args)

logAllArrow(1, 3, 'ala', 5, 'kota')

const logAllArrowV2 = (...args) => console.log(...args)

logAllArrowV2(1, 3, 'ala', 5, 'kota')

const add = (a, b, ...rest) => {
    console.log('Rest parameters: ', rest)
    return a + b
}

console.log(add(2,2))
console.log(add(2,2,2,2,'sdf'))

const sumAll = (...args) => args.reduce((sum, curr) => sum + curr, 0)

window.sumAll = sumAll
// ---=== END ===---
