import editCard from './helpers/toDo/editCard.mjs'
import transferCard from './helpers/toDo/transferCard.mjs'
import deleteCard from './helpers/toDo/deleteCard.mjs'
import deleteCards from './helpers/toDo/deleteCards.mjs'
import restoreCard from './helpers/toDo/restoreCard.mjs'

import openModalToDo from './helpers/modal/openModalToDo.mjs'
import handleFormCreateToDo from './helpers/modal/handleFormCreateToDo.mjs'
import handleBtnClose from './helpers/modal/handleBtnClose.mjs'

const init = () => {
  const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
  const formCreateTodoEl = document.querySelector('#modalTodo')
  const btnClose = document.querySelector('#btnClose')
  const todoContainerEl = document.querySelector('.toDoContainer')
  const btnOpenModelEl = document.querySelector('#btnOpenModal')

  const todos = {
    toDo: [],
    inProgress: [],
    done: [],
    deleted: [],
  }

  btnClose.addEventListener('click', (event) => {
    event.preventDefault()
    handleBtnClose(event, modalTodoWrapperEl)
  })

  btnOpenModelEl.addEventListener('click', (event) => {
    openModalToDo(event, modalTodoWrapperEl)
  })

  formCreateTodoEl.addEventListener('submit', (event) =>
    handleFormCreateToDo(event, todos)
  )

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
