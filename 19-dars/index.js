// 'use strict'
// var fName = "O'ktam"

// function sayHello() {
//   let fName = undefined
//   let text = 'Assalom alaykum ' + window.fName
//   return text
// }

// const res = sayHello()

// console.log(res)

// single thread, multi thread, execution context,

// const arr = [1, 2, 3, [4, [5, [6, [7, [8, [9]]]]]]]

// function task1(array) {
//   let result = []
//   array.forEach((val) => {
//     if (Array.isArray(val)) {
//       result = [...result, ...task1(val)]
//     } else {
//       result.push(val)
//     }
//   })
//   return result
// }
// let res1 = task1(arr)
// console.log(res1)

// const res = arr.flat(Infinity)

// console.log(Array.isArray(arr))

/*
  so'zlardan iborat words massivi  va k butun son berilgan bo'lsa, 
  eng ko'p uchraydigan k ta so'zlarni qaytaring .

  Javobni lengthi bo'yicha eng yuqoridan pastgacha tartiblangan holda qaytaring. 
  Bir xil takrorlangan so'zlarni alifbo tartibi bo'yicha tartiblang (sortlang).
*/

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: [ "the", "is", "sunny", "day"]

// const words = [
//     'ddd',
//     'ddd',
//     'ddd',
//     'bb',
//     'bb',
//     'v',
//     'aa',
//     'aa',
//     'cc',
//     'cc',
//     'aaa',
//     'aaa',
//     'aaa',
//   ],
//   k = 5
// /Output: ['i', 'love']

// const map = new Map()

// for (const word of words) {
//   map.set(word, map.get(word) + 1 || 1)
// }

// const entries = Object.entries(Object.fromEntries(map))
// entries.sort((a, b) => {
//   if (a[1] === b[1]) {
//     return a[0].localeCompare(b[0])
//   }
//   return b[1] - a[1]
// })

// let res = ''

// for (let i = 0; i < k; i++) {
//   res += entries[i][0] + ' '
// }

// console.log(res.trim())

// const arr = [1, 2, 3, 1212, 6, 7]

// arr.sort(function (a, b) {
//   return b - a
// })

// console.log(arr)

// Selection sort
// const arr = [110, 45, 89, 67]

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[j] < arr[i]) {
//       ;[arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
// }

// console.log(arr)

// Insertion sort

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       ;[arr[j], arr[i]] = [arr[i], arr[j]]
//     }
//   }
// }

// console.log(arr)

// console.log(Math.round(4.569))

// const n = 29600
// console.log(n % 1000 > 500 ? n + 1000 - (n % 1000) : n - (n % 1000))

// function foo({ name, age }, a) {
//   // console.log(a)
//   console.log(`Assalom alaykum ${name} Yoshingiz: ${age}`)
// }
// const obj = {
//   name: 'John Doe',
//   age: 40,
// }
// foo(obj, 10)
// optional chaining

// function printInfo({ firstName, lastName, location: { city, street } = {} }) {
//   console.log(`
// Ismi: ${firstName},
// Familiyasi: ${lastName},
// Joylashuv: {
//   shahar: ${city},
//   ko'cha: ${street}
// }
//   `)
// }
// const obj = {
//   firstName: "O'ktam",
//   lastName: 'Qulsoatov',
//   location: { city: 'Termiz', street: 'Ahillik' },
// }
// printInfo(obj)

// const arr = [10, 22, 334, 467]

// const [tortinchi, birinchi, ikkinchi, uchinchi] = arr

// console.log(tortinchi)

// const arr = [1, 23, 4, 66]

// ;[arr[0], arr[1]] = [arr[1], arr[0]]
// console.log(arr)

// ;(function () {
//   console.log('Hello world')
// })()

// Tayanch so'zlar => execution context
