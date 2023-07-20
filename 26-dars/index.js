'use strict'
// const container = document.querySelector('#container')
// const p1 = document.querySelector('#p1')
// const lastChild = document.querySelector('#lastChild')
// innerHtml, innerText, textContent

// console.log(
//   p1.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// )

// console.log(lastChild.previousElementSibling.previousElementSibling)
// console.log(lastChild.nextSibling)

// const lists = document.querySelectorAll('li')
// const colors = [
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'orange',
//   'purple',
//   '#ccc',
//   '#010101',
// ]
// lists.forEach((item, index) => {
//   // background-color: red;
//   //       margin-bottom: 20px;
//   //       padding: 10px 20px;
//   //       text-align: center;
//   //       list-style: none;

//   // item.style.backgroundColor = 'red'
//   // item.style.marginBottom = '20px'
//   // item.style.padding = '10px'
//   // item.style.textAlign = 'center'
//   // item.style.listStyle = 'none'

//   item.style.cssText = `
//   background-color: red;
//   margin-bottom: 10px;
//   padding: 10px;
//   text-align: center;
//   list-style: none;
//   `
// })

// lists.forEach((item) => {
//   // if (item.textContent % 2 === 0) {
//   //   item.style.backgroundColor = 'red'
//   // } else {
//   //   item.style.backgroundColor = '#ccc'
//   // }
//   item.style.backgroundColor = item.textContent % 2 === 0 ? 'red' : '#ccc'
// })

//

// const changeThemeBtn = document.querySelector('#theme')
// let currentTheme = 'dark'
// console.log(changeThemeBtn.classList)
// function handleTheme() {
//   // if (currentTheme == 'dark') {
//   //   changeThemeBtn.textContent = 'Button:light'
//   //   currentTheme = 'light'
//   //   changeThemeBtn.setAttribute('class', 'btn btn-blue')
//   // } else {
//   //   changeThemeBtn.textContent = 'Button:Dark'
//   //   currentTheme = 'dark'
//   //   changeThemeBtn.setAttribute('class', 'btn btn-dark')
//   // }

//   if (currentTheme == 'dark') {
//     changeThemeBtn.textContent = 'Button:light'
//     currentTheme = 'light'
//     changeThemeBtn.classList.add('btn-blue')
//     changeThemeBtn.classList.remove('btn-dark')
//   } else {
//     changeThemeBtn.textContent = 'Button:Dark'
//     currentTheme = 'dark'
//     changeThemeBtn.classList.add('btn-dark')
//     changeThemeBtn.classList.remove('btn-blue')
//   }
//   // changeThemeBtn.classList.add('btn-dark')
//   // changeThemeBtn.classList.remove('btn-dark')
//   // changeThemeBtn.classList.toggle('btn-dark')
// }

// const menu = document.querySelector('aside')
// const toggleMenu = () => {
//   menu.classList.toggle('open')
// }

const albumsContainer = document.querySelector('#albums')

const news = [
  {
    title: 'Катта уруш ўзгармаган: Украинанинг қарши ҳужумидан 5 сабоқ',
    description:
      'Украина армиясининг мамлакат жануби ва Донбассда бошлаган қарши ҳужум ҳаракатларидан бир ойдан ошиқ вақт ўтиб воқеалар ривожи бўйича айрим хулосаларни чиқариш мумкин.',
    href: '/news/2023/07/20/katta-urush-ozgarmagan-ukrainaning-qarshi-hujumidan-5-saboq',
    orginal_image: '9/-1knBrLeyyxiHqgCPjYYNrhtWX4V-tj-.jpg',
    image:
      'https://storage.kun.uz/source/thumbnails/_medium/9/-1knBrLeyyxiHqgCPjYYNrhtWX4V-tj-_medium.jpg',
    category_name: 'Жаҳон',
    category_href: '/news/category/jahon',
    published: '12:22',
    day: '20 Июль',
    time: '12:22',
    pub_date: '20.07.2023',
    views_count: 14093,
    is_ads: false,
    is_pinned: false,
    show_image: true,
    show_desc: true,
    font_style: 'normal',
  },
  {
    title:
      '«Open budget»: дедлайн тугамоқда, барча ғолиб лойиҳалар амалга ошадими?',
    description:
      'Ўзбекистонликларнинг севимли лойиҳаси «Open budget»нинг 2023 йил учун иккинчи мавсумига старт берилди. Аммо ҳали биринчи мавсумда ғолиб бўлган лойиҳаларнинг барчаси амалга оширилгани йўқ. Уларни бажариш учун белгиланган муддат эса тугаб бормоқда.',
    href: '/news/2023/07/20/open-budget-dedlayn-tugamoqda-barcha-golib-loyihalar-amalga-oshadimi',
    orginal_image: '9/w5QyckUfl47nqJJ7wzI7SUeQ78TYvmOb.jpg',
    image:
      'https://storage.kun.uz/source/thumbnails/_medium/9/w5QyckUfl47nqJJ7wzI7SUeQ78TYvmOb_medium.jpg',
    category_name: 'Ўзбекистон',
    category_href: '/news/category/uzbekiston',
    published: '08:32',
    day: '20 Июль',
    time: '08:32',
    pub_date: '20.07.2023',
    views_count: 4024,
    is_ads: false,
    is_pinned: false,
    show_image: true,
    show_desc: true,
    font_style: 'normal',
  },
  {
    title:
      'АҚШ Россияга ёрдами учун Қирғизистонга қарши санкциялар қўллашга тайёрланмоқда — Washington Post',
    description:
      'Washington Post Америка ҳукумат тузилмаларидаги манбаларига таянган ҳолда хабар беришича, АҚШ Россияга Украинага босқини учун қўлланган санкцияларни айланиб ўтиб, ушбу мамлакатга Европа ва Осиёдан маҳсулотлар етказиб бераётган Қирғизистон компанияларига қарши янги санкциялар тайёрламоқда.',
    href: '/news/2023/07/19/aqsh-rossiyaga-yordami-uchun-qirgizistonga-qarshi-sanksiyalar-qollashga-tayyorlanmoqda-washington-post',
    orginal_image: '9/Rft6rg7NWJat4UAQ8YqQKl9yzXykfHux.jpg',
    image:
      'https://storage.kun.uz/source/thumbnails/_medium/9/Rft6rg7NWJat4UAQ8YqQKl9yzXykfHux_medium.jpg',
    category_name: 'Жаҳон',
    category_href: '/news/category/jahon',
    published: '18:37 / 19.07.2023',
    day: '19 Июль',
    time: '18:37',
    pub_date: '19.07.2023',
    views_count: 12336,
    is_ads: false,
    is_pinned: false,
    show_image: true,
    show_desc: true,
    font_style: 'normal',
  },
  {
    title: 'ЖАР Путинни БРИКС саммитига келмасликка кўндирди',
    description:
      'Саммитда Россия делегациясига Лавров бошчилик қилади. Агар Путин Йоханнесбургдаги анжуманга борганида, Рим статутига қўшилган Жанубий Африка Республикаси Халқаро жиноят суди ордерига асосан уни ҳибсга олиши керак бўларди.',
    href: '/news/2023/07/19/jar-putinni-briks-sammitiga-kelmaslikka-kondirdi',
    orginal_image: '9/O7DG0LCKYDUOxL4b0hQPiTcud7Ttf5ni.jpg',
    image:
      'https://storage.kun.uz/source/thumbnails/_medium/9/O7DG0LCKYDUOxL4b0hQPiTcud7Ttf5ni_medium.jpg',
    category_name: 'Жаҳон',
    category_href: '/news/category/jahon',
    published: '17:29 / 19.07.2023',
    day: '19 Июль',
    time: '17:29',
    pub_date: '19.07.2023',
    views_count: 12373,
    is_ads: false,
    is_pinned: false,
    show_image: true,
    show_desc: true,
    font_style: 'normal',
  },
  {
    title:
      '«Алдолмади, тили калимага келмай қолди» — Зойир Мирзаев Ҳидоятовни танқид қилди',
    description:
      'Вилоят раҳбари аҳолида уй-жойни тўғридан тўғри сотиб олиш мумкинлигига ишонч йўқолганини таъкидлаб, бунда Чирчиқ шаҳри ҳокими Даврон Ҳидоятов ва бошқа сектор раҳбарларини айблади.',
    href: '/news/2023/07/18/chirchiqdagi-uylarni-sotishda-korrupsion-sxema-ishlayapti-zoyir-mirzayev-hidoyatovni-tanqid-qildi',
    orginal_image: '9/xUEsLT2r4WRt9vbI02i_vHfNZ5ExIrmz.jpg',
    image:
      'https://storage.kun.uz/source/thumbnails/_medium/9/xUEsLT2r4WRt9vbI02i_vHfNZ5ExIrmz_medium.jpg',
    category_name: 'Ўзбекистон',
    category_href: '/news/category/uzbekiston',
    published: '19:56 / 18.07.2023',
    day: '18 Июль',
    time: '19:56',
    pub_date: '18.07.2023',
    views_count: 32067,
    is_ads: false,
    is_pinned: false,
    show_image: true,
    show_desc: true,
    font_style: 'normal',
  },
]

news.forEach((item) => {
  const box = createBox(item)
  albumsContainer.appendChild(box)
})

function createElement(elementName) {
  return document.createElement(elementName)
}

function createBox(item) {
  const { views_count, pub_date, image, title } = item
  const box = createElement('div')
  const img = createElement('img')
  const h3 = createElement('h3')
  const publishRow = createRow(
    {
      classNames: ['fa-solid', 'fa-upload'],
      elementName: 'i',
    },
    {
      classNames: [],
      elementName: 'p',
      content: pub_date,
    }
  )
  const viewsRow = createRow(
    {
      classNames: ['fa-regular', 'fa-eye'],
      elementName: 'i',
    },
    {
      classNames: [],
      elementName: 'p',
      content: views_count,
    }
  )

  h3.textContent = title
  img.setAttribute('src', image)

  box.appendChild(img)
  box.appendChild(h3)
  box.appendChild(publishRow)
  box.appendChild(viewsRow)
  box.classList.add('box')

  return box
}

function createRow(...elements) {
  const row = createElement('div')
  row.classList.add('row')
  elements.forEach((item) => {
    const { elementName, classNames, content } = item
    const element = createElement(elementName)
    element.textContent = content
    classNames.length && element.classList.add(...classNames)
    row.appendChild(element)
  })
  return row
}
