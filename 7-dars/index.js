// ============== Element qo'shish ( array boshidan qo'shadi )
// let arr = []

// function foo(arr1, n) {
//   for (let i = arr1.length - 1; i >= 0; i--) {
//     arr1[i + 1] = arr1[i]
//   }
//   arr1[0] = n
//   return arr1
// }

// function foo(arr, value) {
//   arr[arr.length] = value
// }

// foo(arr, 4)
// foo(arr, 5)
// foo(arr, 7)
// console.log(foo(arr, 4465465))

//
// let arr = [1, 2, 3, 4, 5, 5]

// function findElement(arr, value) {
//   let result = -1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       result = i
//       break
//     }
//   }
//   return result
// }
// console.log(findElement(arr, 5))

// const arr = [1, 2, 3, 4, 3]
// Oxiridan element qo'shish
// arr.push(5, 5, 5, 5)

// Boshidan element qo'shish
// arr.unshift(5)

// Oxiridagi elementni o'chirib tashash
// arr.pop()

// Boshidagi elementni o'chirib tashash
// arr.shift()

// console.log(arr)

// Berilgan arrayni teskari qilish
// arr.reverse()
// console.log(arr)

// console.log(arr.indexOf(3, 3))

// const arr = [1, 2, 3, 4, 3]

// arr.splice(0, 2, 'test')

// console.log(arr)

// const numbers = [3, 13212, 3, 45, 55]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3) {
//     numbers.splice(i, 1)
//     i--
//   }
// }

// console.log(numbers)

// numbers[i] === item
// for (let kelayotganNumber of numbers) {
//   console.log(kelayotganNumber)
// }

// console.log(numbers)

//  2 indexdan boshlab 4 indexgacha bo'lgan elementlarni qirqib oladi va yangi array ko'rinishida qaytarib beradi (eski arrayni o'zgartirmaydi)
// const res = numbers.slice(2, 4)

// console.log(res)
// console.log(newArr)

// const arr = new Array(5)

// arr[9] = 'Hello world'

// console.log(arr)

// const arr = [1, 2]

// const arr1 = [3, 4]

// const newArr = arr1.concat(arr)

// console.log(newArr)

// function foo(a, ...numbers) {
//   console.log(a)
//   console.log(numbers)
// }

// foo(10, 20, 30, 40, 50, 60)

// const arr = [1, 2, 3, 4]
// const arr1 = [1, 2, 3, 4]

// if (!!!!true) {
//   console.log('hello world')
// } else {
//   console.log('salom dunyo')
// }

// if (arr == arr1) {
//   console.log('=====')
// } else {
//   console.log('---------')
// }

// if ([] == 0) {
//   console.log('Hello world')
// } else {
//   console.log('hehhehhe')
// }

// if ('' == '0') {
//   console.log('Hehhee')
// } else {
//   console.log('hehhehhe')
// }

// if ([]) {
//   console.log('Hello world')
// }

// console.log(NaN === NaN)
// console.log(NaN === NaN)

// console.log('' === '')

// console.log(null === undefined)

// Nimaga bu holatda false chiqganini izohlab kelish shart
// console.log(null == 0)

// Nimaga bu holatda false chiqganini izohlab kelish shart
// console.log(undefined == 0)

// Nimaga bu holatda false chiqganini izohlab kelish shart
// console.log(undefined == '')

// const arr = [1, 2, 3, 45, NaN, null, [1, 2]]

// console.log(arr.indexOf([1, 2]))
// console.log(arr)

// 8 => null, undefined, number, boolean, string, object, symbol, bigInt,

// primitive, non-primitive (reference)

// Primitive => null, undefined, number, boolean, string, symbol, bigInt

// reference => object

// single thread, multi thread

const arr = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8, 4]

// console.log(arr1)
