const createToDoFormEl = document.querySelector('#modalTodo')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const btnOpenModelEl = document.querySelector('#btnOpenModel')
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

btnOpenModelEl.addEventListener('click', openToDoModal)
btnClose.addEventListener('click', closeTodoModal)
