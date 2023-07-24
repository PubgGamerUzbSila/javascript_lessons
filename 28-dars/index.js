// const btn = document.querySelector('button')
// let count = 0
// btn.addEventListener('click', (event) => {
//   // console.log('Hello world')
//   // event.textContent = count++
//   // console.log(event)
// })

// btn.onclick = () => {
//   console.log('hello world')
// }

// const btn = document.querySelector('button')
// const div = document.querySelector('div')
// const section = document.querySelector('section')

// btn.addEventListener('click', (event) => {
//   event.stopPropagation()
//   console.log('btn clicked')
// })

// div.addEventListener('click', (event) => {
//   console.log('div clicked')
// })
// section.addEventListener('click', (event) => {
//   console.log('section clicked')
// })

// const contextMenu = document.querySelector('#custom-context-menu')

// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault()
//   if (contextMenu.hasAttribute('hidden')) {
//     contextMenu.removeAttribute('hidden')
//   } else {
//     contextMenu.setAttribute('hidden', '')
//   }
// })

// =================

// const input = document.querySelector('input')

// input.addEventListener('keyup', (e) => {
//   // console.log(e.target.name)
// })

// input.addEventListener('keydown', (e) => {
//   // console.log(e.target.name)
//   console.log(e.target.value)
// })

// input.addEventListener('keypress', (e) => {
//   // console.log(e.target.name)
//   console.log(e.target.value)
// })

// input.addEventListener('change', (e) => {
//   // console.log(e.target.name)
//   console.log(e.target.value)
// })

// input.addEventListener('input', (e) => {
//   // console.log(e.target.name)
//   console.log(e.target.value)
// })

// ==============

const container = document.querySelector('#container')
const content = document.querySelector('#content')

const characters = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '<='],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
]

characters.forEach((item) => {
  const row = document.createElement('div')
  row.classList.add('row')

  item.forEach((char) => {
    const span = document.createElement('span')
    span.addEventListener('click', () => {
      handleSpanClick(char)
    })
    span.textContent = char
    span.setAttribute('key', char)
    row.appendChild(span)
  })
  container.appendChild(row)
})
// let lastActiveChar = 0
function toggleActive(e, event) {
  if (e === 'Backspace' && event.metaKey) {
    content.textContent = ''
    return
  }
  switch (e) {
    case 'Backspace':
      content.textContent = content.textContent.slice(0, -1)
      break
    default:
      const el = document.querySelector(`[key='${e}']`)
      el?.classList?.toggle?.('active')
      setTimeout(() => {
        el?.classList?.remove?.('active')
      }, 500)
      content.textContent += e
      return el
  }
}

document.addEventListener('keydown', (e) => {
  toggleActive(e.key, e)
  // console.log(e.key)
  // if (e.key == 'ArrowLeft') {
  //   content.textContent += 'Hello world'
  // } else if (e.key === 'ArrowRight') {
  //   content.textContent = ''
  // }
  // const spans = document.querySelectorAll('span')
  // spans.forEach((item) => {
  //   if (item.textContent == e.key) {
  //     item.classList.add('active')
  //   } else {
  //     item.classList.remove('active')
  //   }
  // })
  // if (!lastActiveChar) {
  //   lastActiveChar++
  // }
  // if (lastActiveChar === 1) {
  //   lastActiveChar = 0
  //   el.classList.add('active')
  // }
  // lastActiveChar = el
})

function handleSpanClick(param) {
  toggleActive(param)
}

// document.addEventListener('keyup', (e) => {
//   const el = document.querySelector(`[key='${e.key.trim()}']`)
//   el?.classList?.toggle('active')
// })
