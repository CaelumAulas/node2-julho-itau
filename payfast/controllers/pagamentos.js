// httpstatuses.com
// httpstatusdogs.com

module.exports = (app) => {
  app.get('/pagamento', (req, res) => {
    res.send('JSON com todos os pagemntos')
  })

  app.post('/pagamento', (req, res) => {
    const pagamento = req.body
    let errors = false;
    pagamento.status = "CRIADO"
    pagamento.date = new Date

    req.assert('forma_de_pagamento', 'Chave forma_de_pagamento é obrigátoria').notEmpty()
    req.assert('valor', 'Chave valor é obrigátoria').notEmpty()
    req.assert('valor', 'Chave valor tem que ser um número decimal').isFloat()
    req.assert('moeda', 'Chave moeda é obrigatória').notEmpty()
    req.assert('moeda', 'Chave moeda deve ter 3 caracteres').len(3, 3)

    errors = req.validationErrors()

    if(!errors) {
      const connection = app.persistencia.connectionFactory()
      const pagamentoDao = new app.persistencia.PagamentoDao(connection)

      pagamentoDao.salva(pagamento, (err, result, fields) => {
        if (!err) {
          res.location(`/pagamento/${result.insertId}`)
          res.status(201).json(pagamento)
        } else {
          err.sql = ''
          res.status(400).json(err)
        }
      })
    } else {
      res.status(400).json(errors)
    }
  })
}
