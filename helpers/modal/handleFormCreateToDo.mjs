import drawList from '../toDo/drawList.mjs'

const handleFormCreateToDo = (event, data) => {
  event.preventDefault()
  const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
  const formCreateTodoEl = document.querySelector('#modalTodo')
  const inputTitleEl = document.querySelector('#inputTitle')
  const inputDescriptionEl = document.querySelector('#inputDescription')

  const title = inputTitleEl.value
  const description = inputDescriptionEl.value

  data.toDo.push({ id: Math.random(), title, description })
  formCreateTodoEl.reset()
  modalTodoWrapperEl.style.display = 'none'
  drawList(data, 'toDo')
}

export default handleFormCreateToDo
