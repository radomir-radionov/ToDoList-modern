import drawList from '../toDo/drawList.js'

const handleBtnEdit = (event, data, listId, deletedCard, deletedCardIndex, inputEditTitle, inputEditDescription, modal) => {
  event.preventDefault()
  data[listId].splice(deletedCardIndex, 1, {
    title: inputEditTitle.value,
    description: inputEditDescription.value,
    id: deletedCard.id,
  })

  localStorage.setItem('todos', JSON.stringify(data))

  modal.style.display = 'none'
  drawList(data, listId)
}
export default handleBtnEdit
