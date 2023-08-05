import drawList from './drawList.js'
import commonVariables from './commonVariables.js'

const restoreCard = (eventTarget, data) => {
  const { deletedCard, deletedCardIndex } = commonVariables(eventTarget, data)

  data.deleted.splice(deletedCardIndex, 1)
  data.toDo.push(deletedCard)

  drawList(data, 'deleted')
  drawList(data, 'toDo')
}

export default restoreCard
