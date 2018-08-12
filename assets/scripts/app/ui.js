'use strict'

const showCrewsTemplate = require('../templates/videos.handlebars')

const populateTableWithIndex = function (data) {
  const showVideosHtml = showCrewsTemplate({ videos: data.videos })
  $('#videosTable tbody').empty()
  $('#videosTable tbody').append(showVideosHtml)
}

const onGetVideoById = function (data) {
  $('.vid-container').css('display', 'block')
  $('.back-to-list').css('display', 'block')
  $('.content-table').css('display', 'none')
  $('#videoPlayer').attr('src', data.video.url)
  window.location.hash = data.video.url
}

const showList = function () {
  $('.vid-container').css('display', 'none')
  $('.content-table').css('display', 'block')
  $('.back-to-list').css('display', 'none')
}

module.exports = {
  populateTableWithIndex,
  onGetVideoById,
  showList
}
