// WeakMap, WeakSet

// const map = new Map()

// map.set('name', 'John')

// console.log(map)

// ==================

// function declaration
// function expression
// arrow function

// function sayHello() {
//   console.log('Hello')
// }

// sayHello()

// function expression

// const sayHello = function () {
//   console.log('Hello world')
// }

// sayHello()

// arrow function

// const sayHello = () => {
//   console.log('Hello world')
// }

// function foo(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c
//     }
//   }
// }
// // const ketmon = foo()
// // const ketmon2 = ketmon()

// // console.log(ketmon2())

// console.log(foo(1)(2)(3))

// const ketmon = function () {
//   return 'Hello'
// }

// ;(() => {
//   console.log('Hello world')
// })()

// const newArr = arr.sort((a, b) => a - b)

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i - 1] !== newArr[i] && newArr[i + 1] !== newArr[i]) {
//     console.log(newArr[i])
//   }
// }

// const map = new Map()

// map.set(3, 1)
// map.set('ketmon', 3)

// map.forEach((valueningOzi, key) => {
//   console.log(key)
// })

// const arr = [1, 2, 3, 1, 1, 2, 2]

// const map = new Map()

// for (const num of arr) {
//   map.set(num, map.get(num) + 1 || 1)
// }

// map.forEach((value, key) => {
//   value === 1 && console.log(key)
// })

// const nums = [1, 3, 5, 6],
//   target = 4

// function foo(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= target) {
//       return i
//     }
//   }
//   return arr.length
// }

// console.log(foo(nums, target))

// Result: 2

// nums = [1,3,5,6], target = 2

// Result: 1

// nums = [1,3,5,6], target = 7

// Result: 4

// nums = [10,30,50,60], target = 5

// Result = 0

// const idx = nums.indexOf(target)

// if (idx !== -1) {
//   console.log(idx)
// } else {
//   nums.push(target)
//   let newNums = nums.sort((a, b) => a - b)
//   console.log(newNums.indexOf(target))
// }

/**
 * Berilgan target array ichida mavjud bolsa uning indeksini
 * aks holatda uni joylashtirish mumkin bo'lgan indeksni qaytaring
 * Array har doim o'sish tartibida bo'ladi
 * */

// const alifbo = {
//   a: 'а',
//   b: 'б',
//   d: 'д',
//   e: 'э',
//   f: 'ф',
//   g: 'г',
//   h: 'ҳ',
//   i: 'и',
//   j: 'ж',
//   k: 'к',
//   l: 'л',
//   m: 'м',
//   n: 'н',
//   o: 'о',
//   p: 'п',
//   q: 'қ',
//   r: 'р',
//   s: 'с',
//   t: 'т',
//   u: 'у',
//   v: 'в',
//   x: 'х',
//   y: 'й',
//   z: 'з',
//   sh: 'ш',
//   ch: 'ч',
//   ng: 'нг',
//   "o'": 'ў',
//   "g'": 'ғ',
//   yu: 'ю',
//   ya: 'я',
//   ' ': ' ',
//   c: 'c',
// }

// const text = 'qalesan ###js'

// let result = ''

// for (let i = 0; i < text.length; i++) {
//   result += alifbo[text[i]]
// }

// console.log(result)

// 'This is a sentence'

// let s = 'is2 sentence4 This1 a3'
// const res = {}

// const arr = s.split(' ')

// for (let i = 0; i < arr.length; i++) {
//   let str = ''
//   let curr = null
//   for (let j = 0; j < arr[i].length; j++) {
//     if (isNaN(arr[i][j])) {
//       str += arr[i][j]
//     } else {
//       curr = arr[i][j]
//     }
//   }
//   res[curr] = str
// }

// const result = Object.values(res).join(' ')

// console.log(result)

// const obj = {
//   4: 'hello',
//   10: 'world',
//   1: 'John',
//   2: "Bo'la",
// }

// console.log(obj)

// function foo(a, b, a) {
//   // a = 40
//   arguments[0] = 50
//   console.log(a + b + a)
//   console.log(arguments[0] + arguments[1] + arguments[2])
// }

// foo(1, 2, 3)

// function newObj(ismi, yoshi) {
//   this.name = ismi
//   this.age = yoshi
//   return 'Hello world'
// }

// const result = new newObj('John Doe', 30)

// console.log(result)

// const text = new String('Hello world')

// const foo = new Function(`console.log(10 + 20)`)

// // const foo = function () {
// //   console.log(10 + 20)
// // }

// console.log(foo)
// foo()

// console.log(typeof {})

// console.log(typeof Function)

// const obj = {}

// console.log(typeof !!!!!!!!!!!!!!!!!obj)
// console.log(!!false)

// Falsy => null, undefined, '', 0, NaN,

// function foo(firstName = 'John', lastName) {
//   console.log(firstName + ' ' + (lastName ?? 'Familyasiz odam 😂'))
// }

// foo('Doe', null)

// function foo(string) {
// try {
//   return string.substr(0, 3)
// } catch (err) {
//   return 'Xatolik'
// }
// return string.substr?.(0, 3) || ''
// }

// console.log(foo(3))

// const obj = {
//   name: 'John',
//   address: {
//     city: 'Samarkand',
//     street: 'Sayyor Sa`dinov',
//   },
// }

// console.log(obj.address?.city)

// const arr = [1, 2, 3]

// const newArr = arr.map?.((item) => item + 2)
// console.log(newArr)

// function first() {
//   let r = 0
//   return function () {
//     return r++
//   }
// }

// const ketmon = first()

// console.log(ketmon())
// console.log(ketmon())
// console.log(ketmon())
// console.log(ketmon())

// function foo() {
//   let r = 1
//   return r + 1
// }

// console.log(foo())

// function foo() {
//   return foo()
// }

// foo()
// console.log('Hello dunyo')
// function foo() {
//   console.log('Hello world')
// }

// foo()
