'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

let dataID = 0

const onRowClick = function () {
  const id = $(this).attr('data-id')
  api.getVideoByID(id)
    .then(ui.onGetVideoById)
    .catch(ui.onGetVideoByIdError)
}

const backToList = function () {
  $('#videoPlayer').attr('src', $('#videoPlayer').attr('src'))
  ui.showList()
}

const showModalDeleteConfirm = function (event) {
  event.stopPropagation()
  dataID = $(this).attr('data-id')
  $('#videoIDDelete').text(dataID)
  $('#confirmDelete').modal('show')
}

const addHandlers = () => {
  $('#contentTable').on('click', '.video_row', onRowClick)
  $('#backToList').on('click', backToList)
  $('#contentTable').on('click', '.delete_record', showModalDeleteConfirm)
}

module.exports = {
  addHandlers
}
