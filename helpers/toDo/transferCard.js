import drawList from './drawList.js'
import commonVariables from './commonVariables.js'

const transferCard = (eventTarget, data) => {
  const {listId, deletedCard, deletedCardIndex} = commonVariables(eventTarget, data)

  const listsId = [...document.querySelectorAll('.list')].map((list) => list.id)
  const nextListIndex = listsId.findIndex((id) => id === listId) + 1

  data[listId].splice(deletedCardIndex, 1)
  data[listsId[nextListIndex]].push(deletedCard)

  localStorage.setItem('todos', JSON.stringify(data))

  drawList(data, listId)
  drawList(data, listsId[nextListIndex])
}

export default transferCard
