'use strict'

const store = require('../store')
require('jquery-toast-plugin')

const onSignInSuccess = function (data) {
  $('#signInForm').toggle()
  $('.sign-in-error').css('display', 'none')
  $('.main-header').css('display', 'block')
  // $('.vid-container').css('display', 'block')
  $('.navbar').toggle()
  $('.content-table').css('display', 'block')
  // $('.main-section').toggle()
  $.toast({
    text: "You're now logged in!",
    heading: 'Welcome to vidViewer',
    icon: 'success',
    showHideTransition: 'plain',
    allowToastClose: true,
    hideAfter: 3000,
    stack: 5,
    position: 'top-right',
    textAlign: 'left',
    loader: true,
    loaderBg: '#9EC600'
  })
  $('#signInForm').each(function () {
    this.reset()
  })
  store.user = data.user
}

const onSignInFailure = function () {
  $('.sign-in-error').css('display', 'block')
}

module.exports = {
  onSignInSuccess,
  onSignInFailure
  // onSignOutSuccess,
  // onChangePasswordSuccess,
  // onChangePasswordFailure
}
