const drawList = (data, listType) => {
  const list = document.querySelector(`#${listType}`)

  list.innerHTML = ''
  data[listType].forEach((card) => {
    list.innerHTML += `
      <li class='card' id=${card.id}>
        <span>Title:</span>
        <p class='title'>${card.title}</p>
        <span>Description:</span>
        <p class='description'>${card.description}</p>
        <br />
        ${
          listType !== 'deleted'
            ? `<button class='button btnEdit'>Edit</button>
              <button class='button btnNext'>Next</button>
              <button class='button btnDelete'>Delete</button>`
            : `<button class='button btnRestore'>Restore</button>`
        }
      </li>
    `
  })
}

export default drawList
