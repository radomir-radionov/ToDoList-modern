import drawList from '../toDo/drawList.js'

const handleFormCreateToDo = (event, data) => {
  event.preventDefault()
  const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
  const formCreateTodoEl = document.querySelector('#modalTodo')
  const inputTitleEl = document.querySelector('#inputTitle')
  const inputDescriptionEl = document.querySelector('#inputDescription')

  const title = inputTitleEl.value
  const description = inputDescriptionEl.value

  data.toDo.push({id: Date.now(), title, description})
  localStorage.setItem('todos', JSON.stringify(data))
  formCreateTodoEl.reset()
  modalTodoWrapperEl.style.display = 'none'
  drawList(data, 'toDo')
}

export default handleFormCreateToDo
