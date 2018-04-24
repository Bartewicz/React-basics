console.log('Hello ES6!')

// ---== START ==---
// Exercises are marked by start and end comments
// ---=== END ===---

// LET vs VAR

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

// REDECLARATION

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

// HOISTING

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

// CONST

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

// TEMPLATE STRINGS

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

// STATEMENTS

// ---== START ==---
const redIsFavourite = true
console.log(
    `My favourite color is ${redIsFavourite ? '' : 'not'} red`
)
// ---=== END ===---