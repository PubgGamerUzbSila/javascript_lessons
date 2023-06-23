// 'use strict'
// const ketmon = new Map()

// ketmon.set('name', 'John')
// ketmon.set('age', 30)
// ketmon.set('isMarried', false)

// const res = ketmon.entries()

// ketmon.clear()
// ketmon.delete('isMarried')

// console.log(Object.fromEntries(res))

// const person = {
//   name: 'John',
//   isMarried: false,
//   age: 20,
// }

// const res = Object.entries(person)
// console.log(res)

// const arr = [
//   ['name', 'John'],
//   ['age', 20],
//   // [
//   //   'tasks',
//   //   [
//   //     {
//   //       date: '12',
//   //       isFinished: true,
//   //     },
//   //   ],
//   // ],
// ]

// const newObj = Object.fromEntries(arr)
// console.log(newObj)
// console.log(ketmon.has('name'))

// console.log(ketmon.get('age'))

// console.log(ketmon.keys())
// console.log(ketmon.values())
// console.log(ketmon.keys())
// console.log(map.size)

// [["name", "John"], ["age", "30"]]

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(Object.entries(obj))

// const obj = {
//   name: 'Hello',
// }

// Object.keys(obj).length

// console.log(Object.getOwnPropertyNames(obj).length)

// const arr = ['apple', 'apple', 'banana']
// const arr2 = ['apple', 'apple', 'orange']

// const uniqueValues = new Set([...arr, ...arr2])
// uniqueValues.add('Ravshan')
// uniqueValues.add('Ravshan')
// uniqueValues.delete('banana')

// // uniqueValues.clear()

// console.log(typeof uniqueValues)

// function ketmon(arr) {
// const res = {}
// for (let i = 0; i < arr.length; i++) {
// res[arr[i]] = arr[i]
// }
// return Object.keys(res)
// }

// console.log(ketmon(['apple', 'apple', 'banana', 'banana']))

// Berilgan stringdagi harflar necha marta ishtirok etganini chiqazib beradigan function yozing.
// Bunda Mapdan foydalaning

// const str = 'Hello world'
// const map = new Map()

// for (let i = 0; i < str.length; i++) {
//   // Birinchi usuli
//   // map.set(str[i], (map.get(str[i]) || 0) + 1)

//   // Ikkinchi usuli
//   if (map.has(str[i])) {
//     const prev = map.get(str[i])
//     map.set(str[i], prev + 1)
//   } else {
//     map.set(str[i], 1)
//   }
// }

// console.log(map)

// const str = 'Javascript'

// const set = new Set(str)
// let result = ''

// set.forEach((item) => (result += item))

// console.log(result)

// function foo() {
//   let a = 20

//   console.log(a)
// }
// a = 10

// console.log(a)
