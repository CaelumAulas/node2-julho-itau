module.exports = function() {
  const express = require('express')
  const load = require('express-load')
  const app = express()

  // const controllerPgamentos = require('../controllers/pagamentos')
  // controllerPgamentos(app)
  // require('../controllers/pagamentos')(app)
  // require('../controllers/home')(app)

  load('controllers').into(app)

  return app
}
