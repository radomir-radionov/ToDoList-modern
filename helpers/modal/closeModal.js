const closeModal = (event, modalEl) => {
  event.preventDefault()
  modalEl.style.display = 'none'
  document.body.style.overflowY = ''
}

export default closeModal
