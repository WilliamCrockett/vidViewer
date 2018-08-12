'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const appAPI = require('../app/api.js')
const appUI = require('../app/ui.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
    .then(appAPI.getAll)
    .then(appUI.populateTableWithIndex)
    .catch(console.error)
    // .catch(appUI.populateTableWithIndexFailure)
}

const addHandlers = () => {
  // $('#signUpForm').on('submit', onSignUp)
  $('#signInForm').on('submit', onSignIn)
}

module.exports = {
  addHandlers
}
