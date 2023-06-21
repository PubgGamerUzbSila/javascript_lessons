// function sayHello(param) {
//   console.log('Hello world' + param)
// }
// function sayBye() {
//   console.log('Bye world')
// }

// function foo(ketmon, salomBersinmi) {
//   if (salomBersinmi) {
//     ketmon(' Dunyo')
//   }
// }

// foo(sayHello, true)

// const arr = [
//   'Hello world',
//   'Salom dunyo',
//   'assalom alaykum',
//   'Blue',
//   'abb',
//   'A',
// ]

// const newArr = [...arr].sort((a, b) => a.localeCompare(b))

// function saralash(a, b) {
//   return a - b
// }

// console.log('Original: ', arr)
// console.log('Sorted: ', newArr)

// FILTER
// const arr = ['Sherbek', 'Asilbek', 'Kamron', 'Abduxakim', 'bekzod']

// const filteredArr = arr.filter(function (value, index, arr) {
//   return value.includes('bek')
// })

// console.log(filteredArr)
// const contacts = [
//   {
//     name: 'Ravshan kursdosh',
//     phoneNumber: '910718903',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: '10:23',
//     userName: '@ kotta_bola',
//     bio: "San o'qigan kitobni man yozganman sakrama, auf",
//     isHidePhoneNumber: false,
//     isBlocked: false,
//   },
//   {
//     name: 'Abduhakim bratishka',
//     phoneNumber: '997570788',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: '09:44',
//     userName: '@ vorzakon',
//     bio: '2008 larni sindirish bandasiga emas',
//     isHidePhoneNumber: true,
//     isBlocked: true,
//   },
//   {
//     name: 'O`ktam googler',
//     phoneNumber: '930425848',
//     avatar: ['https://qanadir image manzili', 'https://ikkinchi usuli'],
//     lastActive: 31232312,
//     userName: '@ oktam_vines',
//     bio: 'Dasturlashni o`rgansang hayotni tushunib yeta olasan',
//     isHidePhoneNumber: false,
//     isBlocked: true,
//   },
// ]

// const noBlockedUser = contacts.filter((contact) => !contact.isBlocked)

// console.log(noBlockedUser)

// const sorted = [...contacts].sort((birinchi, ikkinchi) => {
//   // return birinchi.lastActive.localeCompare(ikkinchi.lastActive)
//   return Number(birinchi.lastActive[0]) - Number(ikkinchi.lastActive[0])
// })

// console.log(sorted)

//   ========

// const students = [
//   {
//     name: 'Ravshan',
//     isTaskFinish: true,
//     price: 20,
//   },
//   {
//     name: 'Asqar',
//     isTaskFinish: true,
//     price: 40,
//   },
// ]

// const bugunDarsOtamizmi = students.every((item) => item.isTaskFinish)
// const bugunDarsOtamizmi2 = students.some((item) => item.isTaskFinish)

// console.log(bugunDarsOtamizmi)

// const newStudentList = students.map((student, indeks, massiv) => {
//   return { ...student, price: student.price + 20 }
// })

// students.forEach((item, index, arr) => {
//   if (item.name.length > 5) {
//     console.log(item)
//   }
// })

// const students = [
//   {
//     name: 'Ravshan',
//     age: 16,
//   },
//   {
//     name: 'Asqar',
//     age: 50,
//   },

//   {
//     name: 'Ravshan',
//     age: 18,
//   },
// ]

// const student = students.find((item) => item.name === 'Ravshan')
// const studentIndex = students.findIndex(ravshan)

// function ravshan(item) {
//   return item.name === 'Ravshan'
// }

// const arr = [1, 2, 3, 4, 5, [1, 2, [45, 45, [9012, 12]]]]

// const newArr = arr.flat(Infinity)
// console.log(newArr)

// const months = ['Mar', 'Jan', 'Feb', 'Dec']
// const sortedMonths = months.toSorted()
// console.log('Orginal: ', months)
// console.log('Sorted: ', sortedMonths)

// const array1 = ['a', 'b', 'c']

// // console.log(typeof array1.join('='))

// const array2 = { ...array1 }

// array2[0] = 'c'

// console.log(array1)

// const array1 = ['a', 'b', 'c', 'd', 'e']
// const newArr = array1.copyWithin(2, 0, 3)
// console.log(newArr)

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']
// const array3 = array1.concat(array2)

// array2[2] = 'g'

// console.log(array2)

// const obj = {
//   ismi: 'John',
//   yoshi: 40,
//   tugilganJoyi: 'Termiz',
// }

// Object.freeze(obj)
// obj.tugilganJoyi = 'Tashkent'

const students = [
  {
    id: 1,
    firstName: 'Anvar',
    lastName: 'Anvar',
    course: 'Javascript',
    balance: 100,
    tasks: [
      {
        date: '12',
        isFinished: false,
      },
      {
        date: '13',
        isFinished: true,
      },
      {
        date: '14',
        isFinished: true,
      },
    ],
    lessons: [],
    isOurStudent: true,
  },
]

function addStudent() {}
function banStudent() {}
function updateStudentStatus(studentId, newStatus) {}

// 1. 10 kunda 3 tadan kop dars qoldirgan bolsa chopish kerak.

// 2. addStudent(ismi, familyasi,course, balance)

// 3. Admin uchun studentlarni balance tugaganlarini tepada chiqazib quyish

// 4. Ismlari bo'yicha qidirish

// 5. faqatgina chetlatilgan studentlarni chiqazib bersin

// 6. admin bitta functionni chaqirsin shunga userning id sini berib yuborsa va statusini (ya'ni o'qishdan chetlatilgan yoki yo'qligini statusi) students arraydan update qilib quysin

// 7. userlarning ismi, familyasi, balansinigina chiqazib beradigan function tuzing

// 8. userning balancini yangilash imkoniyati bo'lsin
