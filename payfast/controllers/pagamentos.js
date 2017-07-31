module.exports = (app) => {
  app.get('/pagamento', (req, res) => {
    res.send('JSON com todos os pagemntos')
  })

  app.post('/pagamento', (req, res) => {
    const mysql = require('mysql')
    const pagamento = req.body

    const connection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'payfast',
      host: 'localhost'
    })

    connection.query('INSERT INTO pagamentos SET ?', pagamento, (err, result, fields) => {
      if (!err) {
        res.send('Pagamentos salvo com sucesso')
      }
    })

    connection.end()
  })
}



$botao.on('click', function() {

})
