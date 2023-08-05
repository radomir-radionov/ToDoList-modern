import commonVariables from './commonVariables.mjs'
import handleBtnEdit from '../modal/handleBtnEdit.mjs'
import closeModal from '../modal/closeModal.mjs'

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

  btnEdit.addEventListener(
    'click',
    (event) => {
      handleBtnEdit(
        event,
        data,
        listId,
        deletedCard,
        deletedCardIndex,
        inputEditTitle,
        inputEditDescription,
        modal
      )
    },
    { once: true }
  )

  btnClose.addEventListener('click', (event) => closeModal(event, modal))
}

export default editCard
