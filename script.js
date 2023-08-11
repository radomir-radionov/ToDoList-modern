import editCard from './helpers/toDo/editCard.js'
import transferCard from './helpers/toDo/transferCard.js'
import deleteCard from './helpers/toDo/deleteCard.js'
import deleteCards from './helpers/toDo/deleteCards.js'
import restoreCard from './helpers/toDo/restoreCard.js'

import openModal from './helpers/modal/openModal.js'
import handleFormCreateToDo from './helpers/modal/handleFormCreateToDo.js'
import closeModal from './helpers/modal/closeModal.js'
import drawList from './helpers/toDo/drawList.js'

const init = () => {
  const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
  const formCreateTodoEl = document.querySelector('#modalTodo')
  const btnClose = document.querySelector('#btnClose')
  const todoContainerEl = document.querySelector('.toDoContainer')
  const btnOpenModelEl = document.querySelector('#btnOpenModal')

  const todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : {
        toDo: [],
        inProgress: [],
        done: [],
        deleted: [],
      }

  const todosKeys = Object.keys(todos)
  todosKeys.forEach((key) => drawList(todos, key))

  btnClose.addEventListener('click', (event) => closeModal(event, modalTodoWrapperEl))

  btnOpenModelEl.addEventListener('click', (event) => {
    openModal(event, modalTodoWrapperEl)
  })

  formCreateTodoEl.addEventListener('submit', (event) => handleFormCreateToDo(event, todos))

  todoContainerEl.addEventListener('click', (event) => {
    const eventTarget = event.target

    switch (true) {
      case [...eventTarget.classList].includes('btnDelete'):
        deleteCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnEdit'):
        editCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnNext'):
        transferCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnRestore'):
        restoreCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnClearAll'):
        deleteCards(todos)
        break
    }
  })
}

init()
