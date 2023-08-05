import closeModalEdit from './closeModalEdit.mjs'

const handleBtnEdit = (
  event,
  modal,
  btnEdit,
  listId,
  deletedCard,
  deletedCardIndex,
  inputEditTitle,
  inputEditDescription,
  data
) => {
  event.preventDefault()
  data[listId].splice(deletedCardIndex, 1, {
    id: deletedCard.id,
    title: inputEditTitle.value,
    description: inputEditDescription.value,
  })

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
}

export default handleBtnEdit
