// Global, local, block

// function foo() {
//   var a = 50
//   boo()
//   function boo() {
//     // shadowing
//     var a = 10
//     console.log(a)
//   }

//   console.log(a)
// }

// foo()
// var author = 'Nimadir'
// var bookName = 'yana  nimadir'

// function showInfo(nimadir, ikki) {
//   console.log(`
//   Kitob nomi: ${this.bookName}
//   Muallifi: ${this.author}
//       `)
// }

// const showInfoWithArrowFunction = () => {
//   console.log(`
//   Kitob nomi: ${this.bookName}
//   Muallifi: ${this.author}
//       `)
// }

// const book1 = {
//   author: 'Abdulla Qodiriy',
//   bookName: "O'tkan kunlar",
//   // showInfo() {
//   //   console.log(`
//   // Kitob nomi: ${this.bookName}
//   // Muallifi: ${this.author}
//   //     `)
//   // },
// }
// showInfo.call(book1, 1, 2)

// showInfo.apply(book1, [1, 2])

// const newShowInfo = showInfo.bind(book1)
// newShowInfo()

// const book2 = {
//   author: 'Alisher Navoiy',
//   bookName: 'Xamsa',
//   showInfo: () => {
//     console.log(`
//   Kitob nomi: ${this.bookName}
//   Muallifi: ${this.author}
//       `)
//   },
// }

// book2.showInfo()
// book1.showInfo()

// showInfo(book1)
// showInfo(book2)

// const now = performance.now()
// for (let i = 0; i < 10000000000; i++) {}

// console.log('Hello world')
// let count = 0
// function foo() {
//   const date = new Date()
//   if (date.getSeconds() === 59) {
//     clearInterval(timeOut)
//   }
//   console.log(date.getSeconds())
// }
// console.log(performance.now() - now)
// const timeOut = setTimeout(() => {
//   console.log('Hello world')
// }, 5000)

// setTimeout(() => {
//   clearTimeout(timeOut)
// }, 6000)

// const timeOut = setInterval(foo, 1000)

// const loader = document.getElementById('lds-circle')

// setTimeout(() => {
//   loader.style.display = 'none'
// }, 5000)

// const hour = document.getElementById('hour')
// const minute = document.getElementById('minute')
// const second = document.getElementById('second')

// setInterval(function () {
//   const date = new Date()
//   hour.innerHTML = `<pre>${date.getHours()} : </pre>`
//   minute.innerHTML = `<pre>${date.getMinutes()} : </pre>`
//   second.innerHTML = `<pre>${date.getSeconds()}</pre>`
// }, 1000)

// const minute = document.getElementById('minute')
// const second = document.getElementById('second')
// const inputRange = document.getElementById('range')
// const audio = document.getElementById('audio')
// const musicName = document.getElementById('music_name')
// const musicAuthor = document.getElementById('music_author')
// const playBtn = document.getElementById('play')
// const audios = [
//   {
//     src: './audios/Bahodir Mamajonov - Ichimdagi dushmanlarim.mp3',
//     musicName: 'Ichimdagi dushmanlarim',
//     author: 'Bahodir Mamajonov',
//   },
//   {
//     src: './audios/bahodir-mamajonov-allaqachonlar_(uzhits.net).mp3',
//     musicName: 'Allaqachonlar',
//     author: 'Bahodir Mamajonov',
//   },
// ]
// let currentMusic = 0
// let isPlayed = false
// let mins = 1
// let seconds = 0

// minute.innerHTML = `${mins < 10 ? '0' + mins : mins} `
// second.innerHTML = `${seconds < 10 ? '0' + seconds : seconds}`

// const interval = setInterval(() => {
//   if (seconds === 0 && mins - 1 >= 0) {
//     mins = mins - 1
//     seconds = 60
//   }

//   if (seconds === 0 && mins === 0) {
//     clearInterval(interval)

//     return
//   }
//   minute.innerHTML = `${mins < 10 ? '0' + mins : mins} `
//   seconds -= 1
//   second.innerHTML = `${seconds < 10 ? '0' + seconds : seconds}`
// }, 100)

// function nextAudio() {
//   if (!currentMusic) {
//     currentMusic = 1
//   } else {
//     currentMusic = 0
//   }
//   audio.src = audios[currentMusic].src
//   play()
// }
// function play() {
//   if (isPlayed) {
//     audio.pause()
//     playBtn.textContent = 'Play'
//   } else {
//     audio.play()
//     playBtn.textContent = 'Pause'
//   }
//   musicAuthor.textContent = audios[currentMusic].author
//   musicName.textContent = audios[currentMusic].musicName
//   isPlayed = !isPlayed
// }

// function pause() {
//   audio.pause()
// }

// function next() {
//   audio.currentTime += 15
// }

// inputRange.onchange = function (e) {
//   audio.currentTime = e.target.value
// }

// console.log(0)
// function foo() {
//   console.log(1)
// }
// setTimeout(foo, 0)

// console.log(2)

// function foo() {
//   var a = 10
//   function boo() {
//     var a = 20
//     console.log(a)
//   }
//   boo()
// }

// foo()

// debugger
// const a = 20
// let b = 30
// var c = 50

// s = "daabcbaabcbc", part = "abc"
// 1 => dabaabcbc
// 2 => dababc
// 3 => dab
// "dab"

const s = 'daabcbaabcbc'

const part = 'abc'
// 1

// let result = s
// let index = s.indexOf(part)
// while (index !== -1) {
//   result = result.slice(0, index) + result.slice(index + part.length)
//   index = result.indexOf(part)
// }
// console.log(result)

// 2
// function foo(str) {
//   if (str.includes(part)) {
//     return foo(str.replaceAll(part, ''))
//   }
//   return str
// }

// console.log(foo(s))

// 3
// const newStr = s.split(part).join('').split(part).join('')
// console.log(newStr)

// Linked list

// const text = 'a1b1'

// result: ['A1b1', 'a1B1', 'A1B1',"a1b1"]

// const text = 'a1b11'

// function foo() {
//   const res = text.match(/[a-z]/gi).length
//   return 2 ** res
// }
// console.log(foo())
