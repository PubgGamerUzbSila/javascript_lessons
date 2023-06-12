// Javascript qanday ishlaydi
// Hoisting
// console.log(a)
// var a = 10
// console.log(a)

// LET
// console.log(a)
// TDZ => temporal dead zone (Vaqtinchalik o'lik xudud)
// let a = 10
// const a = 20
// NOT DEFINED = e'lon qilinmagan

// foo()
// var foo = () => {
//   console.log('hejhe')
// }

// function foo() {
//   console.log('hello world')
// }

// foo()

// let var, const

// undefined()

// foo()

// undefined()

// console.log(foo())
// foo()
// function foo() {}

// console.log(typeof typeof undefined)

// if (false) {
//   console.log('hello world')

//   console.log('hello world 1')
// }

// 3-xil

// Block, function, global scope

// Block
// if (true) {
//   var a = 10
//   // let a = 10
//   // const a = 10
// }

// console.log(a)

// for (let i = 0; i <= 100000; i++) {}

// console.log(i)

// Function scope
// function foo() {
//   var a = 10
// }

// foo()
// console.log(a)

// let birinchi = 'Suhrob'
// let ikkinchi = 'Javohir'

// const students = [
//   'Suhrob',
//   'Javohir',
//   ,
//   'Asqar',
//   'Nurbek',
//   'Ravshan',
//   true,
//   false,
//   null,
//   undefined,
//   0,
//   NaN,
//   '',
//   10,
// ]

const phoneNumbers = [
  ['0000000', 'John aka'],
  ['9999', "Bo'lani nomeri"],
]

const nestedArrays = [
  [[[[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]], 3, 2]], 3, 4, 5]]]]]]]]]],
]

// [1,3,2,3,4,5]

// console.log(phoneNumbers[0][0])
// console.log(phoneNumbers[0])
// console.log(phoneNumbers[1])
// console.log(phoneNumbers[2])

// for (let i = 0; i < phoneNumbers.length; i++) {
//   console.log(phoneNumbers[i])
// }

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log(`i = ${i}, j = ${j}`)
//   }
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (j === 2) {
//       break
//     }
//     console.log(i)
//   }
// }

// 8 ta
// Null, undefined, string, boolean, number, bigInt, object, symbol

// const arr = []
// console.log(typeof arr)

// const arr = [12, 3, 21321, 312, 4, 4]

// const arr2 = arr

// arr2[2] = 43432423

// console.log(arr)

// const son = 5
// let n = son

// n = 50
// console.log(son)

// function foo(param) {
//   if (Array.isArray(param)) {
//     for (let i = 0; i < param.length; i++) {
//       if (param[i] === 4) {
//         param[i] = null
//       }
//     }
//     return param
//   }
//   return 'Berilgan qiymat array emas'
// }

// console.log(foo(undefined))
// arr[3] = null

// console.log(arr)

// function foo(...numbers) {
//   let result = 0
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]
//   }

//   return result
// }

// console.log(foo(1, 2, 4, 45, 5, 6, 10000))

// const result = foo(10 + 20, 40)

// console.log(result)

const arr1 = []

function add(array, value) {
  array[array.length] = value
  return array
}

console.log(add(arr1, 45))
console.log(add(arr1, 55))
console.log(add(arr1, 65))
