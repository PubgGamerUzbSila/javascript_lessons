// const getElement = (selector) => {
//   return document.querySelector(selector)
// }

// const elementName = getElement('#elementName')
// const elementTextContent = getElement('#elementTextContent')
// const width = getElement('#width')
// const height = getElement('#height')
// const color = getElement('#color')
// const createBtn = getElement('#createBtn')
// const result = getElement('#result')
// const removeElement = getElement('#removeElement')

// createBtn.addEventListener('click', () => {
//   const validatorParam = [
//     {
//       label: 'Element nomi',
//       value: elementName.value,
//     },
//     {
//       label: 'Elementning text contenti',
//       value: elementTextContent.value,
//     },
//   ]
//   const err = validator(validatorParam)

//   if (Object.keys(err).length) {
//     console.log(Object.entries(err))
//     return
//   }
//   const element = document.createElement(elementName.value)
//   element.textContent = elementTextContent.value
//   element.style.cssText = `
//   width: ${width.value}px;
//   height: ${height.value}px;
//   background-color: ${color.value}
//   `
//   result.appendChild(element)
// })

// removeElement.addEventListener('click', () => {
//   const el = getElement(elementName.value)
//   el.remove()
// })

// function validator(values = []) {
//   return values.reduce((acc, curr) => {
//     if (!curr.value) {
//       acc[curr.label] = "Noto'g'ri qiymat berilgan"
//     }
//     return acc
//   }, {})
// }
