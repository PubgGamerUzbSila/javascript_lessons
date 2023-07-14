// OOP => Object oriented programming

// class Technical {
//   constructor(title, price, isTypeC, color, memory, ram) {
//     this.title = title
//     this.price = price
//     this.isTypeC = isTypeC
//     this.color = color
//     this.memory = memory
//     this.ram = ram
//   }
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   }
// }

// class Phone {
//   constructor(
//     title,
//     createdAt,
//     price,
//     isTypeC,
//     memory,
//     ram,
//     color,
//     cameraFront,
//     cameraBack,
//     power,
//     sim
//   ) {
//     this.title = title
//     this.createdAt = createdAt
//     this.price = price
//     this.isTypeC = isTypeC
//     this.memory = memory
//     this.ram = ram
//     this.color = color
//     this.cameraBack = cameraBack
//     this.cameraFront = cameraFront
//     this.power = power
//     this.sim = sim
//   }

//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   }
// }

// class Computer {
//   constructor(title, price, isTypeC, color, memory, ram) {
//     this.title = title
//     this.price = price
//     this.isTypeC = isTypeC
//     this.color = color
//     this.memory = memory
//     this.ram = ram
//   }
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   }
// }
// class SmartTv {
//   constructor(title, price, isTypeC, color, memory, ram) {
//     this.title = title
//     this.price = price
//     this.isTypeC = isTypeC
//     this.color = color
//     this.memory = memory
//     this.ram = ram
//   }
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   }
// }

// const redmi = new Phone(
//   'Redmi',
//   '2021',
//   '1200',
//   false,
//   64,
//   8,
//   'red',
//   1,
//   3,
//   5000,
//   2
// )
// const hp = new Computer('Hp', 500, false, 'gray', 500, 8)

// const artel = new SmartTv('Artel', 500, false, 'white', 0, 0)

// artel.showInfo()
// hp.showInfo()

// const samsung = {
//   title: 'Samsung Galaxy s21',
//   createdAt: '2021',
//   price: '1000$',
//   isTypeC: true,
//   memory: 120,
//   ram: 4,
//   color: 'red',
//   cameraFront: 1,
//   cameraBack: 3,
//   power: 5000,
//   sim: 2,
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   },
// }

// const apple = {
//   title: 'iPhone 14 pro',
//   createdAt: '2023',
//   price: '1400$',
//   isTypeC: false,
//   memory: 120,
//   ram: 8,
//   color: 'purple',
//   cameraFront: 1,
//   cameraBack: 3,
//   power: 8000,
//   sim: 1,
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   },
// }

// const redmi = {
//   title: 'Redmi note 11',
//   createdAt: '2023',
//   price: '500$',
//   isTypeC: true,
//   memory: 128,
//   ram: 6,
//   color: 'gray',
//   cameraFront: 1,
//   cameraBack: 4,
//   power: 10000,
//   sim: 3,
//   showInfo() {
//     console.log(`
// Modeli: ${this.title}
// Narxi: ${this.price}
// Quvvatlagich turi: ${this.isTypeC ? 'type c' : 'type c emas'}
// Rangi: ${this.color}
// Xotira: ${this.memory}
// RAM: ${this.ram}
//     `)
//   },
// }

// class Alive {
//   eat() {
//     console.log(this.name + ' Eating')
//   }
// }

// class Person extends Alive {
//   constructor() {
//     super()
//     this.name = 'Vali'
//   }
// }

// class Dog extends Alive {
//   constructor() {
//     super()
//     this.name = 'Bobek '
//   }
// }

// const bobek = new Dog()
// const vali = new Person()

// bobek.eat()

// vali.eat()

// Bino degan class yaratasiz undan maktab, kollej, universitet degan classlar bilan extend olasiz.
//  bino classi ichida bino etajlari soni va hozirgi etaj bo'ladi keyin lift degan method bo'ladi
// chaqirilganda hozirgi etajning qiymatini 1 ga oshirib quyadi

// class Bino {
//   hozirgiEtaj = 1
//   constructor(nomi, etajlarSoni) {
//     this.name = nomi
//     this.etajlarSoni = etajlarSoni
//   }

//   lift() {
//     this.hozirgiEtaj + 1 <= this.etajlarSoni
//       ? this.hozirgiEtaj++
//       : (this.hozirgiEtaj = 1)

//     return 'Hello world'
//   }
// }

// class Maktab extends Bino {
//   constructor(name, etajlarsoni) {
//     super(name, etajlarsoni)
//   }
// }

// const maktab21 = new Maktab('21', 3)

// getter, setter

class Person {
  #fName = ''
  #lName = ''
  constructor(ismi, familyasi) {
    this.#fName = ismi
    this.#lName = familyasi
  }

  set changeName(newName) {
    this.#fName = newName
  }

  get getFullName() {
    return this.#fName + ' ' + this.#lName
  }
  get getName() {
    return this.#fName
  }
}

const person1 = new Person('John', 'Doe')

// console.log(person1.getFullName)

// person1.changeName = "G'ishmat"
// const userningIsmi = person1.getFullName
// console.log(person1.getFullName)
console.log(person1.getName)
console.log(person1.fName)
// set => joylash, yuborish
// get => olish

// Shular haqida tanishib kelish
// https://codingnomads.co/wp-content/uploads/2020/12/OOP-graphic-blog-oop-concepts-in-java-what-is-object-oriented-programming.png
