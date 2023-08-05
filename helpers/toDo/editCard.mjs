import commonVariables from './commonVariables.mjs'
import handleBtnEdit from '../modal/handleBtnEdit.mjs'
import closeModalEdit from '../modal/closeModalEdit.mjs'

// TODO: split logics into separate files

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

  btnEdit.addEventListener('click', (event) =>
    handleBtnEdit(
      event,
      modal,
      btnEdit,
      listId,
      deletedCard,
      deletedCardIndex,
      inputEditTitle,
      inputEditDescription,
      data
    )
  )

  btnClose.addEventListener('click', (event) => {
    event.preventDefault()
    closeModalEdit(
      modal,
      btnEdit,
      listId,
      deletedCardIndex,
      inputEditTitle,
      inputEditDescription,
      deletedCard,
      data
    )
  })
}

export default editCard
