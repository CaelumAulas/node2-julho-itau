const factoryConnection = require('./factoryConnection')

class Token {
  constructor() {
    //require(fs) e pega um key gerada que está na pasta key com o nosso coiso
    this.secret = 'dskfjhadskjbfajgaljvbfakljhfiobnerqijakdjfgherioli'
    // CREATE DATABASE login;
    // CREATE TABLE token ( id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, valor TEXT NOT NULL );
  }

  valida(token, callback) {
    const connection = factoryConnection()

    connection.query('SELECT * FROM token WHERE valor=?', [token], (err, result, fields) => {
      if(result.length) {
        callback(true)
      } else {
        callback(false)
      }
    })

    connection.end()
  }

  new(header, body, callback) {
    const connection = factoryConnection()
    // fazer criptrografia com https://www.npmjs.com/package/jsonwebtoken
    const newToken = `${JSON.stringify(header)}.${JSON.stringify(body)}.${this.secret}`

    connection.query('INSERT INTO token SET ?', {valor: newToken}, (err, result, fields) => {
      if(!err) {
        console.log('Gravado o token')

        callback(newToken)
      }
    })

    connection.end()
  }
}

module.exports = Token
