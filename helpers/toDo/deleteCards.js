import drawList from './drawList.js'

const deleteCards = (data) => {
  data.deleted = []
  localStorage.setItem('todos', JSON.stringify(data))
  drawList(data, 'deleted')
}

export default deleteCards
