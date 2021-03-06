module.exports = function() {
  const express = require('express')
  const load = require('express-load')
  const bodyParser = require('body-parser')
  const app = express()
  const expressValidator = require('express-validator')

  app.use(bodyParser.json())
  app.use(expressValidator())

  app.use((req, res, next) => {
    console.log('URL que foi executada ' + req.url)
    next()
  })

  load('controllers')
    .then('routes')
    .then('persistencia')
    .into(app)

  return app
}
