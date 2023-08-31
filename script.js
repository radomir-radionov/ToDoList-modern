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
  btnOpenModelEl.addEventListener('click', (event) => openModal(event, modalTodoWrapperEl))
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

const catsEl = document.querySelector('.cats')
const btnGetCatEl = document.querySelector('#btnGetCat')

btnGetCatEl.addEventListener('click', async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.thecatapi.com/v1/images/search')
  const catData = await response.json()

  catData.forEach((cat) => {
    catsEl.innerHTML += `
    <div class="cat">
      <img src="${cat.url}" alt="${cat.title}">
    </div>
  `
  })
})

const polyEl = document.querySelector('.svg-attributes-demo polygon')
const feTurbulenceEl = document.querySelector('feTurbulence')
const feDisplacementMap = document.querySelector('feDisplacementMap')

polyEl.setAttribute('points', '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100')
feTurbulenceEl.setAttribute('baseFrequency', '.05')
feDisplacementMap.setAttribute('scale', '15')

anime({
  targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
  points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
  baseFrequency: 0,
  scale: 1,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutExpo',
})
