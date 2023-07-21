const todoInput = document.querySelector('#todoValue')
const addTodoBtn = document.querySelector('#addTodoBtn')
const result = document.querySelector('#result')
const showOnlyCompletedBtn = document.querySelector('#showOnlyCompletedBtn')
const showStatusBtn = document.querySelector('#showStatusBtn')

let isShowOnlyCompleted = false
let isShowStatus = true
const todos = []

addTodoBtn.addEventListener('click', () => {
  todos.unshift({
    todoTitle: todoInput.value,
    isDone: false,
  })
  todoInput.value = ''
  render(todos)
})

function changeStatus(id) {
  todos[id].isDone = !todos[id].isDone
  render(todos)
}

function render(todos) {
  result.innerHTML = ''
  if (!todos.length) {
    const h1 = document.createElement('h1')
    h1.textContent = 'Urraaaa hamma ishlarni tugatibsiz!!!'
    result.append(h1)
    return
  }
  todos.forEach((todo, index) => {
    const div = createRow(
      {
        classNames: todo.isDone ? ['delete-text'] : [],
        elementName: 'p',
        content: todo.todoTitle,
      },
      {
        classNames: [],
        elementName: 'button',
        content: 'Tugallangan',
        click: () => {
          changeStatus(index)
        },
      }
    )
    result.appendChild(div)
  })
}

function createRow(...elements) {
  const row = document.createElement('div')
  row.classList.add('row')
  elements.forEach((item) => {
    const { elementName, classNames, content, click } = item
    const element = document.createElement(elementName)
    element.textContent = content
    classNames.length && element.classList.add(...classNames)
    click && element.addEventListener('click', click)
    row.appendChild(element)
  })
  return row
}

function showStatus() {
  const finishedTaskCount = todos.reduce((acc, curr) => {
    acc += Number(curr.isDone)
    return acc
  }, 0)
  const finishedTaskPercent = (finishedTaskCount * 100) / todos.length
  const h1 = document.createElement('h1')
  h1.textContent = `${
    !todos.length ? '100' : Math.floor(finishedTaskPercent)
  } %`
  if (isShowStatus) {
    result.innerHTML = ''
    result.appendChild(h1)
  } else {
    render(todos)
  }
  isShowStatus = !isShowStatus
}

showOnlyCompletedBtn.addEventListener('click', () => {
  const finishedTasks = todos.filter((todo) => {
    return isShowOnlyCompleted ? todo.isDone : true
  })
  isShowOnlyCompleted = !isShowOnlyCompleted
  render(
    todos.length && !finishedTasks.length
      ? [
          {
            todoTitle: 'Siz hali birorta ham ishni tugatmadingiz👎🏿',
          },
        ]
      : finishedTasks
  )
})

showStatusBtn.addEventListener('click', showStatus)
render(todos)
