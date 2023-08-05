import drawList from './drawList.mjs'
import commonVariables from './commonVariables.mjs'

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

export default deleteCard
