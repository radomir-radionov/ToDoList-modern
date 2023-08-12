const openModal = (event, modalEl) => {
  event.preventDefault()
  modalEl.style.display = 'flex'
  document.body.style.overflowY = 'hidden'
}

export default openModal
