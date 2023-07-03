// 8 ta
// 1 => string
// 2 => number
// 3 => object
// 4 => boolean
// 5 => undefined
// 6 => null
// 7 => Symbol
// 8 => bigInt

// const obj = {
//   todo: {
//     date: 'Jule 3',
//   },
//   showInfo: () => {
//     console.log(this.todo)
//   },

//   // showInfo() {
//   //   console.log(obj.todo)
//   // },
// }

// optional chaining

// console.log(obj.todo?.date)

// obj.showInfo?.()

// console.log('Hello world')

// 'use strict'

// const a = 10

// console.log(a)

// function foo(a, a, c) {
//   console.log(a, c)
// }

// foo(1, 2, 3)

// let str = 'Hello world'

// str.age = 40

// console.log(str.age)

// delete Array.prototype

// higher order function

// argument sifatida function qabul qiladigan yoki qaytariladigan qiymat sifatida function qaytaradigan funksiya

// function foo() {
//   console.log('Salom dunyo')
// }

// function boo(callbackFunction) {
//   callbackFunction()
// }

// boo(foo)

// const arr = [1, 2, 3, 4]

// function qoshish(value) {
//   return value + 2
// }

// function ayirish(value) {
//   return value - 2
// }

// function kopaytirish(value) {
//   return value * 2
// }

// function customMap(callbackFunction) {
//   const res = []
//   for (let i = 0; i < this.length; i++) {
//     res.push(callbackFunction(this[i]))
//   }
//   return res
// }

// Array.prototype.customMap = customMap

// console.log(foo(arr, qoshish))
// console.log(foo(arr, ayirish))
// console.log(foo(arr, kopaytirish))

// const res = arr.map(kopaytirish)
// const res1 = arr.customMap(kopaytirish)

// console.log(res)
// console.log(res1)

// task 2

// function ayirish(array) {
//   const res = []
//   for (let i = 0; i < array.length; i++) {
//     res.push(array[i] - 2)
//   }
//   return res
// }

// console.log(ayirish(arr))

// task 3

// function kopaytirish(array) {
//   const res = []
//   for (let i = 0; i < array.length; i++) {
//     res.push(array[i] * 2)
//   }
//   return res
// }

// console.log(kopaytirish(arr))

// const arr = [1, 2]

// return false

// const arr = [1,1,1,5,5,3]

// return true

// const obj = {}

// for (let element of arr) {
//   obj[element] = obj[element] + 1 || 1
//   // ===============
//   // 2-usuli
//   // if (obj[element] !== undefined) {
//   //   obj[element] = obj[element] + 1
//   // } else {
//   //   obj[element] = 1
//   // }
//   // 3=============
//   // obj[element] = obj[element] ? obj[element] + 1 : 1
// }

// const values = Object.values(obj)
// const r = {}
// for (let el of values) {
//   r[el] = r[el] + 1 || 1
// }
// const val = Object.values(r)
// let sum = 0

// for (let i = 0; i < val.length; i++) {
//   sum += val[i]
// }

// console.log(values.length === val.length)

// WITH MAP

// const arr = [1, 1, 1, 2, 2, 3, 5, 5, 5, 5, 5, 5]

// const map = new Map()

// for (let el of arr) {
//   map.set(el, map.get(el) + 1 || 1)
// }

// const uniqueValues = new Set(map.values())

// console.log(uniqueValues.size === map.size)

// filter, map, reduce

// const arr = [10, 2, 3, 5]

// function foo(value) {
//   return value % 2 === 0
// }

// const filteredValue = arr.filter(foo)

// console.log(filteredValue)

// ======================================== *********************************** =============================
// const news = [
//   {
//     title: '“Oilaviy” – анъанавий таъмга янгича назар',
//     description:
//       '“Oilaviy” колбасалар линияси анъаналарга янгича назар билан қарайдиган замонавий оилалар учун махсус ишлаб чиқилган. Дунё ўзгармоқда, бу эса эски анъаналар ўз салмоғини йўқотмоқда, янгилари эса ҳаётимизда ўз ўрнини топмоқда, дегани. Буларнинг барчасини инобатга олиб, анъанавий таъмга эга, аммо анъаналарга янгича назар билан қарайдиган “Oilaviy” колбасаларининг янги линиясини яратишга қарор қилдик.',
//     href: '/news/2023/06/30/oilaviy-ananaviy-tamga-yangicha-nazar',
//     orginal_image: '9/7OadmRxAvyj8sUM9o1sbDR1YTygnLhIj.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/7OadmRxAvyj8sUM9o1sbDR1YTygnLhIj_medium.jpg',
//     category_name: 'Жамият',
//     category_href: '/news/category/jamiyat',
//     published: '16:50 / 30.06.2023',
//     day: '30 Июнь',
//     time: '16:50',
//     pub_date: '30.06.2023',
//     views_count: 7228,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title:
//       'ASUS Zenbook Pro 16X OLED - ижодкорлик ва маҳсулдорлик учун мукаммал восита',
//     description:
//       'Ушбу ноутбук ASUS оиласидаги энг самарали моделлардан бири бўлиб, уни бозордаги бошқа қурилмалардан ажратиб турадиган бир қатор асосий хусусиятлари - ташқи дизайннинг бетакрорлиги ва ички махсус тузилмага эга эканлигида.',
//     href: '/news/2023/06/30/asus-zenbook-pro-16x-oled-ijodkorlik-va-mahsuldorlik-uchun-mukammal-vosita',
//     orginal_image: '9/7tA7HqPKHqA010QTUrjjvZtylRNh__P1.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/7tA7HqPKHqA010QTUrjjvZtylRNh__P1_medium.jpg',
//     category_name: 'Ўзбекистон',
//     category_href: '/news/category/uzbekiston',
//     published: '12:54 / 30.06.2023',
//     day: '30 Июнь',
//     time: '12:54',
//     pub_date: '30.06.2023',
//     views_count: 8163,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title: 'Туронбанкнинг ёшлар лойиҳаси 400 нафар талабани қамраб олди',
//     description:
//       'Ҳар йили олий таълимни минглаб талабалар тамомлашади. Яхшироқ иш излаш, у ерда адаптация вақтини ўтказиш, соҳавий кўникмаларни ўзлаштиришга йўқ деганда яна 1 йил керак бўлади.',
//     href: '/news/2023/06/30/turonbankning-yoshlar-loyihasi-400-nafar-talabani-qamrab-oldi',
//     orginal_image: '9/CndRfsNTFJrfxZ_ZPEaL_nu4eTgh_JlJ.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/CndRfsNTFJrfxZ_ZPEaL_nu4eTgh_JlJ_medium.jpg',
//     category_name: 'Ўзбекистон',
//     category_href: '/news/category/uzbekiston',
//     published: '08:59 / 30.06.2023',
//     day: '30 Июнь',
//     time: '08:59',
//     pub_date: '30.06.2023',
//     views_count: 6041,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title:
//       'Vosiq  халқаро мактаби ва болалар боғчасида халқаро даражадаги таълим',
//     description:
//       'Замонавий таълим тез ўзгарувчан дунё талабларига жавоб берадиган турли хил ўқув дастурларини таклиф этади. Таълим муассасасининг вазифаси болалар учун энг яхши ва энг мос дастурни танлашдир. Vosiq  халқаро мактаби ва болалар боғчаси болаларнинг ҳар томонлама ривожланишини таъминлаб, ҳар бир инсон келажакда дунёнинг масъулиятли фуқаросига айланиши йўлида тарбия ва тайёрловга эътибор қаратади.',
//     href: '/news/2023/06/28/vosiq-xalqaro-maktabi-va-bolalar-bogchasida-xalqaro-darajadagi-talim',
//     orginal_image: '9/v6ug_0cw0wvDYXniz7nYKDD92CE-wgIZ.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/v6ug_0cw0wvDYXniz7nYKDD92CE-wgIZ_medium.jpg',
//     category_name: 'Ўзбекистон',
//     category_href: '/news/category/uzbekiston',
//     published: '12:55 / 28.06.2023',
//     day: '28 Июнь',
//     time: '12:55',
//     pub_date: '28.06.2023',
//     views_count: 6087,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title:
//       'Марказий Осиёда таълимнинг янги даври: AKFA университети Central Asian University (CAU)га ўзгартирилди',
//     description:
//       '26 июн куни Ўзбекистондаги етакчи хусусий таълим муассасаларидан бири - AKFA университетида муҳим тарихий ҳодиса рўй берди.',
//     href: '/news/2023/06/27/markaziy-osiyoda-talimning-yangi-davri-akfa-universiteti-central-asian-university-cauga-ozgartirildi',
//     orginal_image: '9/RJS5JUQ-Cq9uwLI8nBZqZBkfYAWN1BBY.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/RJS5JUQ-Cq9uwLI8nBZqZBkfYAWN1BBY_medium.jpg',
//     category_name: 'Жамият',
//     category_href: '/news/category/jamiyat',
//     published: '18:00 / 27.06.2023',
//     day: '27 Июнь',
//     time: '18:00',
//     pub_date: '27.06.2023',
//     views_count: 10453,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title: 'Beko — замонавий маиший техника учун ишончли ҳамроҳ',
//     description:
//       'Beko компанияси ҳақида гап кетганда кундалик ишларни осон ва ёқимли қиладиган маиший техникалар кўз олдингизга келади. Кенг ассортиментдаги инновацион маиший техника билан ҳаётингизни яхшилайсиз ва эҳтиёжларингизга жавоб берадиган ишончли, юқори сифатли маҳсулотларга эга бўласиз. Овқат пишириш, тозалаш ёки кир ювиш – барчасида Beko сизга ишончли ёрдамчи бўлади.',
//     href: '/news/2023/06/26/beko-zamonaviy-maishiy-texnika-uchun-ishonchli-hamroh',
//     orginal_image: '9/g07H0s6FkYBHQ6JD_JCWWObx7w9mEAtW.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/g07H0s6FkYBHQ6JD_JCWWObx7w9mEAtW_medium.jpg',
//     category_name: 'Жамият',
//     category_href: '/news/category/jamiyat',
//     published: '16:58 / 26.06.2023',
//     day: '26 Июнь',
//     time: '16:58',
//     pub_date: '26.06.2023',
//     views_count: 11111,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title: '“Ўзчармсаноат” уюшмаси – гендер тенглик фаоли',
//     description:
//       'Сўнгги йилларда хотин-қизлар ва эркаклар тенг ҳуқуқлилигини ҳамда жамият ва давлат ишларини бошқаришда уларнинг тенг иштирок этишини таъминлаш, хотин-қизларни ижтимоий-ҳуқуқий жиҳатдан қўллаб-қувватлаш, шунингдек, уларни тазйиқ ва зўравонликлардан ҳимоя қилишга қаратилган кенг кўламли ислоҳотлар амалга оширилди.',
//     href: '/news/2023/06/26/ozcharmsanoat-uyushmasi-gender-tenglik-faoli',
//     orginal_image: '9/UuqG8QmlKpXjGOOXuqvkb7VGKe426gBW.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/UuqG8QmlKpXjGOOXuqvkb7VGKe426gBW_medium.jpg',
//     category_name: 'Ўзбекистон',
//     category_href: '/news/category/uzbekiston',
//     published: '11:58 / 26.06.2023',
//     day: '26 Июнь',
//     time: '11:58',
//     pub_date: '26.06.2023',
//     views_count: 4286,
//     is_ads: true,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
//   {
//     title:
//       'GRAND BAZAAR: Қурилиш моллари савдоси учун БЕПУЛ ИЖАРА таклифи мавжуд дўконлар!',
//     description:
//       'Пойтахтимизнинг "Шифокорлар шаҳарчаси" деб номланган ерида қад кўтарган GRAND BAZAAR қурилиш дўконлари савдо мажмуаси 30, 60, 110, 140 ва 180 кв.м даги тайёр кадастр ҳужжатларига эга дўконларни тақдим этади.',
//     href: '/news/2023/06/24/grand-bazaar-qurilish-mollari-savdosi-uchun-bepul-ijara-taklifi-mavjud-dokonlar',
//     orginal_image: '9/JGHDN5AxGxZUbHs87rkpE2BLjpPVa7I8.jpg',
//     image:
//       'https://storage.kun.uz/source/thumbnails/_medium/9/JGHDN5AxGxZUbHs87rkpE2BLjpPVa7I8_medium.jpg',
//     category_name: 'Ўзбекистон',
//     category_href: '/news/category/uzbekiston',
//     published: '11:11 / 24.06.2023',
//     day: '24 Июнь',
//     time: '11:11',
//     pub_date: '24.06.2023',
//     views_count: 6157,
//     is_ads: false,
//     is_pinned: false,
//     show_image: true,
//     show_desc: true,
//     font_style: 'normal',
//   },
// ]

// let currentCategory = 'Ўзбекистон'
// const container = document.getElementById('container')

// function setCurrentCategory(category) {
//   currentCategory = category
//   const uzb = news
//     .filter(function (value) {
//       if (currentCategory) {
//         return value.category_name === currentCategory
//       }
//       return true
//     })
//     .map((item) => item)

//   const r = uzb
//     .map(
//       (item) => `<div class="box">
//   <h1>${item.title}</h1>
//   <img src="${item.image}"/>
//   <span style="display: ${item.is_ads ? 'inline-block' : 'none'}">Reklama</span>
//   </div>
//   `
//     )
//     .join(' ')
//   container.innerHTML = r
// }
// const r = news
//   .map(
//     (item) => `<div class="box">
// <h1>${item.title}</h1>
// <img src="${item.image}"/>
// <span style="display: ${item.is_ads ? 'inline-block' : 'none'}">Reklama</span>
// </div>
// `
//   )
//   .join(' ')
// container.innerHTML = r

// ======================================== *********************************** =============================
// const jamiyat = news
//   .filter(function (value) {
//     return value.category_name === 'Жамият'
//   })
//   .map((item) => item.title)

// console.log(jamiyat)
// console.log(uzb)

// const arr = [1, 2, 3, 4]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }

// console.log(sum)

// const sum = arr.reduce(function (acc, currentValue) {
//   acc = acc + currentValue
//   return acc
// }, 40)

// console.log(sum)

// let text = 'Assalom alaykum'
// function foo(acc, curr) {
//   // if (acc[curr]) {
//   acc[curr] = acc[curr] + 1 || 1
//   // } else {
//   // acc[curr] = 1
//   // }
//   return acc
// }

// let result = text.split('').reduce(foo, {})

// console.log(result)

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 48,
  },
]
