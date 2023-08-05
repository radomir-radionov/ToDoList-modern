const commonVariables = (eventTarget, data) => {
  const listId = eventTarget.closest('.list').id
  const card = eventTarget.closest('.card')
  const cardId = +card.id
  const deletedCard = data[listId].filter((card) => card.id === cardId)[0]
  const deletedCardIndex = data[listId].findIndex(
    (card) => card.id === deletedCard.id
  )

  return { listId, deletedCard, deletedCardIndex }
}

export default commonVariables
