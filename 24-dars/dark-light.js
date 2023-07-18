// const btn = document.getElementById('btn')
// // debugger
// // btn.removeAttribute('class')

// let currentTheme = 'light'
// function changeTheme() {
//   if (currentTheme === 'light') {
//     btn.setAttribute('class', 'btn-dark')
//     currentTheme = 'dark'
//   } else {
//     btn.setAttribute('class', 'btn-light')
//     currentTheme = 'light'
//   }
// }

const aside = document.getElementsByTagName('aside')
let isOpenMenu = false

function handleMenu() {
  if (isOpenMenu) {
    aside[0].removeAttribute('class')
    isOpenMenu = false
  } else {
    aside[0].setAttribute('class', 'active')
    isOpenMenu = true
  }
}
