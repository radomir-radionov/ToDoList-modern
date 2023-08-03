const createToDoFormEl = document.querySelector('#modalTodo')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const inputTitleEl = document.querySelector('#inputTitle')
const inputDescriptionEl = document.querySelector('#inputDescription')
const btnClose = document.querySelector('#btnClose')

const todos = {
  toDo: [],
}

const openToDoModal = () => {
  modalTodoWrapperEl.style.display = 'flex'
}

const closeTodoModal = (event) => {
  event.preventDefault()
  modalTodoWrapperEl.style.display = 'none'
}

btnClose.addEventListener('click', closeTodoModal)

const drawList = (data, listType) => {
  const listEl = document.querySelector(`#${listType}}`)
}

const handleCreateTodoForm = (event, data) => {
  event.preventDefault()

  const title = inputTitleEl.value
  const description = inputDescriptionEl.value

  data.toDo.push({ id: Math.random(), title, description })
  createToDoFormEl.reset()
  modalTodoWrapperEl.style.display = 'none'
  drawList(data, 'toDo')
}

const init = () => {
  const toDoContainerEl = document.querySelector('.toDoContainer')
  const btnOpenModelEl = document.querySelector('#btnOpenModel')

  const todos = {
    toDo: [],
    inProgress: [],
    done: [],
    deleted: [],
  }

  btnOpenModelEl.addEventListener('click', openToDoModal)
  createToDoFormEl.addEventListener('submit', (event) => {
    handleCreateTodoForm(event, todos)
  })
}

init()
