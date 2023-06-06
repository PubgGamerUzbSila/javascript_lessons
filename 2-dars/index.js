// var, let, const

//  string, boolean, number, undefined

// let a
// let b = null

// console.log(a)

// console.log(undefined === null)

// console.log(null * 10)

// const n = 10

// const c = undefined + n
// const d = undefined + n
// const typeN = typeof n
// console.log(c == d)
// console.log(typeof typeof n)
// console.log(typeof typeof typeof d)
// console.log(typeN)

// const a = undefined
// console.log(a)

// Not a number

// let n = 7
// n++ // => n = n + 1
// console.log(n)

// n-- // n = n - 1

// n += 5 // n = n + 5

// n -= 4 // n = n  - 4

//n *= 2 // n = n * 2
// n /= 3 // n = n / 3

// n %= 2
// n **= 2
// console.log(n)

// 5 => boolean, number, string, null, undefined

// ==

// console.log(null == false)

//  faqat qiymati bo'yicha tekshiradi

// ===

// bu birinchi navbatda type tekshiradi

// console.log(10 === '10')

// !=

// console.log(10 != '10')

// !==

// console.log(10 !== '10')

// >

// console.log(5 > 3)

// <

// console.log(5 < 3)

// <=

// console.log(5 <= 5)

// >=

// console.log(5 >= 5)

// const a = Symbol('text')
// const b = Symbol('text')

// console.log(a, b)

// const previouslyMaxSafeInteger = 9007199254740991n

// console.log(typeof previouslyMaxSafeInteger === 'bigint')

// const text = 'Salom'

// const text2 = 'dunyo'

// const text3 = text + ' ' + text2

// console.log(text3[1] + text[2] + 3423432)

// const n = '12.2'

// console.log(`${n * 1 + 2}`)

const x = 12

// n = x ^ 2 + 12 * x - 23

let n = x * x + 12 * x - 23
// console.log(n);

// 2 maymun bor ikki

let maymun1 = true
let maymun2 = false

// console.log(maymun1  == maymun2);

// 1 1 => 0
// 1 0 => 1
// 0 1 => 0
// 0 0 => 0

const a = false
const b = false
// console.log(a > b);

// 7 xonali nechta 1 borligini aniqlash

let son = 6511617
let bir = parseInt((son / 1000000) % 10) == 1
let ikki = parseInt((son / 100000) % 10) == 1
let uch = parseInt((son / 10000) % 10) == 1
let tort = parseInt((son / 1000) % 10) == 1
let besh = parseInt((son / 100) % 10) == 1
let olti = parseInt((son / 10) % 10) == 1
let yetti = parseInt(son % 10) == 1
console.log(bir + ikki + uch + tort + besh + olti + yetti)

//berilgan 5 xonali sonni ketma ket-kelgan raqamlaridan nichtasi bir biriga teng
//masalan 12233 bunda 2ta

// let sonn=12333
// let bir = parseInt( sonn / 10000 % 10)
// let ikki = parseInt( sonn /1000 % 10)
// let uch = parseInt( sonn / 100 % 10)
// let tort = parseInt( sonn /10 % 10)
// let besh = parseInt(sonn % 10)
// let yechim1=bir==ikki
// let yechim2=ikki==uch
// let yechim3=uch==tort
// let yechim4=tort==besh
// console.log(yechim1+yechim2+yechim3+yechim4)

// 1. 3 ta son berilgan, bu sonlarning pifagor sonlari yoki pifagor sonlari emasligini toping. a ^ 2 + b ^ 2 = c ^ 2

// 2. 6 xonali son berilgan shu soning 1 dan farqli raqamlar yigindisini topish

// 3. berilgan matnda nechta "cat" so'zi qatnashganini topish. matn uzunligi 10 ta belgi bo'ladi.

// 4. 7 xonali son berilgan bu yerda 1 ning o'rniga 3 ni qo'yib. shu sonning raqamlarini o'rta arifmetigini toping
