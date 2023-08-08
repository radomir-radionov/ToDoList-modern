const createToDoFormEl = document.querySelector('#modalTodo')
const inputTitleEl = document.querySelector('#inputTitle')
const inputDescriptionEl = document.querySelector('#inputDescription')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const btnClose = document.querySelector('#btnClose')
const btnNext = document.querySelector('.nextButton')

const drawList = (data, listType) => {
  const list = document.querySelector(`#${listType}`)

  list.innerHTML = ''
  data[listType].forEach((card) => {
    list.innerHTML += `
      <li class='card' id=${card.id}>
        <span>Title:</span>
        <p class='title'>${card.title}</p>
        <span>Description:</span>
        <p class='description'>${card.description}</p>
        <br />
        <button class='button nextButton'>Next</button>
      </li>
    `
  })
}

const openToDoModal = () => {
  modalTodoWrapperEl.style.display = 'flex'
}

const closeTodoModal = (event) => {
  event.preventDefault()
  modalTodoWrapperEl.style.display = 'none'
}

btnClose.addEventListener('click', closeTodoModal)

// write a function to add a todo item

const handleCreateToDoForm = (event, data) => {
  event.preventDefault()

  // Get the values from the form
  const title = inputTitleEl.value
  const description = inputDescriptionEl.value

  // Do something with the form data (e.g., send it to the server)
  data.toDo.push({ id: Math.random(), title, description })
  console.log(data.toDo)
  createToDoFormEl.reset()
  modalTodoWrapperEl.style.display = 'none'
  drawList(data, 'toDo')
}

const commonVariables = (eventTarget, data) => {
  const listId = eventTarget.closest('.list').id
  const card = eventTarget.closest('.card')
  const cardId = +card.id
  const deletedCard = data[listId].filter((card) => card.id === cardId)[0]
  const deletedCardIndex = data[listId].findIndex(
    (card) => card.id === deletedCard.id
  )

  return { listId, deletedCard, deletedCardIndex }
}

const tranferCardToAnotherList = (eventTarget, data) => {
  const listId = commonVariables(eventTarget, data).listId
  const deletedCard = commonVariables(eventTarget, data).deletedCard
  const deletedCardIndex = commonVariables(eventTarget, data).deletedCardIndex

  const listsId = [...document.querySelectorAll('.list')].map((list) => list.id)
  const nextListIndex = listsId.findIndex((id) => id === listId) + 1

  data[listId].splice(deletedCardIndex, 1)
  data[listsId[nextListIndex]].push(deletedCard)

  drawList(data, listId)
  drawList(data, listsId[nextListIndex])
}

const init = () => {
  const todoContainerEl = document.querySelector('.toDoContainer')
  const btnOpenModelEl = document.querySelector('#btnOpenModal')

  const todos = {
    toDo: [],
    inProgress: [],
    done: [],
    deleted: [],
  }

  btnOpenModelEl.addEventListener('click', openToDoModal)
  createToDoFormEl.addEventListener('submit', (event) =>
    handleCreateToDoForm(event, todos)
  )
  todoContainerEl.addEventListener('click', (event) => {
    switch (true) {
      case [...event.target.classList].includes('nextButton'):
        tranferCardToAnotherList(event.target, todos)
        break
    }
  })
}

init()
