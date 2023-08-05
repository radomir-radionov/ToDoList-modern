import drawList from './drawList.mjs'

const deleteCards = (data) => {
  data.deleted = []
  drawList(data, 'deleted')
}

export default deleteCards
