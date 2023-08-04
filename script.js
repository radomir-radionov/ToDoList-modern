const createToDoFormEl = document.querySelector('#modalTodo')
const inputTitleEl = document.querySelector('#inputTitle')
const inputDescriptionEl = document.querySelector('#inputDescription')
const modalTodoWrapperEl = document.querySelector('.modalTodoWrapper')
const modalEditTodoWrapperEl = document.querySelector('.modalEditTodoWrapper')
const btnClose = document.querySelector('#btnClose')

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
        ${
          listType !== 'deleted'
            ? `<button class='button btnEdit'>Edit</button>
              <button class='button btnNext'>Next</button>
              <button class='button btnDelete'>Delete</button>`
            : `<button class='button btnRestore'>Restore</button>`
        }
      </li>
    `
  })
}

const openToDoModal = (event) => {
  event.preventDefault()
  modalTodoWrapperEl.style.display = 'flex'
}

const closeTodoModal = (event, modalName) => {
  event.preventDefault()
  modalName.style.display = 'none'
}

btnClose.addEventListener('click', (event) => {
  event.preventDefault()
  closeTodoModal(event, modalTodoWrapperEl)
})

// write a function to add a todo item

const handleCreateToDoForm = (event, data) => {
  event.preventDefault()

  // Get the values from the form
  const title = inputTitleEl.value
  const description = inputDescriptionEl.value

  // Do something with the form data (e.g., send it to the server)
  data.toDo.push({ id: Math.random(), title, description })
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

const editCard = (eventTarget, data) => {
  const modal = document.querySelector('.modalEditTodoWrapper')
  const inputEditTitle = document.querySelector('#inputEditTitle')
  const inputEditDescription = document.querySelector('#inputEditDescription')
  const btnEdit = document.querySelector('#btnEdit')
  const btnClose = document.querySelector('#modalEditTodo #btnClose')

  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  )

  modal.style.display = 'flex'
  inputEditTitle.value = deletedCard.title
  inputEditDescription.value = deletedCard.description

  const editListenerHandler = (event) => {
    event.preventDefault()
    data[listId].splice(deletedCardIndex, 1, {
      title: inputEditTitle.value,
      description: inputEditDescription.value,
      id: deletedCard.id,
    })

    closeModal()
  }

  const closeModal = () => {
    btnEdit.removeEventListener('click', editListenerHandler)

    modal.style.display = 'none'
    drawList(data, listId)
  }

  btnEdit.addEventListener('click', editListenerHandler)

  btnClose.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal()
  })
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

const deleteCard = (eventTarget, data) => {
  const { listId, deletedCard, deletedCardIndex } = commonVariables(
    eventTarget,
    data
  )

  data[listId].splice(deletedCardIndex, 1)
  data.deleted.push(deletedCard)

  drawList(data, listId)
  drawList(data, 'deleted')
}

const deleteAllFromDeletedList = (data) => {
  data.deleted = []
  drawList(data, 'deleted')
}

const restoreCard = (eventTarget, data) => {
  const { deletedCard, deletedCardIndex } = commonVariables(eventTarget, data)

  data.deleted.splice(deletedCardIndex, 1)
  data.toDo.push(deletedCard)

  drawList(data, 'deleted')
  drawList(data, 'toDo')
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
    const eventTarget = event.target

    switch (true) {
      case [...eventTarget.classList].includes('btnDelete'):
        deleteCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnEdit'):
        editCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnNext'):
        tranferCardToAnotherList(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnRestore'):
        restoreCard(eventTarget, todos)
        break
      case [...eventTarget.classList].includes('btnClearAll'):
        deleteAllFromDeletedList(todos)
        break
    }
  })
}

init()
