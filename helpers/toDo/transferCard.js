import drawList from './drawList.js'
import commonVariables from './commonVariables.js'

const transferCard = (eventTarget, data) => {
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

export default transferCard
