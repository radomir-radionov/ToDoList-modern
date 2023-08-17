import drawList from './drawList.js'
import commonVariables from './commonVariables.js'

const deleteCard = (eventTarget, data) => {
  const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)

  data[listId].splice(deletedCardIndex, 1)
  data.deleted.push(deletedCard)

  drawList(data, listId)
  drawList(data, 'deleted')
}

export default deleteCard
