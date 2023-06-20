// 1. ================

// const strings = ['Hello', 'world', 'Hello world']

// function foo(array) {
//   let result = ''
//   let resul2 = ''
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > result.length) {
//       result = array[i]
//     }
//   }
//   for (let i = result.length - 1; i >= 0; i--) {
//     resul2 += result[i]
//   }

//   return {
//     chappaAylantirilganVarianti: resul2,
//     uningUzunligi: resul2.length,
//   }
// }

// const { chappaAylantirilganVarianti, uningUzunligi } = foo(strings)
// console.log(uningUzunligi, chappaAylantirilganVarianti)

// 2 ============

// 1 usuli
// function foo(string) {
//   let result = ''
//   let bool = false
//   for (let i = 0; i < string.length; i++) {
//     for (let j = 0; j < string.length; j++) {
//       if (i !== j && string[i] === string[j]) {
//         bool = true
//       }
//     }
//     if (!bool) {
//       result += string[i]
//     }
//     bool = false
//   }
//   return result
// }

// console.log(foo('Helllllo'))

//  2 usuli
// function foo(string) {
//   let result = {}
//   let res = ''
//   for (let i = 0; i < string.length; i++) {
//     result[string[i]] = result[string[i]] ? result[string[i]] + 1 : 1
//   }

//   for (const key in result) {
//     if (result[key] === 1) {
//       res += key
//     }
//   }
//   return res

//   // if (result[string[i]]) {
//   //   result[string[i]] = result[string[i]] + 1
//   // } else {
//   //   result[string[i]] = 1
//   // }
// }

// console.log(foo('Helllllo'))

// =========== 3
// let string = 'He1llo'
// function foo(str) {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     result += isNaN(str[i]) ? str[i] : '$'
//   }
//   return result

//   // if (Number(str[i]) === Number(str[i])) {
//   //   result += '$'
//   // } else {
//   //   result += str[i]
//   // }
//   // if (!isNaN(str[i])) {
//   //   result += '$'
//   // } else {
//   //   result += str[i]
//   // }
// }

// console.log(foo(string))

// ============ 4

// let n = 111111

// function foo(number) {
//   const str = String(number)
//   for (let i = 0; i < str.length; i++) {
//     if (str[0] !== str[i]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(foo(n))

// ========== 5

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// function foo(arr) {
//   const arrLength = arr.length
//   if (arrLength % 2 === 1) {
//     return false
//   }
//   const result = []
//   const first = arr.splice(0, arrLength / 2)
//   result.push(...arr, ...first)
//   return result
// }

// console.log(foo(numbers))

// ========== 6

// const first = {
//   test: 'Kamronjon',
//   age: 12,
// }

// const second = {
//   name: 'Kamronjon',
//   age: 12,
// }

// function foo(first, second) {
//   if (!Object.keys(first).length && !Object.keys(second).length) return false
//   for (const key in second) {
//     if (first[key] !== second[key]) {
//       return false
//     }
//   }
//   return true
// }

// console.log(foo(first, second))

// ======= 7

// function foo(num) {
//   return !isNaN(num) && typeof num === 'number'
// }

// console.log(foo(5))

// ==========

// String

// "", '', ``

// let str = `Hello world ${10 + 20}`
// let str = 'Hello world ' + (10 + 20)

// let str = new String('Hello world')
// let str1 = 'Hello world'
// console.log(str.valueOf() === str1)

// let str = `A`
// let str1 = "O'zbekiston \t ni sog'inaman"

// console.log(str1)

// console.log(str.indexOf('As'))

// console.log(str.at(-48))

// console.log(str.charCodeAt(0))

// console.log(str1.includes('ki'))

// console.log(str.lastIndexOf('else'))
// console.log(str.indexOf('else'))

// let str = "ahmoq sen odam bo'maysan ahmoq "
// "***** sen odam bo'maysan *****"
// // const newStr = str.replace('ahmoq', '******')
// // const newStr = str.trimStart()
// // const newStr = str.trimEnd()
// // console.log(newStr.replace('ahmoq', '******'))

// // const newString = str.split(' ', 3)
// // console.log(str)
// // console.log(newString)

// console.log('h'.charCodeAt(0))

// const str = 'Salom ahmoq ahmoq ekansan jinni men dunyoni sevaman'
// // const BAD_WORDS = ['ahmoq']
// const BAD_WORDS = {
//   ahmoq: 'ahmoq',
//   jinni: 'jinni',
// }

// function foo(str, badWordList) {
//   const arr = str.split(' ')
//   let result = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (badWordList[arr[i]]) {
//       let newWord = ''
//       for (let j = 0; j < badWordList[arr[i]].length; j++) {
//         newWord += '*'
//       }
//       result += ' ' + newWord + ' '
//     } else {
//       result += arr[i] + ' '
//     }
//   }
//   return result
// }

// console.log(foo(str, BAD_WORDS))

let harf = 'hello vatan'
const kattaHarf = harf[0].toUpperCase() + harf.slice(1)
console.log(kattaHarf)
console.log(harf)
