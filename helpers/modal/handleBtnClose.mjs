import closeModalToDo from './closeModalToDo.mjs'

const handleBtnClose = (event, modalEl) => {
  event.preventDefault()
  closeModalToDo(event, modalEl)
}

export default handleBtnClose
