// const str = 'Hello world salom'

// const foo = (string) => string.trim().toLowerCase().replace(/ /g, '-')
// res = res.toLowerCase()
// res = res.replaceAll(' ', '-')
// res = res.replace(/ /g, '-')
// return res
// }

// console.log(foo(str))

// 2 ===============

// const str = 'hello world'
// let array = str.split(' ')
// let res = ''
// function foo(str) {
//   for (let i = 0; i < array.length; i++) {
//     res += array[i].charAt(0).toUpperCase() + array[i].slice(1) + ' '
//   }
//   return res
// }
// console.log(foo(str))

// let str = 'soLwGsdG'

// function fo(str) {
//   let result = ''
//   for (let i = 0; i < str.length; i++) {
//     let word = str[i]
//     result +=
//       word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase()
//     // if (word === word.toLowerCase()) {
//   result += word.toUpperCase()
// } else {
//   result += word.toLowerCase()
// }
// }
//   return result
// }
// console.log(fo(str))

// function task4(str, n) {
//   let result = []
//   for (let i = 0; i < str.length; i += n) {
//     result.push(str.substr(i, n))
//   }
//   return result
// }
// console.log(task4('w3resource', undefined))

// =====5======================

// let str = '!-@salom#$%dun^yo&*'

// console.log(findNonPrintable(str))

// function findNonPrintable(str) {
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === '-' ||
//       (str[i] >= 'A' && str[i] <= 'Z') ||
//       (str[i] >= 'a' && str[i] <= 'z')
//     ) {
//       newStr += str[i]
//     }
//   }
//   return newStr
// }

// let str = `<div>salom alik </div>`
// let yozilsinmi = true,
//   y = ''
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == '<') {
//     yozilsinmi = false
//   }
//   if (str[i] == '>') {
//     yozilsinmi = true
//   }

//   if (yozilsinmi) {
//     y += str[i]
//   }
// }
// console.log(y)

// ========
// let n = 10_000_000_000_000
// let n = 15.333
// console.log(typeof Number(n))
// const res = ~n
// console.log(res + 2)
// console.log(parseInt(n))
// console.log(parseFloat(n))
// console.log(Number(n))
// let n = 0.1 + 0.2
// console.log(n.toFixed(1))

// let n = new Number(20)

// let num = 1000000
// let text = num.toLocaleString('en-US', { style: 'currency', currency: 'UZS' })
// console.log(text)

// let n = '10_000_000_000'

// console.log(parseInt(n))

// function foo(str) {
//   try {
//     return str.substr(0, 5)
//   } catch (kamron) {
//     return 'Bu value bilan substring methodini ishlatib bo`lmaydi'
//   }
// }

// console.log(foo(5))

// console.log('Hello worlds')

// function foo({ firstName, lastName, age }) {
//   // const { firstName, lastName, age } = obj
//   console.log(
//     `Sizning ismingiz: ${firstName}, Sizning familiyangiz: ${lastName}, Sizning yoshingiz: ${age}`
//   )
// }

// const person = {
//   age: 20,
//   firstName: 'John',
//   lastName: 'Doe',
// }

// foo(person)

// function foo(firstName, lastName) {
//   return { firstName, lastName }
// }

// const { firstName, lastName } = foo('John', 'Doe')

// console.log(lastName, firstName)

// const React = {
//   useState: function (value) {
//     return [
//       value,
//       function setValue(params) {
//         console.log('Hello world')
//       },
//     ]
//   },
// }

// const { useState } = React
// const [isFocused, setIsFocused] = useState(false)
// console.log(isFocused)
// let count = 0
// function useState(param) {
//   count = param
//   return [
//     count,
//     function setState(param) {
//       return (count += param || 1)
//     },
//   ]
// }

// const [state, setState] = useState(10)

// console.log(setState())

// const arr = [
//   10,
//   2,
//   3,
//   function () {
//     console.log('Hello world')
//   },
// ]

// const [birinchisi, ikkinchisi, uchinchisi, tortinchisi] = arr

// tortinchisi()

// const str = ' world world  world '

// const newStr = str.replace(/hello/gi, 'Salom')

// console.log(newStr)

// const regex = /hello/gi
// const result = regex.test(str)
// const result = regex.exec(str)
// console.log(result)

// birinchiLoop: for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 3; j++) {
//     break birinchiLoop
//   }
//   console.log('hello world')
// }

// let rand = Math.floor(10000 + Math.random() * 90000)

// console.log(rand)
