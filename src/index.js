console.log('Hello ES6!')

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
function Cat(name) {
    this.name = name
    this.sound = 'Meow'
    this.makeSound = function () {
        console.log(this.sound)
    }
}

function ArrowCat(name) {
    this.name = name
    this.sound = 'Meow'
    this.makeSound = () => console.log(this.sound)
}

const cat = new Cat('Timon')
cat.makeSound() // 'Meow'

window.makeSoundInGlobalScope = cat.makeSound
window.makeSoundInGlobalScope() // undefined

const ararowCat = new ArrowCat('Pumba')
ararowCat.makeSound() // 'Meow'

window.makeSoundInGlobalScope = ararowCat.makeSound
window.makeSoundInGlobalScope() // 'Meow'

// ---=== END ===---
