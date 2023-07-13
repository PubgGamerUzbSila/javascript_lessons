// const school = {
//   books: ['Alisher Navoiy buyuk bobom', 'buyuk bobom'],
//   schoolNumber: 21,
//   schoolName: 'Burxon Tursunov nomidagi maktab',
//   bookAuthors: ['Oybek', 'Kamronbek'],
//   createdAt: ['2021', '2034'],
// }

// const [ketmon, ketmon1, ketmon2] = [
//   ...school.books,
//   school.schoolNumber,
//   ...school.bookAuthors,
//   ...school.schoolName,
// ]

// console.log(ketmon, ' -- ', ketmon1, '-----', ketmon2)

// const texts = ['Hello', 'Salom', 'non', 'ab', 'cba', 'ba', 'ca', 'ac']
// let count = 0
// const toReverse = (s) => {
//   let reversedString = ''
//   for (let j = s.length - 1; j >= 0; j--) {
//     reversedString += s[j]
//   }
//   return reversedString
// }

// for (let i = 0; i < texts.length; i++) {
//   for (let j = 0; j < texts.length; j++) {
//     if (toReverse(texts[i]) === texts[j] && i !== j) {
//       count++
//       texts.splice(j, 1)
//     }
//   }
// }

// console.log(count)

// var fName = "O'ktam"
// console.log(fName)
// foo()
// boo()
// setFName()
// function foo() {
//   var fName = 'John'
//   console.log(fName)
// }

// function boo() {
//   var fName = 'Doe'
//   console.log(fName)
// }

// function setFName() {
//   var fName = window.fName
//   this.fName = 'Oypopuk'
//   fName = window.fName
//   console.log(fName)
// }

// for (let i = 0; i < 10000000; i++) {}

// function foo() {
//   foo()
// }

// foo()

// const stack = ['Global']

// for (let i = 0; i < 100000; i++) {
//   stack.push('Foo')
//   if (stack.length === 500) {
//     throw Error("Stack lengti katta bo'lib ketdi")
//     break
//   }
// }

// try {
//   throw Error('Qalaysan')
// } catch (error) {
//   console.error(error)
// }

// console.log('Saloms')

// loose, weakly

// console.log('Assalom alaykum')

// console.log(n)
// console.log('Assalom alaykum 2')

//

const arr = [
  [0, 3, 'div'],
  [4, 6, 'span'],
  [7, 9, 'i'],
]
const text = 'Hello world test'

/* result <>

  <div>Hel</div>
  <span>lo </span>
  <i>worl</i>
  test
  
  </>

*/
