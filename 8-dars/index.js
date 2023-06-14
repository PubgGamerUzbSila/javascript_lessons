// const dinamikQiymat = 'Shaptoli'

// const person = {
//   name: 'John',
//   age: 30,
//   location: 'Termiz',
//   isMarried: true,
//   hobbies: ['Futbol', 'Shaxmat', 'Pubg'],
//   avatar: null,
//   let: false,
//   '1for': 122,
//   dinamikQiymat,
// }
// console.log(person)

// console.log(`${10 + 20}`)
// console.log(person.hobbies, person.isMarried)

// console.log(person['hobbies'], person['isMarried'])

// console.log(person['1for'])

// console.log(null == 0)
// console.log(null > 0)
// console.log(null >= 0)

// const obj = {
//   43: 45,
//   23: 67,
//   90: 35,
//   11: 20,
// }

// console.log(obj)

// const person = {
//   firstName: 'Kamronjon',
//   lastName: 'Sattorov',
//   age: 12,
//   isMarried: false,
//   hobbies: ['Pubg', "gpt bilan jura bo'lish", 'odamlarni aldash'],
// }

// const { firstName, lastName, age, isMarried, hobbies } = person
// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const isMarried = person.isMarried
// const hobbies = person.hobbies

// console.log(firstName, lastName, age, isMarried, hobbies)
// console.log(
//   person.age,
//   person.firstName,
//   person.lastName,
//   person.isMarried,
//   person.hobbies
// )

// const obj = {
//   name: 'Abduhakim',
//   name: 'Samandar',
//   name: 'Kamronjon',
// }

// const names = [
//   'Abdullajon',
//   'Kamronjon',
//   'Nurbekjon',
//   'Asqarjon',
//   'Asqarjon',
//   'Kamronjon',
// ]

// for (let i = 0; i < names.length; i++) {
//   obj[names[i]] = names[i]
// }

// console.log(obj)

// const mevalar = {
//   olma: 'Apple',
//   banan: 'Banana',
//   apelsin: 'orange',
// }

// console.log(mevalar.apelsin, mevalar.banan, mevalar.olma)

// const maxsulotlar = {
//   poliz: ['Handalak', 'Qovun', 'Tarvuz'],
//   mevalar: ['Olma', 'Anor', 'Nok'],
// }

// const { poliz, mevalar } = maxsulotlar

// const { poliz, mevalar } = maxsulotlar

// console.log(mevalar)
// console.log(poliz)

// console.log(`
// Poliz maxsulotlari: ${poliz},
// \n
// Mevalar: ${mevalar}`)

// const users = [
//   {
//     name: 'Nimadir',
//     userName: 'yanaNimadir',
//     phoneNumber: '00000',
//   },
//   {
//     name: 'John',
//     userName: 'terminator',
//     phoneNumber: '999',
//   },
//   {
//     name: 'Hasanboy',
//     userName: 'terminator981',
//     phoneNumber: '98888',
//   },
// ]

// console.log(
//   `Ismi: ${users[1].name}, Raqami: ${users[1].phoneNumber}, userName: ${users[1].userName}`
// )

// for (let i = 0; i < users.length; i++) {
//   const { name, userName, phoneNumber } = users[i]
//   console.log(`Ismi: ${name}, Raqami: ${phoneNumber}, userName: ${userName}`)
// }

// console.table(users)
// console.warn('Nimadir')

// const person = {
//   name: 'John',
//   age: 40,
//   isMarried: false,
//   location: 'Termiz',
//   name: 'Doe',
// }

// console.log(person.shumbola)

// const person = {
//   name: 'Sherbek',
//   age: 50,
// }

// const keys = Object.keys(person)
// const values = Object.values(person)
// console.log(keys)
// console.log(values)
// console.log(person)
// const obj = {}
// const names = ['Abdullajon', 'Kamronjon', 'Asqarjon', 'Abdullajon', 'Kamronjon']

// for (let i = 0; i < names.length; i++) {
//   obj[names[i]] = names[i]
// }

// console.log(Object.keys(obj))
// console.log(obj)

// const obj = { name: 'John', age: 20 }

// 1
// console.log(obj.age)
// const key = 'isMarried'
// console.log(obj.key)
// 2
// console.log(obj[key])

// obj.isMarried

// obj[key] = false

// console.log(obj)

// const numbers = [8888, 2, 3, 4, 5, 6, 8, 8, 4, 5, 8]
// const obj = {}

// for (let i = 0; i < numbers.length; i++) {
//   const n = numbers[i]
//   if (obj[n]) {
//     obj[numbers[i]] = obj[numbers[i]] + 1
//   } else {
//     obj[numbers[i]] = 1
//   }
//   console.log(obj)
// }

// console.log(obj)

// console.log(obj['2'])
// if (obj['2'] == undefined) {
//   obj['2'] = 'Endi buni ichida 2 keyli qiymat bor'
// }

// console.log(obj)

// const news = [
//   {
//     id: 1,
//     title: 'Yangi xaftada uzbda 70c issiq kutilyabdi',
//     date: '14/06/2023',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//   },
//   {
//     id: 2,
//     title:
//       'kun.uz’s DNS address could not be found. Diagnosing the problem.DNS_PROBE_POSSIBLE',
//     date: '12/06/2023',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//   },
//   {
//     id: 3,
//     title: 'This site can’t be reached',
//     date: '14/06/2023',
//     description:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//   },
//   {
//     id: 4,
//     title: 'About Me',
//     date: '17/06/2023',
//     description:
//       'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandi felis ligula aliquam',
//   },
// ]

// const filteredNews = {
//   '14/07/2023': [
//     {
//       id: 3,
//       title: 'This site can’t be reached',
//       date: '14/06/2023',
//       description:
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//     },
//     {
//       id: 1,
//       title: 'Yangi xaftada uzbda 70c issiq kutilyabdi',
//       date: '14/06/2023',
//       description:
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//     },
//   ],
//   '17/07/2023': [
//     {
//       id: 4,
//       title: 'About Me',
//       date: '17/06/2023',
//       description:
//         'Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandi felis ligula aliquam',
//     },
//   ],
//   '12/07/2023': [
//     {
//       id: 2,
//       title:
//         'kun.uz’s DNS address could not be found. Diagnosing the problem.DNS_PROBE_POSSIBLE',
//       date: '12/06/2023',
//       description:
//         'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptatum?',
//     },
//   ],
// }

// const filteredNews = {}

// for (let i = 0; i < news.length; i++) {
//   if (filteredNews[news[i].date] != undefined) {
//     filteredNews[news[i].date].push(news[i])
//   } else {
//     filteredNews[news[i].date] = []
//     filteredNews[news[i].date].push(news[i])
//   }
// }

// console.table(filteredNews)
