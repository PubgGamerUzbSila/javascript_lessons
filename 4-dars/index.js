// 'use strict'

// &&, ||

// console.log(false && 'Salom')

// console.log('Salom' || 'Xayr')

// 5
// NaN, undefined, null, "" => Bo'sh string (empty string), 0

// Mantiqiy yoki (||) => birinchi true qiymatni topguncha ishlaydi.

// Mantiqiy va (&&) => birinchi false qiymatni topguncha ishlaydi

// const n = 19

/* 
  N soni berilgan agar n 0 ga teng bo'lmasa b ning qiymati n ga 
  teng bo'lsin aks holatda 20 ga teng bo'lsin
*/

// const b = n == 0 ? 20 : n

// const b = n || 20

// console.log(b)
// console.log(n == 0 ? 20 : n)

// var, let

// num = 20

// console.log(num)

// Number(a)
// parseInt(a)
// parseFloat(a)
// a = a * 1

// let a = '10'

// Number tipiga o'tkazib beradi.
// const newA = +a
// const newA = ~a

// console.log(typeof newA)

// const str = 'Salom'
// const str1 = 'Dunyo'

// console.log(str + ' ' + str1)

// console.log(null == undefined)

// console.log(typeof null)

// console.log(NaN == NaN)

// undefined || not defined

// const n = 10

// const b = '321321312'

// const result = n * b

// console.log(result == result ? result : "Ko'paytira olmayman")

// console.log(isNaN(result) ? "Ko'paytira olmayman" : result)
// console.log(isNaN(result))
/*
 n * b => NaN boladigan bosa bularni 
 kopaytira olmayman degan message chiqazsin, 
 aks holatda ko'paytmani chiqazsin
 */

//  ================= Math ========================

// const b = -15

// const d = Math.abs('-1aa4')

// console.log(d)

// const n = 16

// console.log(Math.sqrt(n))

// const a = Math.pow(5, 5)

// console.log(a)

// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Number.MIN_SAFE_INTEGER)

// const a = '12.4'

// console.log(Math.floor(a))

// console.log(Math.ceil(a))

// console.log(Math.trunc(a))

// console.log(Math.round(a))

// const PI = 3.14
// console.log(Math.PI)

// console.log(Math.floor(Math.random() * 100))

// ============== switch case ==============

// const n = 18

// switch (n) {
//   case 18:
//     console.log('18 ga kirdingiz passport olishingiz mumkin')
//     break
//   case 16:
//     console.log('18 yoshdan beriladi passport')
//     break
//   default:
//     console.log('Yoshing yetmaydi')
//     break
// }

// 1 fasllar
// 2 oylar
// 3 ielts
// 1 dan 100 gacha bo'lgan sonlarni harf ko'rinishida chiqazib berish

// const fasl = 5

// switch (fasl) {
//   case 1:
//     console.log('Qish')
//     break
//   case 2:
//     console.log('Bahor')
//     break
//   case 3:
//     console.log('Yoz')
//     break
//   case 4:
//     console.log('Kuz')
//     break
//   default:
//     console.log('Bunday fasl mavjud emas')
//     break
// }

// ============== O'tilmagan mavzuda yechilgan usuli
// const n = 2

// const a = n % 10
// const b = Math.floor(n / 10)

// const birliklar = ['', 'Bir ', 'Ikki ', 'Uch']
// const onliklar = ['', 'O`n ', 'Yigirma ', 'O`ttiz']

// console.log(onliklar[b], birliklar[a])

// ==============

// let result = ''
// switch (b) {
//   case 1:
//     result += 'O`n '
//     break
//   case 2:
//     result += 'Yigirma '
//     break
//   case 3:
//     result += 'O`ttiz '
//     break
//   case 4:
//     result += 'Qirq '
//     break
//   case 5:
//     result += 'ellik '
//     break

//   case 6:
//     result += 'Oltmish '
//     break
//   case 7:
//     result += 'Yetmish '
//     break
//   case 8:
//     result += 'Sakson '
//     break
//   case 9:
//     result += 'To`qson '
//     break
// }

// switch (a) {
//   case 1:
//     result += 'Bir'
//     break
//   case 2:
//     result += 'Ikki'
//     break
//   case 3:
//     result += 'Uch'
//     break
//   case 4:
//     result += 'To`rt'
//     break
//   case 5:
//     result += 'Besh'
//     break

//   case 6:
//     result += 'Olti'
//     break
//   case 7:
//     result += 'Yetti'
//     break
//   case 8:
//     result += 'Sakkiz'
//     break
//   case 9:
//     result += 'To`qqiz'
//     break
// }

// console.log(result)

// Function declaration, function expression, arrow function

// ============  Function declaration

// console.log(sayHello(20, 30))

// function sayHello(a, b) {
//   return a + b
// }

// ============  function expression
// Tepada chaqirsak error beradi bunaqa chaqirmang e'lon qilingandan keyin chaqiring

// let sayHello = function (a) {
//   return a + 10
// }
// console.log(sayHello(20))

// sayHello()

// ============  Arrow function

// let sayHello = a => a + 10

// console.log(sayHello(20))
// immediately invoked function
// ;(function () {
//   console.log('hello world')
// })()

// !IMORTANT
// function printA() {
//   console.log('hello world')
// }

// console.log(printA())
