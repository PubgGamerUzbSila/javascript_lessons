// function foo() {
//   var a = 10
//   function boo() {
//     var b = 30
//     function goo() {
//       return a + b
//     }
//     return goo
//   }
//   return boo
// }

// const newFoo = foo()()

// console.log(newFoo())

// // Closure, zamekaniya, tutashuv

// function foo() {
//   var a = 10
//   function boo() {
//     console.log(a)
//   }
//   a = 40
//   return boo
// }

// console.log(foo()())

// const result = []
// function foo(a) {
//   return function (b) {
//     result.push(a, b)
//   }
// }

// foo(1)(3)
// console.log(result)

// const result = []

// function foo(a) {
//   result.push(a)
//   return foo
// }

// foo(1)(2)(3)(6)

// console.log(result)

// const foo = (a) => (b) => b ? foo(a + b) : a

// console.log(foo(1)(5)(6)(1)())

// ============================================================

// for (var i = 0; i < 10; i++) {
//   function foo(x) {
//     setTimeout(() => {
//       console.log(x)
//     }, 1000 * x)
//   }
//   foo(i)
// }

// ==============================================

// class Student {
//   name = ''
//   #ball = []
//   course = 1
//   constructor(name, ball) {
//     this.name = name
//     this.#ball = ball
//   }
//   get studentBalls() {
//     return this.#ball
//   }
//   addStudentBall(ball) {
//     if (this.#ball.length >= 10) {
//       throw Error("Xotira to'lgan")
//     }
//     this.#ball.push(ball)
//   }
// }

// const MuhammadAliy = new Student('MuhammadAliy', [])

// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)
// MuhammadAliy.addStudentBall(3)

// console.log(MuhammadAliy.studentBalls)

// console.log(new Date().getTime())
const filterBtn = document.getElementById('filterBtn')

// function changeFilter() {
//   user1.changeFilterByName = !user1.sortByName
//   filterBtn.textContent = 'Filter ' + (user1.sortByName ? 'A-Z' : 'Z-A')

//   console.log(user1.getAllContacts)
// }

class Student {
  #contact = [{ name: 'john', phoneNumber: '3123123', id: 1689600080137 }]
  name = ''
  #phoneNumber = ''
  sortByName = false

  constructor(name, phoneNumber) {
    this.name = name
    this.#phoneNumber = phoneNumber
  }

  set addContact(newContact) {
    if (this.#contact.length < 10) {
      newContact.id = Math.random() * 100000
      this.#contact.push(newContact)
    } else {
      throw Error('Contactlar soni oshib ketdi')
    }
  }

  get getAllContacts() {
    return this.#contact.sort((a, b) => {
      if (this.sortByName) {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })
  }

  set deleteContact(id) {
    this.#contact = this.#contact.filter((item) => item.id !== id)
    console.log(this.#contact)
  }

  set changeFilterByName(newValue) {
    this.sortByName = newValue
  }
  get sortByName() {
    return this.sortByName
  }

  set edit({ id, phoneNumber, name }) {
    const newContacts = this.#contact.filter((item) => item.id !== id)
    const editedContact = this.#contact.find((contact) => contact.id === id)
    editedContact.phoneNumber = phoneNumber
    editedContact.name = name
    this.#contact = [...newContacts, editedContact]
  }
}

const user1 = new Student('MuhammadAliy', '999999')

// user1.addContact = {
//   name: 'john1',
//   phoneNumber: '3123123',
// }

// user1.addContact = {
//   name: 'john2',
//   phoneNumber: '31223123',
// }

// user1.edit = {
//   id: 1689600080137,
//   phoneNumber: '111',
//   name: 'Doe',
// }

// class Utils {
//   siteName = 'Nimadir'
//   static changeFilter() {
//     user1.changeFilterByName = !user1.sortByName
//     filterBtn.textContent = 'Filter ' + (user1.sortByName ? 'A-Z' : 'Z-A')
//     console.log(user1.getAllContacts)
//   }
// }

// const utils = new Utils()
