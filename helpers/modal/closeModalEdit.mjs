import handleBtnEdit from './handleBtnEdit.mjs'
import drawList from '../toDo/drawList.mjs'

const closeModalEdit = (
  modalEl,
  btnEditEl,
  listId,
  cardId,
  cardIndex,
  inputEditTitleEl,
  inputEditDescriptionEl,
  data
) => {
  btnEditEl.removeEventListener('click', (event) =>
    handleBtnEdit(
      event,
      listId,
      cardIndex,
      inputEditTitleEl,
      inputEditDescriptionEl,
      cardId
    )
  )

  modalEl.style.display = 'none'
  drawList(data, listId)
}

export default closeModalEdit
