import drawList from './drawList.js'

const deleteCards = (data) => {
  data.deleted = []
  drawList(data, 'deleted')
}

export default deleteCards
