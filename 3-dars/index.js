// Math library

// ======= type conversion =======
// const c = 10

// const a = '10'
// const b = parseFloat(a)
// const b = parseInt(a)
// const d = c.toString()
// const d = String(c)
// console.log(typeof d)

// ======= type coercion =======

// console.log(c / a)

// ======= truthy and falsy =======

// Falsy => 0, NaN, null, undefined, ""

// console.log(0 == false)

// ================= if else ===============

// const light = 'yashil'

// if (light == 'qizil') {
//   console.log('tez yugur')
// } else {
//   console.log("Indamasdan tur, erta kundan o'lib ketasan")
// }

// const a = undefined
// const n = a
// console.log(typeof n)
// if (n) {
//   console.log('qaleee')
// } else {
//   console.log('hayrrrr')
// }

/* 
  Agar berilgan son 3 ga bo'linsa Fizz,
  5 ga bo'linsa Buzz,
  3 ga ham 5 ga ham bo'linsa FizzBuzz chiqsin,
  birortasiga bo'linmasa hech narsa chiqmaydi.
*/

// if (n % 15 == 0) {
//   console.log('FizzBuzz')
// } else if (n % 3 == 0) {
//   console.log('Fizz')
// } else if (n % 5 == 0) {
//   console.log('Buzz')
// }

// FizzBuzz without if else
// const n = 10
// const onBeshgaBolinadimi = n % 15 == 0
// const beshgaBolinadimi = n % 5 == 0
// const uchgaBolinish = n % 3 == 0
// console.log(
//   (onBeshgaBolinadimi && 'FizzBuzz') ||
//     (beshgaBolinadimi && 'Fizz') ||
//     (uchgaBolinish && 'Bazz') ||
//     ' '
// )

// ========= Ternary ========

// const n = 11

// if (n % 2 === 0) {
//   console.log(`${n} soni juft son`)
// } else {
//   console.log(`${n} soni juft son emas`)
// }

// console.log(n % 2 === 0 ? `${n} soni juft son` : `${n} soni juft son emas`)

/*
  2 ta maymun bor. Agar ikkalasi ham bir vaqtda bir xil ko'rinishda bo'lsa hammasi 
  chotke deb ekranga chiqazing
  aks holatda bizda muammo bor deb chiqazing.
*/

const firstMonkey = true
const secondMonkey = true

// Berilgan ? agar berilgan shart rost bo'lsa bajarilishi kerak bo'lgan qism : aks holatda bajarilishi kerak bo'lgan qism
// shart ? if tanasi : else tanasi

// 2. A * x^2 + B * x +  C = 0
// shu tenglamada A,B,C kayfsentlar berilganda x ni qiymatlarini toping ?
let x1,x2,a=1, b=2, c = 1

const D = b ** 2 - 4 * a * c;
x1 = (-b + (D) ** 0.5) / (2 * a);
x2 = (-b - (D) ** 0.5) / (2 * a);

( D > 0 ) ? console.log(x1 + " " + x2): "";
( D == 0 ) ? console.log(x1): "";
( D < 0 ) ? console.log(" yechim yuq  (kompleks yechim)"): "";
