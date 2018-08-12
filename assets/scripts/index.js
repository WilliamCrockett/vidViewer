'use strict'

// const setAPIOrigin = require('../../lib/set-api-origin')
// const config = require('./config')
const authEvents = require('./auth/events.js')
const appEvents = require('./app/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // setAPIOrigin(location, config)
  authEvents.addHandlers()
  appEvents.addHandlers()
})
