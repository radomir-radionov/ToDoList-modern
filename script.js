const createToDoFormEl = document.querySelector('#modalTodo')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const inputTitleEl = document.querySelector('#inputTitle')
const inputDescriptionEl = document.querySelector('#inputDescription')
const btnClose = document.querySelector('#btnClose')

const openToDoModal = (event) => {
  event.preventDefault()
  modalTodoWrapperEl.style.display = 'flex'
}

const closeTodoModal = (event) => {
  event.preventDefault()
  modalTodoWrapperEl.style.display = 'none'
}

btnClose.addEventListener('click', closeTodoModal)

const init = () => {
  const btnOpenModelEl = document.querySelector('#btnOpenModel')

  const todos = {
    toDo: [],
  }

  const handleCreateTodoForm = (event, data) => {
    event.preventDefault()

    const title = inputTitleEl.value
    const description = inputDescriptionEl.value

    data.toDo.push({ id: Math.random(), title, description })
    console.log(data)
    createToDoFormEl.reset()
    modalTodoWrapperEl.style.display = 'none'
  }

  createToDoFormEl.addEventListener('submit', (event) => {
    event.preventDefault()
    handleCreateTodoForm(event, todos)
  })

  btnOpenModelEl.addEventListener('click', openToDoModal)
}

init()
