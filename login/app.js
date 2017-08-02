const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3003

app.get('/validaToken', (req, res) => {
  // Procure enviar isso pelo header
  const token = req.body
  // de onde está vindo esse negócio
  const host = req.headers.host

  if(token || host == 'localhost:3002') {
    res.json({msg: 'Token valido'})
  } else {
    res.status(500).json({msg: 'Token invalido'})
  }
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl+c')
})
