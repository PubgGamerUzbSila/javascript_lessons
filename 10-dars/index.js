// const span = {
//   border: '1px solid red',
//   foo: function (name) {
//     console.log('Hello ' + name)
//   },
// }

// const { foo } = span

// foo('John')

// console.log(console)

// const { border, foo } = span
// foo()

// console.log(border)

// const { log } = console

// log('Hello world')

// log('Hello world')
// log('Hello world')
// log('Hello world')
// log('Hello world')
// log('Hello world')
// log('Hello world')

// const person = {
//   name: 'John',
//   age: 30,
//   isMarried: true,
// }

// [(['name', 'John'], ['age', 30], ['isMarried', true])]

// const val = Object.entries(person)

// console.log(val)

// const res = [10, 1, 3, 4]

// for (let ketmon in person) {
//   // console.log(person[ketmon])
//   res.push([ketmon, person[ketmon]])
// }

// console.log(res)
// for (const item in res) {
//   console.log(item)
// }

// console.log(res)
// const value = 'isMarried'
// console.log(person[value])

// Object.entries()

// s = (5 / 9) *( f - 32)
// f = (9 / 5) * s + 32

// Uyga vazifa 1
// function convert(degree) {
//   // s = (5 / 9) * (degree - 32)
//   const f = (9 / 5) * degree + 32
//   return f
// }
// console.log(convert(32))

// Uyga vazifa 2

// function includes(array, searchElement) {
//   let count = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === searchElement) {
//       count++
//     }
//   }
//   return Boolean(count)
// }

// console.log(includes([1, 2, 3, 4, 56, 50], 40))

// Uyga vazifa 3

// function foo(ketmon) {
// let result = ketmon[0] === ketmon[ketmon.length - 1]
// if (ketmon[0] === ketmon[ketmon.length - 1]) {
//   result = true
// }
// return ketmon[0] === ketmon[ketmon.length - 1]
// }

// Arrow function bilan easy peasy
// const foo = (ketmon) => ketmon[0] === ketmon[ketmon.length - 1]

// const arr = [60, 2, 3, 4, 56, 70]

// console.log(foo(arr))

// Uyga vazifa 4

// function foo(arr) {
// let result = false
// if (arr[0] === 6 || arr[arr.length - 1] === 6) {
//   result = true
// }
// return result

// return arr[0] === 6 || arr[arr.length - 1] === 6
// }

// console.log(foo(arr))

// Uyga vazifa 5

// const arr = [80, 80, 50]

// function foo(massiv) {
//   let count = 0
//   for (let i = 0; i < massiv.length; i++) {
//     count += massiv[i]
//   }
//   const middle = count / massiv.length
//   let result = ''

//   if (middle > 1 && middle < 60) result = 'f'
//   else if (middle <= 70) result = 'd'
//   else if (middle < 80) result = 's'
//   else if (middle < 90) result = 'b'
//   else result = 'a'

//   return result
// }

// console.log(foo(arr))

// const kitob1 = {
//   title: "O'tkan kunlar",
//   author: 'Abdulla Qodiriy',
//   readingStatus: true,
// }

// const kitob2 = {
//   title: 'Dunyoning ishlari',
//   author: "O'tkir Hoshimov",
//   readingStatus: true,
// }

// const kitob3 = {
//   title: 'The Richest man in Babylon',
//   author: 'George Samilon',
//   readingStatus: false,
// }
// const kitoblar = [kitob1, kitob2, kitob3]

// const kitoblar = [
//   {
//     title: "O'tkan kunlar",
//     author: 'Abdulla Qodiriy',
//     readingStatus: true,
//   },
//   {
//     title: 'Dunyoning ishlari',
//     author: "O'tkir Hoshimov",
//     readingStatus: true,
//   },
//   {
//     title: 'The Richest man in Babylon',
//     author: 'George Samilon',
//     readingStatus: false,
//   },
// ]

// for (const book of kitoblar) {
//   console.log(`
//   Kitob nomi: ${book.title}
//   Kitob muallifi: ${book.author}
//   O'qilganmi: ${book.readingStatus ? 'Ha' : "Yo'q"}
// `)

// Object
// let property = 'color'
// color = 'red'
// const span = {
//   color,
//   [property]: 'green', // => color: "green"
// }

// console.log(span)

// color: 'red'
// color: 'green'
// var firstName = 'Oybek'
// var lastName = "O'rolov"

// const person = {
//   firstName: 'Oybek',
//   lastName: "O'rolov",
//   showInfo: function () {
//     console.log(
//       `Userning ismi: ${this.firstName}, Userning Familyasi: ${this.lastName}`
//     )
//   },
// }

// const person1 = {
//   firstName: 'Sanjar',
//   lastName: "Ne'matov",
//   showInfo: function () {
//     console.log(
//       `Userning ismi: ${this.firstName}, Userning Familyasi: ${this.lastName}`
//     )
//   },
// }

// const person2 = {
//   firstName: 'O`ktamjon',
//   lastName: 'Qulsoatov',
//   showInfo: function () {
//     console.log(
//       `Userning ismi: ${this.firstName}, Userning Familyasi: ${this.lastName}`
//     )
//   },
// }

// person.showInfo()

// Birinchi

// function objectCreate(firstName, lastName) {
//   const obj = {}
//   obj.firstName = firstName
//   obj.lastName = lastName
//   obj.showInfo = function () {
//     console.log(
//       `Userning ismi: ${obj.firstName}, Userning Familyasi: ${obj.lastName}`
//     )
//   }
//   return obj
// }

// const person1 = objectCreate('Oybek', "O'rolov")
// const person2 = objectCreate('Sherbek', 'Mavlonov')

// person2.showInfo()

// Ikkinchi

// function foo(ismi, familiyasi) {
//   this.firstName = ismi
//   this.lastName = familiyasi
//   this.showInfo = function () {
//     console.log(
//       `Userning ismi: ${this.firstName}, Userning Familyasi: ${this.lastName}`
//     )
//   }
// }

// const person = new foo('Sherbek', 'Mavlonov')
// const person1 = new foo('Ravshan', 'Xudayqulov')

// person.showInfo()
// person1.showInfo()

// Uchinchi

// const obj = new Object()

// obj.firstName = 'Sherbek'
// obj.lastName = 'Mavlonov'

// console.log(obj)

// const obj = {
//   nimadir: 'nimadir',
//   showInfo: function () {
//     return this
//   },
// }

// console.log(obj === obj.showInfo())

const contacts = [
  {
    name: 'Ravshan kursdosh',
    phoneNumber: '910718903',
    avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
    lastActive: '10:23',
    userName: '@kotta_bola',
    bio: "San o'qigan kitobni man yozganman sakrama, auf",
    isHidePhoneNumber: false,
    isBlocked: false,
  },
  {
    name: 'Abduhakim bratishka',
    phoneNumber: '997570788',
    avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
    lastActive: 'Yaqinda online edi',
    userName: '@vorzakon',
    bio: '2008 larni sindirish bandasiga emas',
    isHidePhoneNumber: true,
    isBlocked: true,
  },
  {
    name: 'O`ktam googler',
    phoneNumber: '930425848',
    avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
    lastActive: '10:56',
    userName: '@oktan_vines',
    bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
    isHidePhoneNumber: false,
    isBlocked: true,
  },
]

for (const user of contacts) {
  if (user.isBlocked !== true) {
    console.log(`
  ${user.name}
  ${user.bio}
  ${user.isHidePhoneNumber ? 'Hidden' : user.phoneNumber}
  ${user.lastActive}
  `)
  } else {
    console.log(`Uzoq vaqt kirmagan`)
  }
}
