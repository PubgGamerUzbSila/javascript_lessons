// const obj = {
//   name: 'John',
//   age: 40,
// }

// Object.freeze(obj)

// obj.age = 50
// delete obj.name

// console.log(obj)

// {
//   key: value
// }

// const obj = Object.create(
//   {},
//   {
//     name: {
//       value: 'John',
//       enumerable: true,
//       writable: true,
//       configurable: false,
//     },
//     age: {
//       value: 40,
//       enumerable: true,
//       // writable: false,
//       // configurable: false,
//     },
//     tasks: {
//       value: [{ date: 12 }],
//       enumerable: true,
//     },
//   }
// )
// console.log(obj)
// const keys = Object.keys(obj)

// // console.log(keys)
// console.log(obj)

// delete obj.name
// console.log(obj)

// let name = 'John Doe'

// const person = {
//   name: 'Anvarbek',
//   age: 20,
//   lastActivity: {
//     date: 12,
//     task: 'Uyga vazifa masalalari',
//   },
// }

// const {
//   name: yangiNom,
//   age,
//   lastActivity: { date, task },
// } = person

// const { date, task } = lastActivity
// console.log(name, age, yangiNom)
// const { date, task } = lastActivity

// console.log(`yangiNom: ${yangiNom}
//             age: ${age}
//             date: ${date}
//             task: ${task}
// `)

// const person = [
//   {
//     name: 'Anvarbek',
//     age: 30,
//     lastActivity: {
//       date: 12,
//       task: 'Uyga vazifa masalalari',
//     },
//   },
// ]

// const json = JSON.stringify(person)

// const obj = JSON.parse(json)

// console.log(json)
// console.log(obj)

// DATE

// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())

// console.log(
//   `${date.getDate()}-${
//     date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
//   }-${date.getFullYear()}`
// )

// console.log(date.getUTCHours())
// console.log(date.getHours())

// console.log(`So'ngi faollik:  ${date.getHours()}:${date.getMinutes()}`)
// const date = new Date()
// const haptaKunlari = [
//   'Dushanba',
//   'Seshanba',
//   'Chorshanba',
//   'Payshanba',
//   'Juma',
//   'Shanba',
//   'Yakshanba',
// ]

// console.log(haptaKunlari[date.getDay() - 1])

// function getToday(param = '/') {
//   const date = new Date()
//   return `${date.getDay()}${param}${
//     date.getMonth() + 1
//   }${param}${date.getFullYear()}`
// }

// console.log(getToday(' '))

// const a = {
//   name: 'John',
// }

// const b = { ...a }
// const b = JSON.parse(JSON.stringify(a))

// a.name = 'Doe'

// console.log(b)
