const express = require('express')
const app = express()
const request = require('request')
const port = 3000

app.get('/v1/pagamento', (req, res) => {
  request.get('http://localhost:3001/pagamento', (err, result) => {
    res.json(JSON.parse(result.body))
  })
})
app.delete('/v2/pagamento/:id', (req, res) {
  const id = req.params.id
  request.delete(`http://localhost:3002/pagamento/${id}`)
})

app.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl+c')
})
